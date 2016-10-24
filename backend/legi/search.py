from elasticsearch import Elasticsearch, helpers, exceptions
from django.conf import settings

es = Elasticsearch(settings.ELASTICSEARCH_URL)
DOCUMENT_TYPE = 'document'


class SearchError(Exception):
    def __init__(self, reason):
        self.reason = reason

    def __str__(self):
        return "SearchError: " + self.reason


def translate_es_errors(func):
    """Catches all Elasticsearch errors and raises an instance of SearchError."""

    def wrapper(*a, **k):
        try:
            return func(*a, **k)
        except exceptions.TransportError as e:
            print(str(e))
            raise SearchError("Elasticsearch refused connection: " + str(e))
    return wrapper


@translate_es_errors
def index_data(document):
    """Indexes an instance of the Document model in Elasticsearch."""

    sha1 = document.file.sha1

    es.index(
        index=settings.ELASTICSEARCH_INDEX,
        doc_type=DOCUMENT_TYPE,
        id=sha1,
        body=document.parsed,
    )


@translate_es_errors
def run_search(query, fields, sort=None, highlight=None):
    query_body = {
        'query': query,
        'fields': fields,
    }

    if sort:
        query_body['sort'] = sort

    if highlight:
        query_body['highlight'] = highlight

    return es.search(
        index=settings.ELASTICSEARCH_INDEX,
        doc_type=DOCUMENT_TYPE,
        body=query_body,
    )


def search_ids(query_string):
    """Runs a querystring search on Elasticsearch and returns all the hits' ids."""

    query = {
        "query_string": {
            "query": query_string,
            "default_operator": "AND",
        }
    }
    fields = ["_id"]
    results = run_search(query, fields)

    hits = results['hits']['hits']
    return [item['_id'] for item in hits]
