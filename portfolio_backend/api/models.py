from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    image = models.ImageField(upload_to='portfolio/images/')
    # image = models.ImageField(upload_to='portfolio/images/', default='portfolio/images/placeholder.png')
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.title
