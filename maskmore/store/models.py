from django.db import models
from rest_framework import serializers

class MaskProduct(models.Model):
    title = models.CharField(max_length= 100)
    description = models.TextField()
    origin_url = models.URLField(max_length=400)
    image = models.FileField(upload_to= 'products/masks/')
    price = models.IntegerField()
    published_date = models.DateTimeField(auto_now_add= True, blank= True)

    def __str__(self):
        return self.title

class MaskProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MaskProduct
        fields = ['title', 'description', 'origin_url', 'image', 'price']