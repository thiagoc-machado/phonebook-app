# Generated by Django 4.1.6 on 2023-02-03 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(blank=True, max_length=15, null=True)),
                ('mobile', models.CharField(blank=True, max_length=15, null=True)),
                ('email', models.CharField(blank=True, max_length=40, null=True)),
                ('company', models.CharField(blank=True, max_length=30, null=True)),
                ('title', models.CharField(blank=True, max_length=20, null=True)),
                ('groupId', models.CharField(blank=True, max_length=10, null=True)),
                ('addDate', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='groups',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]
