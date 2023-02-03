from django.contrib import admin
from django.urls import path, include 

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('users/', include('users.urls')),
    path('contacts/', include('contacts.urls')),
    path('groups/', include('contacts.urls')),
    path('admin/', admin.site.urls),
    path('auth/', obtain_auth_token),
]
