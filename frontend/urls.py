from django.urls import path
from .views import view_index

# Specify paths to be used by the frontend app
urlpatterns = [
    path("", view_index, name="app")
]