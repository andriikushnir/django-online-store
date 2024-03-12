from django.contrib import admin
from django.http import HttpRequest
from .models import UserProfileModel, CartModel



class CartInlines(admin.TabularInline):
    model = CartModel
    extra = 0
    readonly_fields = ['id_product', 'count']

class UserProfileAdmin(admin.ModelAdmin):
    inlines = [CartInlines]


admin.site.register(UserProfileModel, UserProfileAdmin)
admin.site.register(CartModel)