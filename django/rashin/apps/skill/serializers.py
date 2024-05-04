from rest_framework import serializers
from .models import Skill, skillGroup

class skillGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = skillGroup
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    skill_group = skillGroupSerializer()
    class Meta:
        model = Skill
        fields = "__all__"