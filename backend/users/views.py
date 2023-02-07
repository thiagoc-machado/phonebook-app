from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.serializers import UserSerializer
from rest_framework import status
from django.contrib.auth.hashers import make_password

@api_view(['GET', 'POST'])
def user_View(request):
    if request.method == 'POST':
        serializer = UserSerializer(data= request.data)
        if serializer.is_valid():
            password = request.data['password']
            serializer.validated_data['password'] = make_password(password)
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
