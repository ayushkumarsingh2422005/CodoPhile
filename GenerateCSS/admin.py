from django.contrib import admin

from .models import GenerateCSSHomeLinks


@admin.register(GenerateCSSHomeLinks)
class GenerateCSSHomeLinksAdmin(admin.ModelAdmin):
    class Media:
        js = ('ModelInjections/injection.js',)
