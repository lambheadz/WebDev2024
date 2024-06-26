from django.contrib import admin
from . import models


@admin.register(models.Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    search_fields = ('name', 'city')


@admin.register(models.Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary', 'company')
    search_fields = ('name', 'company')