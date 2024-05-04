from django.shortcuts import render
from django.views import View
from .models import Service

class service(View):
    def get(self, request):
        service_info = Service.objects.filter(is_active=True)
        return render(request, 'service/service.html', {'service_info':service_info})
