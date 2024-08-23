from django.http import HttpResponse
from rest_framework import viewsets
from .models import Deck, Flashcard
from .serializers import DeckSerializer, FlashcardSerializer


class DeckViewSet(viewsets.ModelViewSet):
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

class FlashcardViewSet(viewsets.ModelViewSet):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer


def home(request):
    return HttpResponse('Welcome to the Flashcards App')
