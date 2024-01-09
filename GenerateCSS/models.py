from django.db import models

# Create your models here.
class GenerateCSSHomeLinks(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    desc = models.TextField()
    link = models.CharField(max_length=50)
    img = models.ImageField(upload_to="GenerateCSS/Homepage/Images", default="")

    def __str__(self):
        return self.title