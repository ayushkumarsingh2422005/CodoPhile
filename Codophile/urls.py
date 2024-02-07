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
from django.contrib.auth import views as auth_views

handler404 = 'Codophile.views.custom_404'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.codophile_homepage, name='codophile_homepage'),
    path('about/', views.codophile_about, name='codophile_about'),
    path('contact/', include('Contact.urls'), name='codophile_contact'),
    path('generatecss/', include('GenerateCSS.urls'), name='codophile_gen_css'),
    path('tools/', include('CodophileTools.urls'), name='codophile_tools'),
    # auth related views
    path('signup/', views.handle_signup),
    path('login/', views.handle_signin),
    path('logout/', views.handle_logout),
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name = "reset_password.html"), name='reset_password'),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name = "password_reset_done.html"), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name = 'password_reset_confirm.html'), name='password_reset_confirm'),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name = "password_reset_complete.html"), name='password_reset_complete'),
    # user profile and user view
    path('user/<slug:slug>', views.profile),
    path('user/', views.direcrprofie),
    path('new/', views.random_gun),
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)