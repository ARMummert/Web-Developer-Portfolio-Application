from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, OtherProjectViewSet, ExperienceViewSet, Programming_ExperienceViewSet, Programming_Experience_ExtraViewSet, EducationViewSet, AchievementViewSet, CertificationViewSet, ContactViewSet, VideoViewSet

router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')
router.register('other_project', OtherProjectViewSet, basename='other_project')
router.register('experience', ExperienceViewSet)
router.register('programming_experience', Programming_ExperienceViewSet)
router.register('programming_experience_extra', Programming_Experience_ExtraViewSet)
router.register('education', EducationViewSet)
router.register('achievements', AchievementViewSet)
router.register('certifications', CertificationViewSet)
router.register('contact', ContactViewSet, basename='contact')
router.register('video', VideoViewSet, basename='video')

urlpatterns = [
    path('', include(router.urls)),

]

