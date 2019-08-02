from rest_framework import viewsets, permissions
from .serializer import MyAppSerializer
from my_app.models import MyApp


# MyApp viewset
class MyAppViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MyAppSerializer

    def get_queryset(self):
        return self.request.user.myapps.all()

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)
