from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request):
    return render(request, 'index.html')
    # return HttpResponse("Hello")

def aboutpage(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')


def wedding(request):
    return render(request, 'wedding_cinema.html')



def portfolio(request):
    return render(request, 'portfolio.html')