from django.db import models
from users.models import User

# Create your models here.


class Make(models.Model):
    name = models.CharField(max_length=100)
    abrv = models.CharField(max_length=4, unique=True)

    def __str__(self):
        return f'{self.name} | (abrv. {self.abrv})'


class Model(models.Model):
    make = models.ForeignKey(Make, on_delete=models.CASCADE, related_name='models')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class BodyType(models.Model):
    body_type = models.CharField(max_length=100)

    def __str__(self):
        return self.body_type


class FuelType(models.Model):
    fuel_type = models.CharField(max_length=100)

    def __str__(self):
        return self.fuel_type


class Vehicle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='vehicles')
    make = models.ForeignKey(Make, on_delete=models.CASCADE, related_name='vehicles')
    model = models.ForeignKey(Model, on_delete=models.CASCADE, related_name='vehicles')
    fuel_type = models.ForeignKey(FuelType, on_delete=models.CASCADE, related_name='vehicles')
    body_type = models.ForeignKey(BodyType, on_delete=models.CASCADE, related_name='vehicles')
    variant = models.CharField(max_length=100, blank=True)
    manufacture_date = models.DateField()
    mileage = models.CharField(max_length=20)
    description = models.CharField(max_length=800, blank=True)
    img = models.URLField(max_length=255)
    price = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.make.name} {self.model.name} by {self.user.username}'

