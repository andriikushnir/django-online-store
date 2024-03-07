from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from decimal import Decimal


class CategoryModel(MPTTModel):
    title = models.CharField(
        max_length = 100,
        verbose_name = 'Title'
    )

    description = models.TextField(
        max_length = 1000,
        blank=True,
        null=True,
        verbose_name = 'Description'
    )

    image = models.ImageField(
        upload_to = 'category/',
        null= True,
        blank= True,
        verbose_name = 'Image'
    )

    parent = TreeForeignKey(
        'self',
        on_delete = models.CASCADE,
        null = True,
        blank = True,
        related_name = 'children'
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    #class MPTTMeta:
    #    order_insertion_by = ['title']


class ProductModel(models.Model):
    id_category = models.ForeignKey(
        CategoryModel,
        on_delete=models.CASCADE,
    )

    title = models.CharField(
        max_length = 100,
        verbose_name = 'Title'
    )

    description = models.TextField(
        max_length = 1000,
        blank=True,
        null=True,
        verbose_name = 'Description'
    )

    price = models.DecimalField(
        max_digits = 10,
        decimal_places = 2,
        default = None,
        verbose_name='Price'
    )

    count = models.PositiveIntegerField(
        default=0,
        verbose_name='Count'
    )

    date_add = models.DateTimeField(
        auto_now = True,
        verbose_name = 'Date Add'
    )

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'


class ImagesModel(models.Model):
    id_product = models.ForeignKey(
        ProductModel,
        on_delete=models.CASCADE,
    )

    image = models.ImageField(
        upload_to = 'product/',
        verbose_name= 'Image'
    )

    def __str__(self):
        return self.id_product

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Images'


class ReviewModel(models.Model):
    from accounts.models import UserProfileModel

    id_product = models.ForeignKey(
        ProductModel,
        on_delete = models.CASCADE,
        verbose_name = 'Product'
    )
    id_user = models.ForeignKey(
        UserProfileModel,
        on_delete = models.CASCADE,
        verbose_name = 'User'
    )
    date_add = models.DateTimeField(
        auto_now = True,
        verbose_name = 'Date add'
    )
    stars = models.PositiveIntegerField(
        verbose_name = 'Stars'
    )
    text = models.TextField(
        max_length = 500,
        blank=True,
        null=True,
        verbose_name = 'Text'
    )

    def __str__(self):
        return str(self.date_add)

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'