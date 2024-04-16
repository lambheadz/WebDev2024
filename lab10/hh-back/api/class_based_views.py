from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Company
from .serializers import *


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):

    def get_object(self, pk=None):
        try:
            vacancy = Vacancy.objects.get(id=pk)
            return vacancy
        except Company.DoesNotExist as error:
            return Response({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancyModelSerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancyModelSerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({'deleted': True})