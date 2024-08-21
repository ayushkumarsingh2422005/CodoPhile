from django import template

register = template.Library()


@register.filter(name='modulous')
def modulous(a, b):
    colors = [
        '#eee0ca', '#c9ffc7', '#d2fafd', '#ffcea5', '#f4b8da', '#eea990', '#f6e0b5', '#e5ffe1', '#d8eeff', '#ffb3b3'
    ]
    return colors[int(a) % int(b)]
