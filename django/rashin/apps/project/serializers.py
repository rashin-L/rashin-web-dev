from rest_framework import serializers
from .models import Project, Project_gallery, Role_project, Outcomes_achieved
from apps.skill.serializers import SkillSerializer



class Project_gallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Project_gallery
        fields = "__all__"

class Role_projectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role_project
        fields = "__all__"

class Outcomes_achievedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Outcomes_achieved
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    skills_used = SkillSerializer(many=True)
    project_gallery = Project_gallerySerializer(many=True)
    your_role_project = Role_projectSerializer(many=True)
    outcomes_achieved = Outcomes_achievedSerializer(many=True)
    class Meta:
        model = Project
        fields = "__all__"