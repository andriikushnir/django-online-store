from rest_framework import serializers
from .models import UserProfileModel



class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfileModel
        fields = ('id', 'data_add', 'user')