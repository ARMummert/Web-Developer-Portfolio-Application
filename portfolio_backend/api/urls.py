from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, OtherProjectViewSet, ExperienceViewSet, Programming_ExperienceViewSet, EducationViewSet, AchievementsViewSet, CertificationsViewSet, ContactViewSet

router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')
router.register('other_project', OtherProjectViewSet, basename='other_project')
router.register('experience', ExperienceViewSet)
router.register('programming_experience', Programming_ExperienceViewSet)
router.register('education', EducationViewSet)
router.register('achievements', AchievementsViewSet)
router.register('certifications', CertificationsViewSet)
router.register('contact', ContactViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),

]

