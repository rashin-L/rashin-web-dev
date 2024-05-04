
from django.http import HttpResponseRedirect

def change_theme(request, **kwargs):
    # request.session['is_dark_theme'] = True
    if 'is_dark_theme' in request.session:
        print('ooooo')
        request.session["is_dark_theme"] = not request.session.get('is_dark_theme')
    else:
        print('nnnnnn')
        request.session['is_dark_theme'] = True
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))