# Generated by Django 4.1.5 on 2024-02-12 19:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_project_show'),
    ]

    operations = [
        migrations.RenameField(
            model_name='experience',
            old_name='start_date',
            new_name='date',
        ),
    ]
