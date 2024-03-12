from django.contrib import admin
from django.urls import path
from django.urls import path, include
from .views import UserProfileView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/account', UserProfileView.as_view(), name='my-account'),
]
