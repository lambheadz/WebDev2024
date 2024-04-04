from . import views
from django.urls import path

urlpatterns = [
    path('products/', views.get_products),
    path("products/<int:pk>/", views.get_product),
    path('categories/', views.get_categories),
    path('categories/<int:pk>/', views.get_category),
    path('categories/<int:pk>/products/', views.get_products_by_category),
]