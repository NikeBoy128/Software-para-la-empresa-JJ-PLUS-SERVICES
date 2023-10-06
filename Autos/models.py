from django.db import models


class Autos(models.Model):
    id = models.CharField(primary_key=True, max_length=6)
    Marca = models.CharField(max_length=100,null=True)
    Modelo = models.CharField(max_length=100,null=True)
    anio = models.DateField(null=True)
