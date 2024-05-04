from django.urls import path
from . import views

app_name = 'project_app'
urlpatterns = [
    # path('', views.project.as_view(), name='project'),
    # path('project-detail/<slug:slug>', views.project_detail, name='project_detail'),

    path('projects', views.ProjectSerView.as_view(), name='projects'),


]