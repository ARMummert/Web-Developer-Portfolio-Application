from django.test import TestCase
from django.urls import reverse
from .forms import ContactForm
from .models import Project, OtherProject, Experience, Programming_Experience, Programming_Experience_Extra, Education, Achievement, Certification, Video

class ContactFormTest(TestCase):
    def test_valid_form_submission(self):
        form_data = {
            'name': 'Doc Holliday',
            'email': 'docrocks@example.com',
            'message': 'Testing the form submission.',
        }
        form = ContactForm(data=form_data)
        self.assertEqual(form.is_valid())

    def test_invalid_form_submission(self):
        form_data = {
            'name': '',
            'email': 'invalid-email',
            'message': 'Testing the form submission.',
        }
        form = ContactForm(data=form_data)
        self.assertFalse(form.is_valid())

class ProjectModelTest(TestCase):
    def setUp(self):
        Project.objects.create(
            title='Test Project',
            description= 'Testing Project Model',
            github='github.com/test-project',
            demo='test-project.com',
            image='test-image.jpg',
            show=True,
        )

    def test_project_title(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.title}'
        self.assertEqual(expected_object_name, 'Test Project')

    def test_project_description(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.description}'
        self.assertEqual(expected_object_name, 'Testing Project Model')

    def test_project_github(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.github}'
        self.assertEqual(expected_object_name, 'github.com/test-project')

    def test_project_demo(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.demo}'
        self.assertEqual(expected_object_name, 'test-project.com')

    def test_project_image(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.image}'
        self.assertEqual(expected_object_name, 'test-image.jpg')

    def test_project_show(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.show}'
        self.assertEqual(expected_object_name, 'True')

class OtherProjectModelTest(TestCase):
    def setUp(self):
        OtherProject.objects.create(
            title='Test Other Project',
            description='Testing Other Project Model',
            github='github.com/test-other-project',
            demo='test-other-project.com',
            show=True,
        )

    def test_other_project_title(self):
        other_project = OtherProject.objects.get(id=1)
        expected_object_name = f'{other_project.title}'
        self.assertEqual(expected_object_name, 'Test Other Project')

    def test_other_project_description(self):
        other_project = OtherProject.objects.get(id=1)
        expected_object_name = f'{other_project.description}'
        self.assertEqual(expected_object_name, 'Testing Other Project Model')

    def test_other_project_github(self):
        other_project = OtherProject.objects.get(id=1)
        expected_object_name = f'{other_project.github}'
        self.assertEqual(expected_object_name, 'github.com/test-other-project')

    def test_other_project_demo(self):
        other_project = OtherProject.objects.get(id=1)
        expected_object_name = f'{other_project.demo}'
        self.assertEqual(expected_object_name, 'test-other-project.com')

    def test_other_project_show(self):
        other_project = OtherProject.objects.get(id=1)
        expected_object_name = f'{other_project.show}'
        self.assertEqual(expected_object_name, 'True')

