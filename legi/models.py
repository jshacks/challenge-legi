from django.db import models
from django.contrib.postgres.fields import JSONField


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


class Document(models.Model):
    file_url = models.CharField(max_length=512, primary_key=True)
    parsed = JSONField(default=dict, blank=True)

    submit = models.ForeignKey('SubmittedData')
    file = models.ForeignKey('DocumentFile')

    date_added = models.DateTimeField(auto_now=True)
    date_modified = models.DateTimeField(auto_now_add=True)

