from django.urls import path, include
from rest_framework import routers
from .api import MyAppViewSet

router = routers.DefaultRouter()
router.register('api/my_app', MyAppViewSet, 'my_app_viewset')

urlpatterns = router.urls
