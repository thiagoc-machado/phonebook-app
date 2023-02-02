from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.serializers import UserSerializer



@api_view(['GET'])
def user_View(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)
