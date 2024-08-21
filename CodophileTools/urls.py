from django.urls import path

from . import views

urlpatterns = [
    path('', views.toolsHomepage),
    path('basic/', views.basic),
]
