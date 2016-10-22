import tika
import tika.parser
import requests
import dateutil.parser
import re
import tempfile
from . import hash
from . import models


class ProcessingInputError(Exception):
    def __init__(self, message):
        self.message = message


def extract_tika_meta(meta):
    def _get_flat(dict, *keys):
        item = None
        for key in keys:
            item = dict.get(key)
            if item is not None:
                break
        if type(item) is list:
            return item[0]
        return item

    def _get_bool(dict, *keys):
        item = _get_flat(dict, *keys)
        if not item:
            return False
        if type(item) is bool:
            return item
        return item.lower() == "true"

    data = {
        'content-type':     _get_flat(meta,
                                           'Content-Type',
                                           'content-type'),
        'author':           _get_flat(meta,
                                           'Author',
                                           'meta:author',
                                           'creator'),
        'date-created':     _get_flat(meta,
                                           'Creation-Date',
                                           'dcterms:created',
                                           'meta:created',
                                           'created'),
        'date-modified':    _get_flat(meta,
                                           'Last-Modified',
                                           'Last-Saved-Date',
                                           'dcterms:modified',
                                           'meta:modified',
                                           'created'),
        'original-tika-meta': meta
    }

    for key in ['date-modified', 'date-created']:
        if data.get(key):
            data[key] = dateutil.parser.parse(data[key]).isoformat()
    return data


def download(url):
    r = requests.get(url, stream=True)
    if not r.ok:
        raise ProcessingInputError('document ' + url + " could not be accessed!")

    filename = re.findall("filename=(.+)", r.headers['content-disposition'])[0]
    content_type = r.headers['content-type']

    with tempfile.TemporaryFile() as f:
        for chunk in r.iter_content(chunk_size=1024*4):
            if chunk:
                f.write(chunk)
        size = f.tell()
        f.seek(0)
        sha1 = hash.file_sha1(f)

        docFile, created = models.DocumentFile.objects.update_or_create(
            sha1=sha1,
            size=size,
            filename=filename,
            content_type=content_type,
        )

        if created:
            with docFile.open_for_writing() as store_f:
                f.seek(0)
                for chunk in hash.chunks(f):
                    store_f.write(chunk)
        return docFile


def tika_parse(opened_file):
    data = tika.parser.from_buffer(opened_file)
    return {
        'file-extracted-text': (data.get('content') or '').strip(),
        'file-extracted-meta': extract_tika_meta(data.get('metadata', {}))
    }


def process(submitted_doc):
    submitted_data = submitted_doc.data
    url = submitted_data.get('originalUrl')
    if not url:
        raise ProcessingInputError('POST["data"] does not have "originalUrl" set!')

    doc_file = download(url)
    if not doc_file.tika_data:
        with doc_file.open() as f:
            doc_file.tika_data = tika_parse(f)
            doc_file.save()

    data = dict(submitted_data.items())
    data.update(doc_file.tika_data)

    doc, created = models.Document.objects.update_or_create(
        file_url=url,
        parsed=data,
        submit=submitted_data,
        file=doc_file,
    )

    return doc





