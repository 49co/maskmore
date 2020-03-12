from django.db import models
from rest_framework import serializers
from rest_framework.reverse import reverse

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

    SALE = (
        ('on sale', 'on sale'),
        ('sold out', 'sold out'),
    )

    title          = models.CharField(max_length= 100)
    description    = models.TextField(blank=True)
    origin_url     = models.URLField(blank=True, max_length=400)
    image          = models.FileField(blank=True, upload_to= 'store/masks/')
    package_price  = models.IntegerField(default=0)
    price          = models.IntegerField(default=0)
    category       = models.CharField(max_length=4, choices=CATEGORY, default='ETC')
    is_visible     = models.CharField(max_length=5 ,choices=VISIBLE, default='F')
    published_date = models.DateTimeField(auto_now_add= True, blank= True)
    email          = models.EmailField(max_length=254, blank= True)
    update_time    = models.CharField(blank=True, max_length=400)
    sale           = models.CharField(max_length=10 ,choices=SALE, default='sold out')

    def __str__(self):
        return self.title


class Report(models.Model):
    maskProduct    = models.ForeignKey(MaskProduct, on_delete=models.CASCADE)
    description    = models.TextField(blank=True)
    email          = models.EmailField(max_length=254, blank= True)

    def __str__(self):
        return self.maskProduct.title


class Suggestion(models.Model):
    origin_url     = models.URLField(blank=True, max_length=400)
    title          = models.CharField(max_length= 100)
    package_price  = models.IntegerField(default=0)
    email          = models.EmailField(max_length=254, blank= True)

    def __str__(self):
        return self.title


# Serializer
class MaskProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MaskProduct
        fields = ['pk','title', 'description', 'origin_url', 'image', 'package_price', 'price', 'category', 'email', 'update_time', 'sale', 'is_visible']


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields=['maskProduct', 'masks_title', 'description', 'email']

    masks_title = serializers.SerializerMethodField('get_masks_title')

    def get_masks_title(self, obj):
        return obj.maskProduct.title

class SuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suggestion
        fields=['origin_url', 'title', 'package_price', 'email']
