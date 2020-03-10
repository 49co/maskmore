from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import MaskProduct, MaskProductSerializer
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import redirect


# 404 to root
def view_404(request, exception=None):
    print("HERER!!!")
    return redirect('/')

@ensure_csrf_cookie
def index(request):
    return render(request, 'index.html')

class MaskProductsViewSet(viewsets.ModelViewSet):
    queryset = MaskProduct.objects.all()
    serializer_class = MaskProductSerializer
