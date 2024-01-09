from django.urls import path
from . import views

urlpatterns = [
    path('', views.codophile_contact, name='codophile_homepage'),
]