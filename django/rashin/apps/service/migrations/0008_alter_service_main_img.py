# Generated by Django 5.0.1 on 2024-01-11 21:44

import files
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service", "0007_alter_service_main_img"),
    ]

    operations = [
        migrations.AlterField(
            model_name="service",
            name="main_img",
            field=models.ImageField(
                blank=True, null=True, upload_to=files.FileUpload.upload_to
            ),
        ),
    ]
