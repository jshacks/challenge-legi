from django.core.management.base import BaseCommand
from django.conf import settings
from elasticsearch import Elasticsearch

es = Elasticsearch(settings.ELASTICSEARCH_URL)

MAPPINGS = {
    "document": {
        "properties": {
            "id": {"type": "string", "index": "not_analyzed"},
        }
    }
}

SETTINGS = {
    "analysis": {
        "analyzer": {
            "default": {
                "tokenizer": "standard",
                "filter": ["standard", "lowercase", "asciifolding"],
            }
        }
    }
}

class Command(BaseCommand):
    help = "Reset the elasticsearch index"

    def handle(self, **options):
        es.indices.delete(settings.ELASTICSEARCH_INDEX, ignore=[400, 404])
        es.indices.create(settings.ELASTICSEARCH_INDEX, {
            "mappings": MAPPINGS,
            "settings": SETTINGS,
        })
