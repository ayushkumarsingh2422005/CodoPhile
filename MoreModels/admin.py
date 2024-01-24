from django.contrib import admin
from .models import UserDetail, HomeMainPage

# Register your models here.
admin.site.register(UserDetail)
# admin.site.register(HomeMainPage)

@admin.register(HomeMainPage)
class HomeMainPageAdmin(admin.ModelAdmin):
    class Media:
        js = ('ModelInjections/injection.js',)