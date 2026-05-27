from django.test import TestCase
from .models import Task

class TaskModelTest(TestCase):

    def setUp(self):
        Task.objects.create(title="Test Task", is_completed=False)

    def test_task_creation(self):
        task = Task.objects.get(title="Test Task")
        self.assertEqual(task.title, "Test Task")
        self.assertFalse(task.is_completed)

    def test_task_string_representation(self):
        task = Task.objects.get(title="Test Task")
        self.assertEqual(str(task), "Test Task")