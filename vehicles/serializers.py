from rest_framework.serializers import ModelSerializer
from .models import Vehicle, FuelType, BodyType, Make


class VehicleSerializer(ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'


class FuelTypeSerializer(ModelSerializer):
    class Meta:
        model = FuelType
        fields = '__all__'


class BodyTypeSerializer(ModelSerializer):
    class Meta:
        model = BodyType
        fields = '__all__'


class MakeSerializer(ModelSerializer):
    class Meta:
        model = Make
        fields = '__all__'
