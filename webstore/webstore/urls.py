from django.contrib import admin
from django.urls import path
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', include('accounts.urls')),
    path('_nested_admin/', include('nested_admin.urls')),
]
