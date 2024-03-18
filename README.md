# WEB DEVELOPER PORTFOLIO APPLICATION 

Created with Django Backend for the APIs & React Frontend for the user interface.

This project is a web developers portfolio application that showcases your work 
to prospective employers or clients.  

# FEATURES

Home Page: A responsive animated home page that contains the developers name and a 
description of what they do as well as a check out my work button.

About Page: An about page that contains information about the developer with a check out my work button.

Experience Page - Frontend: An experience page that contains details about the developers jobs, 
programming experience, certifications, achievements, and education (a small resume).

Experience Page - Backend: Contains models for the experience page with a show or hide option.
    -Models:
        Programming Experience Model
        Experience Model 
        Education Model
        Achievements Model
        Certifications Model

Project Page - Frontend: A project page to showcase a developers projects with an option to show 
Featured Projects at the top of the project page.

Project Page - Backend: The project page backend includes a project model and an other project model.
    -Models:
        Project Model (Featured Project Model)
        Other Project Model

Contact Page - Front End: A simple contact form for users to contact the developer.

Contact Page - Backend: The background contains the contact page model and form submission.
    -Models:
        Contact
    -Forms:
        ContactForm

# REQUIREMENTS
- python 3+
- Django 
- Django Rest Framework
- Django Database - db.sqlite3
- React 
- React-Router-Dom
- CORS Headers

# TOOLS & TECHNOLIGIES
1. IDEs / Editors / Debuggers 
    - Visual Studio Code for Django backend for building backend services and utilizing the database
    - Visual Studio Code for React frontend for building frontend and the user interface
    - Visual Studio Code for Debugging
2. Languages
    - HTML for Django and React to build the UI
    - CSS for the design of the portfolio
    - Javascript to build the UI in React
    - Python for Django backend services
3. Package Managers
    - npm for React dependencies
    - pip for Python dependencies
4. Version Control
    - Git
    - Github for project repository
5. Test Framework
    - PyTest - TestCase for Django backend testing
    - React Testing Library for React testing
6. Software Libraries
    - Django REST framework for building APIs
    - React for frontend views and components
    - Django for backend framework
    - Fetch API for making HTTP requests from React
    - React-router-dom for frontend components
7. Database
    - Django built-in database for organizing and managing project data
8. UI Interface
    - Figma for UI design of each web page
9. Hosting Service
    - Dreamhost for hosting my portfolio application (https://www.mummertar.xyz) 
    - Heroku for backend and frontend deployment


# INSTALLATION
## Clone or download this project repository - make sure to install python 3+, django, and react.

Django Backend
1. cd ./portfolio_backend
2. Create your virtual environment - `python -m venv env`
3. Activate your virtual environment in bash - `env\Scripts\activate` (Windows) `source env/bin/activate` (MacOS)
4. `pip install django`
5. `pip install django-rest-framework`
6. `pip install -r requirements.txt` or `pip freeze > requirements.txt`
7. `pip install django-cors-headers`
8. `pip manage.py makemigrations`
9. `python manage.py migrate`
10. `python manage.py createsuperuser` - Django Admin: http://127.0.0.1:8000/admin 
11. `python -m pip install -r portfolio_backend/requirements.txt` - to set up your own virtual environment
12. `python manage.py runserver` 

React Frontend
1. cd ./portfolio_frontend
2. `npm install react`
3. `npm install react-route-dom`
4. `npm install axios`
5. `npm start` - React Front End: https://localhost:3000

# CITATIONS

- https://v5.reactrouter.com/web/guides/quick-start
- https://www.stackhawk.com/blog/django-cors-guide/
- https://ordinarycoders.com/blog/article/build-a-django-contact-form-with-email-backend
- https://www.django-rest-framework.org/tutorial/2-requests-and-responses/
- https://react-hook-form.com/docs/useform/handlesubmit
- https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
- https://medium.com/@gazzaazhari/django-backend-react-frontend-basic-tutorial-6249af7964e4
- https://react.dev/learn
- https://docs.djangoproject.com/en/5.0/
- https://github.com/django/django

## CSS / Icons / Animations / Buttons
- https://www.iconfinder.com/icons/326717/more_unfold_icon  - Author: Google / Icon Finder
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations
- https://getcssscan.com/css-buttons-examples

## UI/UX
- UI/UX designed with Figma



