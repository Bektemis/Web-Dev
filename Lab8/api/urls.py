from django.urls import path
from .views import *

urlpatterns = [
    path('api/products/', product_list),
    path('api/products/<int:id>/', product_detail),
    path('api/categories/', category_list),
    path('api/categories/<int:id>/', category_detail),
    path('api/categories/<int:id>/products/', category_products),
]