from django.contrib import admin
from .models import Project, Experience, Programming_Experience, Education, Achievements, Certifications

admin.site.site_header = "Portfolio Admin"
admin.site.site_title = "Portfolio Admin Portal"
admin.site.index_title = "Welcome to Portfolio Admin Portal"
admin.site.register(Project)
admin.site.register(Programming_Experience)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(Achievements)
admin.site.register(Certifications)
