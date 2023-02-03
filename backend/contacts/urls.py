from django.urls import path
from contacts import views

urlpatterns = [
    path('contacts/', views.contact_View, name='contacts'),
    path('contacts/<int:contacts_id>/', views.contact_View, name='contact'),
    path('groups/', views.group_View, name='group'),
    path('groups/<int:groups_id>/', views.group_View, name='group'),
]