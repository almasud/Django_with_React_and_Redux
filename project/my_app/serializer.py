from rest_framework import serializers
from my_app.models import MyApp


# MyApp serializer
class MyAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyApp
        fields = '__all__'
