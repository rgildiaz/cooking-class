from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import AvailabilitySerializer, CourseSerializer
from .models import Availability, Course
from django.shortcuts import render

# Create your views here.
def front(request):
    context = { }
    return render(request, "index.html", context)


# course API methods
@api_view(['GET', 'POST'])
def availability(request):
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

@api_view(['GET', 'DELETE'])
def availability_detail(request, pk):
    try:
        avail = Availability.objects.get(pk=pk)
    except Availability.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        avail.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def course(request):
    if request.method == 'GET':
        course = Course.objects.all()
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE'])
def course_detail(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)