class ExperienceModelTest(TestCase):
    def setUp(self):
        Experience.objects.create(
            name='Test Experience',
            company='Test Company',
            location='Test Location',
            start_date='2022-01-01',
            end_date='2022-12-31',
            description='Testing Experience Model.',
            show=True,
        )

    def test_experience_name(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.name}'
        self.assertEqual(expected_object_name, 'Test Experience')

    def test_experience_company(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.company}'
        self.assertEqual(expected_object_name, 'Test Company')

    def test_experience_location(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.location}'
        self.assertEqual(expected_object_name, 'Test Location')

    def test_experience_start_date(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.start_date}'
        self.assertEqual(expected_object_name, '2022-01-01')

    def test_experience_end_date(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.end_date}'
        self.assertEqual(expected_object_name, '2022-12-31')

    def test_experience_description(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.description}'
        self.assertEqual(expected_object_name, 'Testing Experience Model.')

    def test_experience_show(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f'{experience.show}'
        self.assertEqual(expected_object_name, 'True')

class Programming_ExperienceModelTest(TestCase):
    def setUp(self):
        Programming_Experience.objects.create(
            name='Test Programming Experience',
            show=True,
        )

    def test_programming_experience_name(self):
        programming_experience = Programming_Experience.objects.get(id=1)
        expected_object_name = f'{programming_experience.name}'
        self.assertEqual(expected_object_name, 'Test Programming Experience')

    def test_programming_experience_show(self):
        programming_experience = Programming_Experience.objects.get(id=1)
        expected_object_name = f'{programming_experience.show}'
        self.assertEqual(expected_object_name, 'True')

class Programming_Experience_ExtraModelTest(TestCase):
    def setUp(self):
        Programming_Experience_Extra.objects.create(
            name='Test Programming Experience Extra',
            show=True,
        )

    def test_programming_experience_extra_name(self):
        programming_experience_extra = Programming_Experience_Extra.objects.get(id=1)
        expected_object_name = f'{programming_experience_extra.name}'
        self.assertEqual(expected_object_name, 'Test Programming Experience Extra')

    def test_programming_experience_extra_show(self):
        programming_experience_extra = Programming_Experience_Extra.objects.get(id=1)
        expected_object_name = f'{programming_experience_extra.show}'
        self.assertEqual(expected_object_name, 'True')

class EducationModelTest(TestCase):
    def setUp(self):
        Education.objects.create(
            degree='Test Degree',
            institution='Test Institution',
            major='Test Major',
            graduation_date='2022-12-31',
            show=True,
        )

    def test_education_degree(self):
        education = Education.objects.get(id=1)
        expected_object_name = f'{education.degree}'
        self.assertEqual(expected_object_name, 'Test Degree')

    def test_education_institution(self):
        education = Education.objects.get(id=1)
        expected_object_name = f'{education.institution}'
        self.assertEqual(expected_object_name, 'Test Institution')

    def test_education_major(self):
        education = Education.objects.get(id=1)
        expected_object_name = f'{education.major}'
        self.assertEqual(expected_object_name, 'Test Major')

    def test_education_graduation_date(self):
        education = Education.objects.get(id=1)
        expected_object_name = f'{education.graduation_date}'
        self.assertEqual(expected_object_name, '2022-12-31')

    def test_education_show(self):
        education = Education.objects.get(id=1)
        expected_object_name = f'{education.show}'
        self.assertEqual(expected_object_name, 'True')

class AchievementModelTest(TestCase):
    def setUp(self):
        Achievement.objects.create(
            name='Test Achievement',
            description='Testing Achievement Model.',
            date_received='2022-12-31',
            show=True,
        )

    def test_achievements_name(self):
        achievements = Achievement.objects.get(id=1)
        expected_object_name = f'{achievements.name}'
        self.assertEqual(expected_object_name, 'Test Achievement')

    def test_achievements_description(self):
        achievements = Achievement.objects.get(id=1)
        expected_object_name = f'{achievements.description}'
        self.assertEqual(expected_object_name, 'Testing Achievement Model.')

    def test_achievements_date_received(self):
        achievements = Achievement.objects.get(id=1)
        expected_object_name = f'{achievements.date_received}'
        self.assertEqual(expected_object_name, '2022-12-31')

    def test_achievements_show(self):
        achievements = Achievement.objects.get(id=1)
        expected_object_name = f'{achievements.show}'
        self.assertEqual(expected_object_name, 'True')

class CertificationModelTest(TestCase):
    def setUp(self):
        Certification.objects.create(
            certificate_name='Test Certificate',
            date_received='2022-12-31',
            show=True,
        )

    def test_certifications_certificate_name(self):
        certifications = Certification.objects.get(id=1)
        expected_object_name = f'{certifications.certificate_name}'
        self.assertEqual(expected_object_name, 'Test Certificate')

    def test_certifications_date_received(self):
        certifications = Certification.objects.get(id=1)
        expected_object_name = f'{certifications.date_received}'
        self.assertEqual(expected_object_name, '2022-12-31')

    def test_certifications_show(self):
        certifications = Certification.objects.get(id=1)
        expected_object_name = f'{certifications.show}'
        self.assertEqual(expected_object_name, 'True')

class VideoModelTest(TestCase):
    def setUp(self):
        Video.objects.create(
            title='Test Video',
            description='Testing Video Model.',
            video='test-video.mp4',
            show=True,
        )

    def test_video_title(self):
        video = Video.objects.get(id=1)
        expected_object_name = f'{video.title}'
        self.assertEqual(expected_object_name, 'Test Video')

    def test_video_description(self):
        video = Video.objects.get(id=1)
        expected_object_name = f'{video.description}'
        self.assertEqual(expected_object_name, 'Testing Video Model.')

    def test_video_video(self):
        video = Video.objects.get(id=1)
        expected_object_name = f'{video.video}'
        self.assertEqual(expected_object_name, 'test-video.mp4')

    def test_video_show(self):
        video = Video.objects.get(id=1)
        expected_object_name = f'{video.show}'
        self.assertEqual(expected_object_name, 'True')
