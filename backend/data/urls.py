
from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import SolarSystemDataViewSet
from .views import chart_data_view, HourlyDataViewSet, average_data, inverter_ranking


router = DefaultRouter()

router.register('solardb/latest',SolarSystemDataViewSet,basename='solardb_latest')
router.register('solardb/hourly',HourlyDataViewSet, basename='hourlydata')
urlpatterns = router.urls + [
    path('solardb/chart-data/', chart_data_view, name='chart-data'),
    path('solardb/avr-data/', average_data, name='avr-data' ),
    path('solardb/avt-ranking/', inverter_ranking, name='avt-ranking')
]