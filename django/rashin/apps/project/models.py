from django.db import models
from files import FileUpload
from apps.skill.models import Skill
from django.utils import timezone
# class Tools_Technologies(models.Model):
    

class Objective(models.Model):
    description = models.TextField()  
    
    def __str__(self) -> str:
        return self.description
    
class Outcomes_achieved(models.Model):
    description = models.TextField() 
    
    def __str__(self) -> str:
        return self.description
    
class Role_project(models.Model):
    description = models.TextField() 
    
    def __str__(self) -> str:
        return self.description



class Project(models.Model):
    project_type = models.CharField(max_length=50, null=True, blank=True)
    project_name = models.CharField(max_length=50,)
    short_description = models.CharField(max_length=50, null=True, blank=True)
    objective = models.ManyToManyField(Objective, blank=True,  )
    your_role_project = models.ManyToManyField(Role_project, blank=True)
    team_size = models.PositiveIntegerField( null=True, blank=True)
    skills_used = models.ManyToManyField(Skill, related_name="skills_project", blank=True,)
    outcomes_achieved = models.ManyToManyField(Outcomes_achieved, blank=True)
    git = models.URLField(max_length=200, null=True, blank=True)   
    link = models.URLField(max_length=200, null=True, blank=True)   
    start_date = models.DateField( ) 
    end_date = models.DateField( default=timezone.now,) 
    update_date = models.DateTimeField( auto_now_add=True,) 
    img_upload = FileUpload('images', 'project')  
    icon_upload = FileUpload('images', 'icon')  
    main_img = models.ImageField(upload_to=img_upload.upload_to, null=True, blank=True)
    icon = models.ImageField(upload_to=icon_upload.upload_to, null=True, blank=True)
    video_upload = FileUpload('videos', 'project')  
    main_video = models.ImageField(upload_to=video_upload.upload_to, null=True, blank=True)
    is_active = models.BooleanField(default=False,)
    slug = models.SlugField(max_length=30, verbose_name='slug', unique=True)
    
    def __str__(self) -> str:
        return f"{self.project_name}"


class Project_gallery(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='project_gallery')
    project_upload = FileUpload('images', 'project')  
    project_img = models.ImageField(upload_to=project_upload.upload_to, null=True, blank=True)
    is_active = models.BooleanField(default=False,)
    order = models.PositiveSmallIntegerField( help_text="Sort images for display", null=True, blank=True)
    
    def __str__(self) -> str:
        return f"{self.project_img}"