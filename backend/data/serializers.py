from rest_framework import serializers
from .models import SolarSystemData

class SolarSystemDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolarSystemData
        fields = '__all__'


