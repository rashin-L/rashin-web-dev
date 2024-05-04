from django.shortcuts import render
from django.views import View
from .models import Skill, skillGroup
from django.db.models import Q
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .serializers import SkillSerializer
from rest_framework import permissions

class skill(View):
    def get(self, request):
        skillGroup_info = skillGroup.objects.filter(is_active=True)
        skill_info = Skill.objects.filter(is_active=True)
        context={
            'skillGroup_info':skillGroup_info, 
            'skill_info':skill_info ,
            'percent':'%'
        }
        return render(request, 'skill/skill.html', context)


# serilizer
#=============================================================================================
class SkillSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    pagination_class = None
