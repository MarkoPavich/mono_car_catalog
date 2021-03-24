from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import VehicleViewSet, MakesViewSet, BodyTypeViewSet, FuelTypeViewSet

router = DefaultRouter()
router.register('vehicles', VehicleViewSet, basename='manageVehicles')
router.register('carmakes', MakesViewSet, basename='manageMakes')
router.register('fueltypes', FuelTypeViewSet, basename='ManageFuelTypes')
router.register('bodytypes', BodyTypeViewSet, basename='manageBodyTypes')

urlpatterns = [
    path('/', include(router.urls)),
]
