
from .models import Project
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .serializers import ProjectSerializer
from rest_framework import permissions



# serilizer
#=============================================================================================
class ProjectSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = None

    