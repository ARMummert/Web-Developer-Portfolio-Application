from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Project, OtherProject, Experience, Programming_Experience, Education, Achievements, Certifications, Contact, Video, Programming_Experience_Extra
from .serializers import ProjectSerializer, OtherProjectSerializer, ExperienceSerializer, Programming_ExperienceSerializer, Programming_Experience_ExtraSerializer, EducationSerializer, AchievementsSerializer, CertificationsSerializer, ContactSerializer, VideoSerializer
from django.core.mail import send_mail

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class OtherProjectViewSet(viewsets.ModelViewSet):
    queryset = OtherProject.objects.all()
    serializer_class = OtherProjectSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class Programming_ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Programming_Experience.objects.all()
    serializer_class = Programming_ExperienceSerializer

class Programming_Experience_ExtraViewSet(viewsets.ModelViewSet):
    queryset = Programming_Experience_Extra.objects.all()
    serializer_class = Programming_Experience_ExtraSerializer
class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class AchievementsViewSet(viewsets.ModelViewSet):
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer

class CertificationsViewSet(viewsets.ModelViewSet):
    queryset = Certifications.objects.all()
    serializer_class = CertificationsSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    @api_view(['POST'])
    def contact_view(request):
        if request.method == 'POST':
            serializer = ContactSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                subject = "Contact Form Submission From " + serializer.data['name'] + " (" + serializer.data['email'] + ")"
                body = f"Name: {serializer.data['name']}\nEmail: {serializer.data['email']}\nMessage: {serializer.data['message']}"
                try:
                    send_mail((subject, body, serializer, ['armummert4@gmail.com']))
                    return Response({'message': 'Form submitted successfully!'}, status=status.HTTP_201_CREATED)
                except Exception as e:
                    return Response({'error': f'Error sending email: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

