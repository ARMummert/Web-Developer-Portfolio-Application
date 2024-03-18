from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .forms import ContactForm
from .models import Project, OtherProject, Experience, Programming_Experience, Education, Achievement, Certification, Contact, Video, Programming_Experience_Extra
from .serializers import ProjectSerializer, OtherProjectSerializer, ExperienceSerializer, Programming_ExperienceSerializer, Programming_Experience_ExtraSerializer, EducationSerializer, AchievementSerializer, CertificationSerializer, ContactSerializer, VideoSerializer
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

class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    @api_view(['POST'])
    def contact_view(request):
        if request.method == 'POST':
            form = ContactForm(data=request.data)
            if form.is_valid():
                cleaned_data = form.cleaned_data
                name = cleaned_data['name']
                email = cleaned_data['email']
                message = cleaned_data['message']
                sender_email = cleaned_data['email']

            try:
                send_mail(
                    f'Contact Form Submission From {name} ({email})',
                    f'Name: {name}\nEmail: {email}\nMessage: {message}',
                    sender_email,
                    ['armummert4@gmail.com'],
                    fail_silently=False,
                )
                form.save()
                return Response({'message': 'Form submitted successfully!'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error': f'Error sending email: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

