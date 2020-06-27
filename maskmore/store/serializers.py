from rest_framework import serializers
from .models import MaskProduct, Report, Suggestion

# Serializer
class MaskProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MaskProduct
        fields = ['pk', 'title', 'description', 'origin_url', 'image', 'package_price', \
            'price', 'category', 'email', 'update_time', 'sale', 'is_visible']


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['maskProduct', 'masks_title', 'description', 'email']

    masks_title = serializers.SerializerMethodField('get_masks_title')

    def get_masks_title(self, obj):
        return obj.maskProduct.title

class SuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suggestion
        fields = ['origin_url', 'title', 'package_price', 'email']
