from rest_framework import viewsets, permissions
from .serializer import MyAppSerializer


# MyApp viewset
class MyAppViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MyAppSerializer

    def get_queryset(self):
        return self.request.user.myApps.all()

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)
