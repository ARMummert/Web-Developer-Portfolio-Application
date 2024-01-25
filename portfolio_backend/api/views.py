from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Project, Experience, Programming_Experience, Education, Achievements, Certifications, Contact
from .serializers import ProjectSerializer, ExperienceSerializer, Programming_ExperienceSerializer, EducationSerializer, AchievementsSerializer, CertificationsSerializer, ContactSerializer
from django.core.mail import send_mail

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

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    @api_view(['POST'])
    def contact_view(request):
        if request.method == 'POST':
            serializer = ContactSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                subject = "Contact Form Submission From " + serializer.data['first_name'] + " " + serializer.data['last_name']
                body = f"First Name: {serializer.data['first_name']}\nLast Name: {serializer.data['last_name']}\nEmail: {serializer.data['email']}\nMessage: {serializer.data['message']}"
                try:
                    send_mail(subject, body, 'armummert4@gmail.com', ['armummert4@gmail.com'])
                    return Response({'message': 'Form submitted successfully!'}, status=status.HTTP_201_CREATED)
                except Exception as e:
                    return Response({'error': f'Error sending email: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
