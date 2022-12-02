from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import AvailabilitySerializer, YearSerializer
from .models import Year
from .models import Availability
from django.shortcuts import render

# Create your views here.
def front(request):
    context = { }
    return render(request, "index.html", context)


# course API methods
@api_view(['GET', 'POST'])
def year(request):

    if request.method == 'GET':
        year = Year.objects.all()
        serializer = YearSerializer(year, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = YearSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def year_detail(request, pk):
    try:
        year = Year.objects.get(pk=pk)
    except Year.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        year.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def availibility(request):

    if request.method == 'GET':
        availability = Availability.objects.all()
        serializer = AvailabilitySerializer(availability, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AvailabilitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)