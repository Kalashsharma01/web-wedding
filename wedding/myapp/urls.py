
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('about/', views.aboutpage, name='aboutpage'),
    path('contact/',views.contact, name='conatct'),
    path('wedding_cinema/', views.wedding, name='wedding_cinema'),
    path('portfolio/', views.portfolio, name='portfolio'),
]


