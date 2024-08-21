# Generated by Django 4.2.5 on 2023-12-25 08:33

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_name', models.CharField(max_length=20)),
                ('phone', models.IntegerField()),
                ('bio', models.TextField()),
                ('github_url', models.URLField()),
                ('linkedin_url', models.URLField()),
                ('profile_image', models.ImageField(default='', upload_to='Users/ProfileImages')),
            ],
        ),
    ]
