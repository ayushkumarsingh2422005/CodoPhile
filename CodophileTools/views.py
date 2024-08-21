from django.shortcuts import render


# Create your views here.

def toolsHomepage(request):
    return render(request, 'CodophileTools/tools.html')


def basic(request):
    return render(request, 'CodophileTools/CodophileToolsChilds/clipPathGenerator.html')
