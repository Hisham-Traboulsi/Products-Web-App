from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from .models import Products
import json as simplejson
from django.core import serializers
from django.http import QueryDict


def index(request):
    products_list = Products.objects.all()
    context = {'products_list': products_list}
    return render(request, 'products/index.html', context)


def create_product(request):
    if request.method == 'POST':
        id = request.POST['product_id']
        name = request.POST['product_name']
        description = request.POST['product_description']
        price = request.POST['product_price']

        product_entry, created = Products.objects.get_or_create(
            id = id,
            name = name,
            description = description,
            price = price,
        )

        product_entry.save()
        # Products(name = name, description = description, price = price).save()

        products_list = list(Products.objects.all().values('name', 'description', 'price'))

        return JsonResponse(products_list,content_type='application/json' ,safe=False)


def delete_product(request, id):
    if request.method == 'DELETE':
        instance = Products.objects.get(id = id)
        instance.delete()

        products_list = list(Products.objects.all().values('name', 'description', 'price'))
        return JsonResponse(products_list, content_type='application/json', safe=False)

def fetch_product(request, id):
    if request.method == 'GET':

         data = serializers.serialize("json", Products.objects.filter(pk = id))
         return HttpResponse(data, content_type='application/json')

def update_product(request, id):
    if request.method == 'PUT':
        data = QueryDict(request.body)
        update_name = data.get("product_name")
        update_description = data.get("product_description")
        update_price = data.get("product_price")

        instance = Products.objects.get(id = id)

        instance.name = update_name
        instance.description = update_description
        instance.price = update_price

        instance.save()

        data_instance = serializers.serialize("json", Products.objects.filter(pk = id))
        return HttpResponse(data_instance, content_type='application/json')
