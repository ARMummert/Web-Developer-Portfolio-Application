# test_email.py

from django.core.mail import send_mail

subject = "Test Email"
message = "This is a test email."
from_email = 'armummert4@gmail.com'
recipient_list = ['armummert@yahoo.com']

send_mail(subject, message, from_email, recipient_list)
