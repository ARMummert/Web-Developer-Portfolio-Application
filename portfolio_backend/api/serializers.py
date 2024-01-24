from rest_framework import serializers
from .models import Project, Experience, Programming_Experience, Education, Achievements, Certifications
from rest_framework import serializers

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class Programming_ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programming_Experience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class AchievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievements
        fields = '__all__'

class CertificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = '__all__'