from django.urls import path
from .class_based_views import *
from .function_based_views import *


urlpatterns = [
    path('companies/', get_company_list),
    path('companies/<int:id>/', get_company_detail),
    path('companies/<int:id>/vacancies/', get_company_vacancies),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', get_top_ten_vacancies),
]