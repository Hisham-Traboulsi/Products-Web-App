
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^product/add/$', views.create_product, name = "create_product"),
    url(r'^product/delete/(?P<id>[0-9]+)$', views.delete_product, name = "delete_product"),
    url(r'^product/fetch/(?P<id>[0-9]+)$', views.fetch_product, name = "fetch_product"),
    url(r'^product/update/(?P<id>[0-9]+)$', views.update_product, name = "update_product"),
]
