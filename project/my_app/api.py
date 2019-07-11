from rest_framework import viewsets, permissions
from .serializer import MyAppSerializer
from my_app.models import MyApp


# MyApp viewset
class MyAppViewSet(viewsets.ModelViewSet):
    queryset = MyApp.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MyAppSerializer
