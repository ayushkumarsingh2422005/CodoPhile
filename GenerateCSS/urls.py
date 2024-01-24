from django.urls import path
from . import views

urlpatterns = [
    path('', views.GenerateCSSHomepage, name='GenerateCSSHomepage'),
    path('history/', views.history),
    path('history/get', views.history_get),
    path('background/', views.background),
    path('text-shadow/', views.textShadow),
    path('box-shadow/', views.boxShadow),
    path('border/', views.border),
    path('outline/', views.outline),
    path('multi-column/', views.multiColumn),
    path('two-d-transform/', views.twoDTransforms),
    path('three-d-transform/', views.threeDTransforms),
    path('list-style/', views.listStyle),
    path('flex-container/', views.flexContainer),
    path('flex-items/', views.flexItems),
    path('background-blend-mode/', views.backgroundBlendMode),
    path('backdrop-filter/', views.backdropFilter),
    path('filter/', views.filter),
    path('text-decoration/', views.textDecoration),
    path('lineheight-letterspacing/', views.lineHeightAndLetterSpacing),
    path('background-clip/', views.backgrounClip),
<<<<<<< HEAD
]
=======
]
>>>>>>> work
