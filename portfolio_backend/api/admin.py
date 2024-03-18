from django.contrib import admin
from .models import Project, Experience, Programming_Experience, Education, Achievement, Certification, Contact, OtherProject, Video, Programming_Experience_Extra

admin.site.site_header = "Portfolio Admin"
admin.site.site_title = "Portfolio Admin Portal"
admin.site.index_title = "Welcome to Portfolio Admin Portal"
admin.site.register(Project)
admin.site.register(Programming_Experience)
admin.site.register(Programming_Experience_Extra)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(Achievement)
admin.site.register(Certification)
admin.site.register(Contact)
admin.site.register(OtherProject)
admin.site.register(Video)
