from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('reminders/', views.getReminders, name="reminders"),

    path('reminders/<str:pk>/', views.getReminder, name="reminder"),
]
