# Generated by Django 5.0.1 on 2024-05-04 01:08

import files
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("skill", "0014_alter_skill_icon"),
    ]

    operations = [
        migrations.AlterField(
            model_name="skill",
            name="icon",
            field=models.FileField(
                blank=True, null=True, upload_to=files.FileUpload.upload_to
            ),
        ),
    ]
