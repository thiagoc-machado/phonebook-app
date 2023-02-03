from rest_framework import serializers
from contacts.models import contacts
from contacts.models import groups


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = contacts
        fields = '__all__'
        
class GroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = groups
        fields = '__all__'
