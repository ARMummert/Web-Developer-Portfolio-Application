from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ExperienceViewSet, Programming_ExperienceViewSet, EducationViewSet, AchievementsViewSet, CertificationsViewSet

router = DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('experience', ExperienceViewSet)
router.register('programming_experience', Programming_ExperienceViewSet)
router.register('education', EducationViewSet)
router.register('achievements', AchievementsViewSet)
router.register('certifications', CertificationsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += router.urls