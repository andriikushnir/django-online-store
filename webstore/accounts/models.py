from django.contrib.auth.models import User
from django.db import models
from website.models import ProductModel


class UserProfileModel(models.Model):
    user = models.OneToOneField(
        User,
        on_delete = models.CASCADE
    )
    data_add  = models.DateTimeField(
        auto_now = True,
        verbose_name = 'Date add'
    )
    avatar = models.ImageField(
        upload_to='avatars/',
        null=True,
        blank=True,
        verbose_name='Avatar'
    )

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class CartModel(models.Model):
    id_user = models.ForeignKey(
        UserProfileModel,
        on_delete = models.CASCADE
    )
    
    id_product = models.ForeignKey(
        ProductModel,
        on_delete = models.CASCADE,
        verbose_name = 'Product'
    )

    count = models.PositiveIntegerField(
        default = 0,
        verbose_name = 'Count'
    )

    date_add = models.DateTimeField(
        auto_now = True,
        verbose_name = 'Date add'
    )

    def __str__(self):
        return self.id_user

    class Meta:
        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'