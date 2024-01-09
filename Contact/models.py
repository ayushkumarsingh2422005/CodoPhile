from django.db import models

# Create your models here.
class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone = models.IntegerField()
    email = models.EmailField(max_length=40)
    desc = models.TextField()

    def __str__(self):
        return self.first_name + " " +self.last_name + ' / '+ str(self.id)