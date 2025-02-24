
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', views.aboutpage, name='aboutpage'),
    path('contact/',views.contact, name='conatct'),
    path('wedding/', views.wedding, name='wedding'),
    path('portfolio/', views.portfolio, name='portfolio'),
]


