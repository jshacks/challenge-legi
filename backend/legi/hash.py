import hashlib


def chunks(file, blocksize=65536):
    while True:
        data = file.read(blocksize)
        if not data:
            return
        yield data


def file_sha1(opened_file):
    sha1 = hashlib.sha1()

    for data in chunks(opened_file):
        sha1.update(data)

    return sha1.hexdigest()


def bytes_sha1(b):
    sha1 = hashlib.sha1()
    sha1.update(b)
    return sha1.hexdigest()


def str_sha1(str):
    return bytes_sha1(bytes(str, encoding='latin1', errors='replace'))


def dict_sha1(d):
    if not d:
        return str_sha1(str(frozenset()))
    return str_sha1(str(frozenset(d.items())))
