from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length = 128)
    description = models.TextField()
    price = models.DecimalField(max_digits = 8, decimal_places = 2)
