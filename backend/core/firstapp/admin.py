from django.contrib import admin
from .models import Car, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name']


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price_per_day', 'fuel_type', 'transmission', 'is_featured']
    list_filter = ['category', 'fuel_type', 'transmission', 'is_featured']
    search_fields = ['name', 'description']
    list_editable = ['is_featured', 'price_per_day']
