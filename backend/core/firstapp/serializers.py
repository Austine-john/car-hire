from rest_framework import serializers
from .models import Car, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True, default=None)

    class Meta:
        model = Car
        fields = [
            'id', 'name', 'category', 'category_name', 'image',
            'seats', 'engine_cc', 'fuel_type', 'transmission',
            'price_per_day', 'is_featured', 'description', 'created_at',
        ]
