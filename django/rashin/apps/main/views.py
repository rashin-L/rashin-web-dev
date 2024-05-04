
from .models import introduction, contact, socialMedia, About
# serializer view
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .serializers import introductionSerializer, AboutSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .models import About, socialMedia
from .serializers import AboutSerializer, contactSerializer, socialMediaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



# serilizer   
#=============================================================================================
class introductionSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = introduction.objects.all()
    serializer_class = introductionSerializer
    pagination_class = None
#=============================================================================================
class socialSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = socialMedia.objects.all()
    serializer_class = socialMediaSerializer
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
