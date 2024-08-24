from django.http import HttpResponse
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Deck, Flashcard
from .serializers import DeckSerializer, FlashcardSerializer


class DeckViewSet(viewsets.ModelViewSet):
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

class FlashcardViewSet(viewsets.ModelViewSet):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer

    @action(detail=False, methods=['get'], url_path='deck/(?P<deck_uuid>[^/.]+)')
    def by_deck(self, request, deck_uuid=None):
        flashcards = Flashcard.objects.filter(deck_id=deck_uuid)
        serializer = self.get_serializer(flashcards, many=True)
        return Response(serializer.data)


def home(request):
    return HttpResponse('Welcome to the Flashcards App')
