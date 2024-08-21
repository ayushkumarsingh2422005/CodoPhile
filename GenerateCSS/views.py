from django.http import JsonResponse
from django.shortcuts import render

from .models import GenerateCSSHomeLinks


# Create your views here.

def GenerateCSSHomepage(request):
    # if len(request.body) > 0:
    prems = {
        'allLinks': GenerateCSSHomeLinks.objects.order_by("title").all(),
    }
    if "search" in request.GET:
        # print()
        data = GenerateCSSHomeLinks.objects.filter(desc__contains=request.GET["search"]).order_by("title").all()
        prems = {
            'allLinks': "none" if len(data) == 0 else data,
            'search': request.GET["search"]
        }
        # print(len(data))
        return render(request, 'GenerateCSS/GenerateCSSHomepage.html', prems)

    return render(request, 'GenerateCSS/GenerateCSSHomepage.html', prems)


def history(request):
    return render(request, 'GenerateCSS/GenerateCSSPropertiesHistory.html')


def history_get(request):
    return JsonResponse([1, 2, 3, 4, 5, 6], safe=False)


def background(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/background.html')


def textShadow(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/textShadow.html')


def boxShadow(request):
    return render(request, './GenerateCSS/GenerateCSSProperties/boxShadow.html')


def border(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/border.html')


def outline(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/outline.html')


def multiColumn(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/multiColumn.html')


def twoDTransforms(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/twoDtransforms.html')


def threeDTransforms(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/threeDtransforms.html')


def listStyle(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/listStyle.html')


def flexContainer(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/flexContainer.html')


def flexItems(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/flexItems.html')


def backgroundBlendMode(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/backgroundBlendMode.html')


def backdropFilter(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/backdropFilter.html')


def filter(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/filter.html')


def textDecoration(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/textDecoration.html')


def lineHeightAndLetterSpacing(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/lineHeightAndLetterSpacing.html')


def backgrounClip(request):
    return render(request, 'GenerateCSS/GenerateCSSProperties/backgroundClip.html')
