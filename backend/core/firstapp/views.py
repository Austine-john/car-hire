from rest_framework import viewsets, filters
from .models import Car, Category
from .serializers import CarSerializer, CategorySerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.select_related('category').all()
    serializer_class = CarSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'category__name']
    ordering_fields = ['price_per_day', 'name', 'created_at']

    def get_queryset(self):
        qs = super().get_queryset()
        featured = self.request.query_params.get('featured')
        category = self.request.query_params.get('category')
        if featured is not None:
            qs = qs.filter(is_featured=featured.lower() in ('true', '1'))
        if category is not None:
            qs = qs.filter(category_id=category)
        return qs