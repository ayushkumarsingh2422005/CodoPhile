# Generated by Django 4.2.5 on 2023-10-23 14:01

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('Contact', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='phone',
            field=models.IntegerField(),
        ),
    ]
