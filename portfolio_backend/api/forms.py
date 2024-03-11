from django import forms
from .models import Contact

# forms.py
class ContactForm(forms.Form):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']

    def clean_email(self):
        email = self.cleaned_data['email']
        if not email.endswith('@example.com'):
            raise forms.ValidationError("Please enter a valid email address ending with @example.com.")
        if len(email) == 0:
            raise forms.ValidationError("Email cannot be empty.")
        return email

    def clean_name(self):
        name = self.cleaned_data['name']
        if len(name) < 2:
            raise forms.ValidationError("Name must be at least 2 characters long.")
        if len(name) == 0:
            raise forms.ValidationError("Name cannot be empty.")
        return name

    def clean_message(self):
        message = self.cleaned_data['message']
        if len(message) < 5:
            raise forms.ValidationError("Message must be at least 10 characters long.")
        if len(message) == 0:
            raise forms.ValidationError("Message cannot be empty.")
        return message

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get('name')
        email = cleaned_data.get('email')
        message = cleaned_data.get('message')

        if not (name or email or message):
            raise forms.ValidationError("Please fill in at least one field.")

        return cleaned_data

def __str__(self):
    return self.name