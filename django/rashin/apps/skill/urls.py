from django.urls import path
from . import views

app_name = 'skill_app'
urlpatterns = [
    # path('', views.skill.as_view(), name='skill'),
    path('skills/', views.SkillSerView.as_view(), name='skills'),


]