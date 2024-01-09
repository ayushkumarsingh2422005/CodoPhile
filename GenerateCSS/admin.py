from django.contrib import admin
from .models import GenerateCSSHomeLinks
# Register your models here.
#admin.site.register(GenerateCSSHomeLinks)
@admin.register(GenerateCSSHomeLinks)
class GenerateCSSHomeLinksAdmin(admin.ModelAdmin):
    class Media:
        js = ('ModelInjections/injection.js',)