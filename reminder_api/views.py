from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Reminder
from .serializers import ReminderSerializer
from reminder_api import serializers
from .utils import updateReminder, getReminderDetail, deleteReminder, getRemindersList, createReminder
# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/reminders/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of reminders'
        },
        {
            'Endpoint': '/reminders/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single reminder object'
        },
        {
            'Endpoint': '/reminders/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new reminder with data sent in post request'
        },
        {
            'Endpoint': '/reminders/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing reminder with data sent in post request'
        },
        {
            'Endpoint': '/reminders/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting reminder'
        },
    ]
    return Response(routes)


# /reminders GET
# /reminders POST
# /reminders/<id> GET
# /reminders/<id> PUT
# /reminders/<id> DELETE

@api_view(['GET', 'POST'])
def getReminders(request):

    if request.method == 'GET':
        return getRemindersList(request)

    if request.method == 'POST':
        return createReminder(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getReminder(request, pk):

    if request.method == 'GET':
        return getReminderDetail(request, pk)

    if request.method == 'PUT':
        return updateReminder(request, pk)

    if request.method == 'DELETE':
        return deleteReminder(request, pk)


# @api_view(['POST'])
# def createReminder(request):
#     data = request.data
#     reminder = Reminder.objects.create(
#         body=data['body']
#     )
#     serializer = ReminderSerializer(reminder, many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateReminder(request, pk):
#     data = request.data
#     reminder = Reminder.objects.get(id=pk)
#     serializer = ReminderSerializer(instance=reminder, data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)


# @api_view(['DELETE'])
# def deleteReminder(request, pk):
#     reminder = Reminder.objects.get(id=pk)
#     reminder.delete()
#     return Response('Reminder was deleted!')
