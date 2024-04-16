from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import *


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_company_detail(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as error:
        return Response({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        company.delete()
        return Response({"deleted": True})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_company_vacancies(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as error:
        return Response({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST)

    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancyModelSerializer(vacancies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)
