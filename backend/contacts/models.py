from django.contrib.auth.models import User
from django.db import models


class contacts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, null=True, blank=True)
    mobile = models.CharField(max_length=15, null=True, blank=True)
    email = models.CharField(max_length=40, null=True, blank=True)
    company = models.CharField(max_length=30, null=True, blank=True)
    title = models.CharField(max_length=20, null=True, blank=True)
    groupId = models.CharField(max_length=10, null=True, blank=True)
    addDate = models.DateField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.name


class groups(models.Model):
    name = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.name
