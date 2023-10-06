from django.shortcuts import render
from django.http import HttpResponse
from .models import Autos

def index(request):
    auto=Autos.objects.all()
    return render(request, 'index.html', {'autos':Autos})