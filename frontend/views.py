from django.shortcuts import render

# Create your views here.


# Serve our index.html to visitors
def view_index(request):
    return render(request, 'index.html')
