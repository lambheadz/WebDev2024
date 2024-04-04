from django.shortcuts import render
from django.http import HttpRequest, JsonResponse
from . import models

def get_products(request):
    products = models.Product.objects.all()
    products_json = [prod.to_json() for prod in products]
    return JsonResponse(products_json, safe=False)

def get_product(request, pk = None):
    try:
        product = models.Product.objects.get(id = pk)
        return JsonResponse(product.to_json())
    except models.Product.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status = 400)
    
def get_categories(request):
    categories = models.Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request, pk = None):
    try:
        category = models.Category.objects.get(id = pk)
        return JsonResponse(category.to_json())
    except models.Category.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status = 400)
    
def get_products_by_category(request, pk=None):
    products = models.Product.objects.all()
    products_json = [prod.to_json() for prod in products.filter(category = pk)]
    return JsonResponse(products_json, safe=False)