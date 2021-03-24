from .serializers import VehicleSerializer, FuelTypeSerializer, BodyTypeSerializer, MakeSerializer
from rest_framework.viewsets import ModelViewSet
from .models import Vehicle, BodyType, FuelType, Make


class VehicleViewSet(ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


class FuelTypeViewSet(ModelViewSet):
    queryset = FuelType.objects.all()
    serializer_class = FuelTypeSerializer


class BodyTypeViewSet(ModelViewSet):
    queryset = BodyType.objects.all()
    serializer_class = BodyTypeSerializer


class MakesViewSet(ModelViewSet):
    queryset = Make.objects.all()
    serializer_class = MakeSerializer
