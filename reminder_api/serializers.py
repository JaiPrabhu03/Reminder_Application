from rest_framework.serializers import ModelSerializer
from .models import Reminder


class ReminderSerializer(ModelSerializer):
    class Meta:
        model = Reminder
        fields = '__all__'
