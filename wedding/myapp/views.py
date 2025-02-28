from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def aboutpage(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def wedding(request):
    return render(request, 'wedding.html')

def portfolio(request):
    return render(request, 'portfolio.html')
