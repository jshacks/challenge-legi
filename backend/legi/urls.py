from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^search$', views.search),
    url(r'^doc/(?P<doc_id>[\-_A-Za-z0-9]+)$', views.doc),
    url(r'^submit$', views.submit),
]
