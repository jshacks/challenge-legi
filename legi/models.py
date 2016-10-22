from django.db import models
from django.contrib.postgres.fields import JSONField


class SubmittedData(models.Model):
    sha1 = models.CharField(max_length=50, primary_key=True)
    data = JSONField(default=dict, blank=True)
    first_submit = models.DateTimeField(auto_now=True)
    last_submit = models.DateTimeField(auto_now_add=True)


class DocumentFile(models.Model):
    sha1 = models.CharField(max_length=50, primary_key=True)
    filename = models.CharField(max_length=512)
    size = models.IntegerField()
    content_type = models.CharField(max_length=128, blank=True)


class TikaCache(models.Model):
    sha1 = models.CharField(max_length=50, primary_key=True)
    data = JSONField(default=dict, blank=True)
    date = models.DateTimeField(auto_now=True)


class Document(models.Model):
    file_url = models.CharField(max_length=512, primary_key=True)
    submit = models.ForeignKey('SubmittedData')
    file = models.ForeignKey('DocumentFile')
    parsed = JSONField(default=dict, blank=True)
    date = models.DateTimeField(auto_now=True)
    date_modified = models.DateTimeField(auto_now_add=True)

