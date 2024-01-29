"""
URL configuration for Codophile project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

handler404 = 'Codophile.views.custom_404'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.codophile_homepage, name='codophile_homepage'),
    path('about/', views.codophile_about, name='codophile_about'),
    path('contact/', include('Contact.urls'), name='codophile_contact'),
    path('generatecss/', include('GenerateCSS.urls'), name='codophile_gen_css'),
    path('tools/', include('CodophileTools.urls'), name='codophile_tools'),
    path('signup/', views.handle_signup),
    path('login/', views.handle_signin),
    path('logout/', views.handle_logout),
    path('user/<slug:slug>', views.profile),
    path('user/', views.direcrprofie),
    path('new/', views.random_gun),
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)