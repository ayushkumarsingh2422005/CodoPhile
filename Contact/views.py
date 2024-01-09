from django.shortcuts import render
from .models import Contact

# Create your views here.
def codophile_contact(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        phone = request.POST.get('phone_number')
        email = request.POST.get('email')
        desc = request.POST.get('desc')
        contact = Contact(first_name=first_name, last_name=last_name, phone=phone, email=email, desc=desc)
        contact.save()
        print(contact)
    return render(request, 'contactus.html')