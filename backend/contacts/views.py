from rest_framework.response import Response
from rest_framework.decorators import api_view
from contacts.serializers import ContactsSerializer, GroupsSerializer
from contacts.models import contacts, groups

@api_view(['GET', 'POST', 'PUT', 'DELETE']) 
def contact_View(request, contacts_id=None):
    if contacts_id:
        contact = contacts.objects.get(id=contacts_id)
        if request.method == 'GET':
            serializer = ContactsSerializer(contact)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = ContactsSerializer(contact, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        elif request.method == 'DELETE':
            contact.delete()
            return Response(status=204)
    else:
        if request.method == 'GET':
            contacts_list = contacts.objects.all()
            serializer = ContactsSerializer(contacts_list, many=True)
            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = ContactsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)
        
        
        
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def group_View(request, group_id=None):
    if request.method == 'GET':
        if group_id:
            group = groups.objects.get(id=group_id)
            serializer = GroupsSerializer(group)
            return Response(serializer.data)
        else:
            groups_list = groups.objects.all()
            serializer = GroupsSerializer(groups_list, many=True)
            return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GroupsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PUT':
        group = groups.objects.get(id=group_id)
        serializer = GroupsSerializer(group, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        group = groups.objects.get(id=group_id)
        group.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

