from django.contrib import admin
from .models import CategoryModel, ProductModel, ImagesModel
from mptt.admin import MPTTModelAdmin
import nested_admin



class ImagesInline(nested_admin.NestedStackedInline):
    model = ImagesModel
    sortable_field_name = "image"
    
    extra = 0

class ProductInline(nested_admin.NestedStackedInline):
    model = ProductModel
    extra = 0

    classes = ['collapse']
    inlines = [ImagesInline]



class CategoryAdmin(nested_admin.NestedModelAdmin):
    list_display = ['title', 'parent']
    
    inlines = [ProductInline]


admin.site.register(CategoryModel, CategoryAdmin)