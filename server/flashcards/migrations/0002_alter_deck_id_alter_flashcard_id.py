# Generated by Django 5.1 on 2024-08-23 14:42

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flashcards', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deck',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='flashcard',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
