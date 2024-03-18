from rest_framework import serializers
from .models import Project, OtherProject, Experience, Programming_Experience, Education, Achievement, Certification, Contact, Video, Programming_Experience_Extra
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class OtherProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherProject
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class Programming_ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programming_Experience
        fields = '__all__'

class Programming_Experience_ExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programming_Experience_Extra
        fields = '__all__'
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'