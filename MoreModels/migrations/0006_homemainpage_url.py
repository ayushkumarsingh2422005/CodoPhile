# Generated by Django 5.0.1 on 2024-01-19 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MoreModels', '0005_homemainpage'),
    ]

    operations = [
        migrations.AddField(
            model_name='homemainpage',
            name='url',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
