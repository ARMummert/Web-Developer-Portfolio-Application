from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    image = models.ImageField(upload_to='media/', null=True, blank=True)
    proj_lang = models.CharField(max_length=100, null=True, blank=True)
    # show set to True by default, so that the project is visible on the portfolio page
    show = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class OtherProject(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    proj_lang = models.CharField(max_length=100, null=True, blank=True)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    # show set to True by default, so that the project is visible on the portfolio page
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.title
class Programming_Experience(models.Model):
    name = models.CharField(max_length=100)
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.name
class Programming_Experience_Extra(models.Model):
    name = models.CharField(max_length=100)
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.name
class Experience(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null = True, blank=True)
    description = models.TextField()
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.name
class Education(models.Model):
    degree = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    major = models.CharField(max_length=100)
    graduation_date = models.DateField()
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.degree

class Achievement(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date_received = models.DateField()
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Certification(models.Model):
    certificate_name = models.CharField(max_length=100)
    date_received = models.DateField()
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.certificate_name

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

class Video(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    video = models.FileField(upload_to='media/', null=True, blank=True)
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.title