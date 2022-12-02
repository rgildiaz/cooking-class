from rest_framework import serializers
from .models import Year
from .models import Month
from .models import Day
from .models import Style
from .models import Course
from .models import Learner
from .models import Availability
from .models import Registration

class YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Year
        fields = ('year_id', 'year')

class MonthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Month
        fields = ('month_id', 'month')

class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ('day_id', 'day')

class StyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Style
        fields = ('style_id', 'style_name')

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('course_id', 'course_name', 'course_intro', 'style')

class LearnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Learner
        fields = ('learner_id', 'first_name', 'last_name', 'disambiguator')

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = ('availability_id', 'year', 'month', 'day')

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ('registration_id', 'learner', 'availibility')