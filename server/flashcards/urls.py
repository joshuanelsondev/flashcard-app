from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DeckViewSet, FlashcardViewSet

router = DefaultRouter()
router.register(r'decks', DeckViewSet)
router.register(r'flashcards', FlashcardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
