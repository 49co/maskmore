from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import MaskProduct, MaskProductSerializer, Suggestion, SuggestionSerializer, Report, ReportSerializer
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import redirect
from rest_framework.response import Response


class MaskProductViewSet(viewsets.ModelViewSet):
    queryset = MaskProduct.objects.all()
    serializer_class = MaskProductSerializer


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    
    def create(self, request, mask_id):
        serializer = ReportSerializer(data=request.data)
        serializer.is_valid()
        serializer.save(maskProduct_id=mask_id)
        return Response(serializer.data)


class SuggestionViewSet(viewsets.ModelViewSet):
    queryset = Suggestion.objects.all()
    serializer_class = SuggestionSerializer


# 404 to root
def view_404(request, exception=None):
    return redirect('/')

@ensure_csrf_cookie
def index(request):
    return render(request, 'index.html')
