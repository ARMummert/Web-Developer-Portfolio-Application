# Generated by Django 4.1.5 on 2024-02-06 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_experience_show'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='show',
            field=models.BooleanField(default=True),
        ),
    ]
