from django import forms
# from captcha.fields import ReCaptchaField
# from captcha.widgets import ReCaptchaV2Invisible
from django.contrib.auth.models import User


class ContactForm(forms.Form) : 
    first_name = forms.CharField()   
    last_name = forms.CharField()       
    email = forms.EmailField(required=True)
    subject = forms.CharField(required=True)   
    message = forms.CharField(widget=forms.Textarea())
    
    # captcha = ReCaptchaField(widget=ReCaptchaV2Invisible)
    
    class Meta:
        model = User
        fields = ['first_name','last_name','email']