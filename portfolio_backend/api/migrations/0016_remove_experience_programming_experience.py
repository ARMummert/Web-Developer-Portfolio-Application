# Generated by Django 4.1.5 on 2024-02-12 20:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_rename_date_experience_start_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='Programming_Experience',
        ),
    ]
