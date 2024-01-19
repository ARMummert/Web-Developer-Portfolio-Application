from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    image = models.ImageField(upload_to='portfolio/images/')
    # show set to True by default, so that the project is visible on the portfolio page
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Programming_Experience(models.Model):
    name = models.CharField(max_length=100)
    proficiency_level = [('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')]
    proficiency = models.CharField(max_length=12, choices=proficiency_level, default='Beginner')
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
    Programming_Experience = models.ManyToManyField(Programming_Experience)
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

class Achievements(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date_received = models.DateField()
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Certifications(models.Model):
    certificate_name = models.CharField(max_length=100)
    date_received = models.DateField()
    open_source_link = models.URLField(blank=True)
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.certificate_name

