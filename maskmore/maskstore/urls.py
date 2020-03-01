from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'products/masks', views.MaskProductsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    path('', views.index, name='index'),
]