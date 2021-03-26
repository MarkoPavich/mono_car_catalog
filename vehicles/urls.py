from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import VehicleViewSet, MakesViewSet, BodyTypeViewSet, FuelTypeViewSet, ModelsViewSet, VehiclesAPI

router = DefaultRouter()
# router.register('vehicles', VehicleViewSet, basename='manageVehicles')
router.register('carmakes', MakesViewSet, basename='manageMakes')
router.register('fueltypes', FuelTypeViewSet, basename='ManageFuelTypes')
router.register('bodytypes', BodyTypeViewSet, basename='manageBodyTypes')
router.register('carmodels', ModelsViewSet, basename='manageCarModels')

urlpatterns = [
    path('/', include(router.urls)),
    path('vehicles/', VehiclesAPI.as_view()),
    path('vehicles/<slug:id_slug>/', VehiclesAPI.as_view()),
]
