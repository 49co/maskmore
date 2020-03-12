from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'masks/(?P<mask_id>[^/.]+)/reports', views.ReportViewSet)
router.register(r'masks', views.MaskProductViewSet)
router.register(r'suggestions', views.SuggestionViewSet)

urlpatterns = [
    url(r'^store/', include(router.urls)),
    path('', views.index, name='index'),
]