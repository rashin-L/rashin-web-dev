from django.contrib import admin
from .models import Project, Project_gallery, Outcomes_achieved, Objective, Role_project



@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):    
    list_display = ('project_name', 'team_size',
                    'link', 'git',
                    'start_date', 'end_date', 'main_img', 'main_video',
                    'is_active', 'icon', 'slug')
    list_editable = ['is_active', ]
    search_fields = ['slug', ]
    
    
@admin.register(Project_gallery)
class Project_galleryAdmin(admin.ModelAdmin):    
    list_display = ('project','project_img','order')
    # list_editable = ['is_active', ]
    search_fields = ['project', ]


@admin.register(Outcomes_achieved)
class Outcomes_achievedAdmin(admin.ModelAdmin):    
    list_display = ('description',)

@admin.register(Objective)
class ObjectiveAdmin(admin.ModelAdmin):    
    list_display = ('description',)
    
@admin.register(Role_project)
class Role_projectAdmin(admin.ModelAdmin):    
    list_display = ('description',)