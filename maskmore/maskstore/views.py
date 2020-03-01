from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import MaskProduct, MaskProductSerializer


def index(request):
    return render(request, 'maskstore/index.html')

class MaskProductsViewSet(viewsets.ModelViewSet):
    queryset = MaskProduct.objects.all()
    serializer_class = MaskProductSerializer
