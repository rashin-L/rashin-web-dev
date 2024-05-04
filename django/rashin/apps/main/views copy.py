# pylint: disable=missing-module-docstring
from .forms import ContactForm
from django.shortcuts import redirect, render
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, HttpResponseNotFound
from .models import introduction, contact, socialMedia, About
# serializer view
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .serializers import introductionSerializer, AboutSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .models import About
from .serializers import AboutSerializer, contactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from files import correct_url
from django.shortcuts import get_object_or_404


def error_404(request, exception):
    return render(request,'404.html')


def media_admin(request):
    return {"media_url":settings.MEDIA_URL,}


# ----------------------------------------------------------------------------------------
def index(request):
    
    return render(request, 'main_app/index.html')
# ----------------------------------------------------------------------------------------

def footer(request):
    try:
        social_media = socialMedia.objects.get(is_active=True)
    except socialMedia.DoesNotExist:
        social_media = None
    return render(request, 'partials/footer.html', {'social_media':social_media})
# ----------------------------------------------------------------------------------------

def introductionView(request):
    try:
        Intro = introduction.objects.all()
    except introduction.DoesNotExist:
        Intro = None
    return render(request, 'partials/introduction.html', {'Intro':Intro})
# ----------------------------------------------------------------------------------------

def main_img(request):    
    try:
        Intro = introduction.objects.all()
        edit_intro_img =correct_url(Intro.main_img)
    except introduction.DoesNotExist:
        Intro = None
        edit_intro_img = None
    
    return render(request, 'partials/main_img.html',{'Intro':Intro,  'edit_intro_img':edit_intro_img})
# ----------------------------------------------------------------------------------------
def nav(request):
    try:
        Intro = introduction.objects.all()
        edit_intro_logo =correct_url(Intro.logo)
    except introduction.DoesNotExist:
        Intro = None 
        edit_intro_logo = None
    
    return render(request, 'partials/nav.html',{'Intro':Intro, 'edit_intro_logo':edit_intro_logo})
# ----------------------------------------------------------------------------------------

def download_cv(request):
    fs = FileSystemStorage()
    Intro = introduction.objects.all()
    file_name = str(Intro.cv)
    print(file_name)
    if fs.exists(file_name):
        with fs.open(file_name) as pdf:
            response = HttpResponse(pdf, content_type = "aplication/pdf")
            response['Content-Disposition'] = "attachmant; filename=Rashin_Latify_Full_Stack_Developer.pdf"
            return response
    else:
        return HttpResponseNotFound("File not found...")
    
# ----------------------------------------------------------------------------------------

def contact_form(request):
    form = ContactForm(request.POST)
    if form.is_valid():
        
        cd = form.cleaned_data
        msg = contact()
        msg.first_name = cd['first_name']
        msg.last_name = cd['last_name']
        msg.subject = cd['subject']
        msg.message = cd['message']
        msg.email = cd['email']
        msg.save()
        # return redirect
    context={
        'form':form
    }
    return render(request, 'main_app/contact.html', context)





# serilizer
#=============================================================================================
class introductionSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = introduction.objects.all()
    serializer_class = introductionSerializer
    pagination_class = None

#=============================================================================================

class AboutSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    pagination_class = None
    
    
class ContactAPI(APIView):
    def post(self, request):
        ser_data = contactSerializer(data=request.POST)
        if ser_data.is_valid():
            ser_data.save()
            # ser_data.create(request, ser_data.validated_data)
            return Response( "Thank you for your message."
            , status=status.HTTP_201_CREATED) 
        return Response(ser_data.errors, status=status.HTTP_400_BAD_REQUEST)
