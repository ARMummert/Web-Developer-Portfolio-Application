from django.shortcuts import render
from rest_framework import viewsets
from .models import Project, Experience, Programming_Experience, Education, Achievements, Certifications
from .serializers import ProjectSerializer, ExperienceSerializer, Programming_ExperienceSerializer, EducationSerializer, AchievementsSerializer, CertificationsSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class Programming_ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Programming_Experience.objects.all()
    serializer_class = Programming_ExperienceSerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class AchievementsViewSet(viewsets.ModelViewSet):
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer

class CertificationsViewSet(viewsets.ModelViewSet):
    queryset = Certifications.objects.all()
    serializer_class = CertificationsSerializer

#def index(request):
#    return render(request, 'index.html')




