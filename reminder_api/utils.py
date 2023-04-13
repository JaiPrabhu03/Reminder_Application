from rest_framework.response import Response
from .models import Reminder
from .serializers import ReminderSerializer


def getRemindersList(request):
    reminders = Reminder.objects.all().order_by('-updated')
    serializer = ReminderSerializer(reminders, many=True)
    return Response(serializer.data)


def getReminderDetail(request, pk):
    reminders = Reminder.objects.get(id=pk)
    serializer = ReminderSerializer(reminders, many=False)
    return Response(serializer.data)


def createReminder(request):
    data = request.data
    reminder = Reminder.objects.create(
        body=data['body']
    )
    serializer = ReminderSerializer(note, many=False)
    return Response(serializer.data)

def updateReminder(request, pk):
    data = request.data
    note = Reminder.objects.get(id=pk)
    serializer = ReminderSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteReminder(request, pk):
    note = Reminder.objects.get(id=pk)
    note.delete()
    return Response('Reminder was deleted!')
