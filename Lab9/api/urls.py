from django.urls import path
from .views import CompanyList, CompanyDetail, CompanyVacancyList, VacancyList, VacancyDetail, TopTenVacanciesList

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacancyList.as_view(), name='company-vacancy-list'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesList.as_view(), name='top-ten-vacancies-list'),
]