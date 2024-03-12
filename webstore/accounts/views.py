from django.shortcuts import render
from rest_framework.views import APIView
from .models import UserProfileModel
from .serializers import UserProfileSerializer
from rest_framework.response import Response


class UserProfileView(APIView):
    def get(self, request):
        profile = UserProfileModel.objects.all()
        serializer = UserProfileSerializer(profile, many=True)

        return Response(serializer.data)