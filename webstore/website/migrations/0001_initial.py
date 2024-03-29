# Generated by Django 5.0.3 on 2024-03-07 18:12

import django.db.models.deletion
import mptt.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('description', models.TextField(blank=True, max_length=1000, null=True, verbose_name='Description')),
                ('image', models.ImageField(blank=True, null=True, upload_to='category/', verbose_name='Image')),
                ('lft', models.PositiveIntegerField(editable=False)),
                ('rght', models.PositiveIntegerField(editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(editable=False)),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='website.categorymodel')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('description', models.TextField(blank=True, max_length=1000, null=True, verbose_name='Description')),
                ('price', models.DecimalField(decimal_places=2, default=None, max_digits=10, verbose_name='Price')),
                ('count', models.PositiveIntegerField(default=0, verbose_name='Count')),
                ('date_add', models.DateTimeField(auto_now=True, verbose_name='Date Add')),
                ('id_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='website.categorymodel')),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
            },
        ),
        migrations.CreateModel(
            name='ImagesModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='product/', verbose_name='Image')),
                ('id_product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='website.productmodel')),
            ],
            options={
                'verbose_name': 'Image',
                'verbose_name_plural': 'Images',
            },
        ),
    ]
