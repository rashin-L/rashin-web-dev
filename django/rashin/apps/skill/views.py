
from .models import Skill
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .serializers import SkillSerializer
from rest_framework import permissions


# serilizer
#=============================================================================================
class SkillSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    pagination_class = None
