# Generated by Django 5.2 on 2025-05-18 19:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_contact_certificate_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='project',
            name='github_url',
        ),
        migrations.RemoveField(
            model_name='project',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='project',
            name='is_archived',
        ),
        migrations.RemoveField(
            model_name='project',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='project',
            name='is_featured',
        ),
        migrations.RemoveField(
            model_name='project',
            name='live_url',
        ),
        migrations.RemoveField(
            model_name='project',
            name='tags',
        ),
        migrations.RemoveField(
            model_name='project',
            name='updated_at',
        ),
    ]
