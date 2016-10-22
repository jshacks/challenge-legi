from contextlib import contextmanager
from django.db import models
from django.contrib.postgres.fields import JSONField
from django.conf import settings


class SubmittedData(models.Model):
    sha1 = models.CharField(max_length=50, primary_key=True)
    data = JSONField(default=dict, blank=True)

    date_added = models.DateTimeField(auto_now=True)
    date_modified = models.DateTimeField(auto_now_add=True)


class DocumentFile(models.Model):
    sha1 = models.CharField(max_length=50, primary_key=True)

    filename = models.CharField(max_length=512)
    size = models.IntegerField()

    content_type = models.CharField(max_length=128, blank=True)
    tika_data = JSONField(default=dict, blank=True)

    date_added = models.DateTimeField(auto_now=True)
    date_modified = models.DateTimeField(auto_now_add=True)

    @contextmanager
    def open_for_writing(self):
        if not self.path.parent.exists():
            self.path.parent.mkdir(parents=True)
        yield self.path.open('wb')

    @contextmanager
    def open(self):
        yield self.path.open('rb')

    @property
    def path(self):
        return settings.FILE_DIR / self.sha1 / self.filename


class Document(models.Model):
    file_url = models.CharField(max_length=512, primary_key=True)
    parsed = JSONField(default=dict, blank=True)

    submit = models.ForeignKey('SubmittedData')
    file = models.ForeignKey('DocumentFile')

    date_added = models.DateTimeField(auto_now=True)
    date_modified = models.DateTimeField(auto_now_add=True)

