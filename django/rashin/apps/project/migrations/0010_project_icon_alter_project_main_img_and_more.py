# Generated by Django 5.0.1 on 2024-01-13 18:41

import files
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("project", "0009_alter_project_main_img_alter_project_main_video_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="icon",
            field=models.ImageField(
                blank=True, null=True, upload_to=files.FileUpload.upload_to
            ),
        ),
        migrations.AlterField(
            model_name="project",
            name="main_img",
            field=models.ImageField(
                blank=True, null=True, upload_to=files.FileUpload.upload_to
            ),
        ),
        migrations.AlterField(
            model_name="project",
            name="main_video",
            field=models.ImageField(
                blank=True, null=True, upload_to=files.FileUpload.upload_to
            ),
        ),
        migrations.AlterField(
            model_name="project_gallery",
            name="project_img",
            field=models.ImageField(
                blank=True, null=True, upload_to=files.FileUpload.upload_to
            ),
        ),
    ]
