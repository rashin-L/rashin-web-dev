from django.shortcuts import render
from django.views import View
from .models import Project, Project_gallery
from django.shortcuts import get_object_or_404
from files import correct_url 
from django.db.models import Q
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .serializers import ProjectSerializer
from rest_framework import permissions





class project(View):
    def get(self, request):
        project_info = Project.objects.filter(is_active=True)
        return render(request, 'project/project.html', {'project_info':project_info, })


def project_detail(request, slug):  
    project_info = get_object_or_404(Project, slug=slug)
    image =correct_url(project_info.main_img)
    Project_gallery_info = Project_gallery.objects.filter(Q(is_active=True)& Q(project_id=project_info.id))
    img_list = []
    for img in Project_gallery_info:    
        img_list.append(correct_url(img.project_img))
        
    print(project_info)
    context={
        'project_info':project_info,
        'Project_gallery_info':Project_gallery_info,
        'image':image,
        'img_list':img_list
    }
    return render(request, 'project/project_detail.html', context)



# serilizer
#=============================================================================================
class ProjectSerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = None

    