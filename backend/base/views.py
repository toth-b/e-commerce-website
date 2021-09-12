from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/products',
        '/api/products/create',
        '/api/products/upload',

        '/api/products/top',
        # Single product:
        '/api/products/<id>/',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)


@api_view(['GET'])
def get_products(request):
    return Response(products)


@api_view(['GET'])
def get_product(request, primary_key):
    product = None
    for i in products:
        if i['id'] == primary_key:
            product = i
            break
    return Response(product)
