from django.db import models

# Create your models here.
class UserDetail(models.Model):
    id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=20)
    phone = models.IntegerField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    profile_image = models.ImageField(upload_to="Users/ProfileImages", default="Users/default/profile.png")

    def __str__(self):
        return self.user_name