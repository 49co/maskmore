from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'masks', views.MaskProductsViewSet)

urlpatterns = [
    url(r'^store/', include(router.urls)),
    path('', views.index, name='index'),
]