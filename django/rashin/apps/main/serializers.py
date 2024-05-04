from rest_framework import serializers
from .models import introduction, About, contact, socialMedia

class introductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = introduction
        fields = "__all__"

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"


class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = "__all__"

class socialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = socialMedia
        fields = "__all__"