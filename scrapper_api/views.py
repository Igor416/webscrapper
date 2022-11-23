from django.shortcuts import HttpResponse

def home(request):
    print('here')
    request.session['url'] = request.POST['url']
    print(request.session['url'])
    return HttpResponse({'text': 'lol'})

