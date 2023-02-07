Phonebook App
=============

This is a full-stack phonebook application that allows you to manage your contacts with login and password protection. The frontend is built using React and the backend is built using Django. The application allows you to add, view, edit, and delete contacts, and all users are displayed as cards. The application has been Dockerized, allowing you to easily run the frontend and backend in containers.

Installation
------------

### Prerequisites

-   Docker installed on your machine.

### Running the Application

1.  Clone the repository:

shellCopy code

`$ git clone https://github.com/thiagoc-machado/phonebook-app.git`

1.  Navigate to the frontend and backend directories and build the images:

shellCopy code

`$ cd phonebook-app/frontend
$ docker build -t thiagocmachado/frontend .
 $ cd phonebook-app/backend
$ docker build -t thiagocmachado/backend .`

1.  Start the containers:

shellCopy code

`$ docker run -p 5173:5173 thiagocmachado/frontend
$ docker run -p 8000:8000 thiagocmachado/backend`

Alternatively, you can use the images from Docker Hub:

shellCopy code

`$ docker pull thiagocmachado/frontend:latest
$ docker pull thiagocmachado/backend:latest`

1.  Access the frontend application at `http://localhost:5173`.
1.  Access the backend application at `http://localhost:8000`.

Dependencies
------------

### Frontend

-   @emotion/react
-   @emotion/styled
-   @fortawesome/fontawesome-free
-   @mui/icons-material
-   @mui/joy
-   @mui/material
-   axios
-   bootstrap
-   react
-   react-dom
-   react-router-dom

### Backend

-   asgiref
-   Django
-   django-cors-headers
-   djangorestframework
-   gunicorn
-   pytz
-   sqlparse
-   tzdata
