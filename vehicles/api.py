from .serializers import VehicleSerializer, FuelTypeSerializer, BodyTypeSerializer, MakeSerializer, ModelsSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Vehicle, BodyType, FuelType, Make, Model


class VehiclesAPI(APIView):
    def get(self, request, id_slug=None):
        if id_slug:
            try:
                vehicle = Vehicle.objects.get(id=id_slug)
                serialized = VehicleSerializer(vehicle)
                return Response(serialized.data, status.HTTP_200_OK)
            except Vehicle.DoesNotExist:
                return Response(status.HTTP_404_NOT_FOUND)
        qset = Vehicle.objects.all()
        serialized = VehicleSerializer(qset, many=True)
        return Response(serialized.data, status.HTTP_200_OK)


class VehicleViewSet(ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


class ModelsViewSet(ModelViewSet):
    queryset = Model.objects.all()
    serializer_class = ModelsSerializer


class FuelTypeViewSet(ModelViewSet):
    queryset = FuelType.objects.all()
    serializer_class = FuelTypeSerializer


class BodyTypeViewSet(ModelViewSet):
    queryset = BodyType.objects.all()
    serializer_class = BodyTypeSerializer


class MakesViewSet(ModelViewSet):
    queryset = Make.objects.all()
    serializer_class = MakeSerializer
