from django.db import models
from rest_framework import serializers

class MaskProduct(models.Model):
    VISIBLE = (
        ('T', 'True'),
        ('F', 'False'),
    )

    CATEGORY = (
        ('KF94', 'KF94'),
        ('KF80', 'KF80'),
        ('ETC', 'ETC'),
    )
    mask_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length= 100)
    description = models.TextField(blank=True)
    origin_url = models.URLField(blank=True, max_length=400)
    image = models.FileField(blank=True, upload_to= 'store/masks/')
    package_price = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    category = models.CharField(max_length=4, choices=CATEGORY, default='ETC')
    is_visible = models.CharField(max_length=1 ,choices=VISIBLE, default='F')
    published_date = models.DateTimeField(auto_now_add= True, blank= True)

    def __str__(self):
        return self.title

class MaskProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MaskProduct
        fields = ['title', 'description', 'origin_url', 'image', 'package_price', 'price', 'category', 'is_visible']