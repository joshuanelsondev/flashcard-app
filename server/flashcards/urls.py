from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DeckViewSet, FlashcardViewSet, home

router = DefaultRouter()
router.register(r'decks', DeckViewSet)
router.register(r'flashcards', FlashcardViewSet)

urlpatterns = [
    path('', home, name='home'),
    path('api/', include(router.urls)),
    path('api/flashcards/<uuid:pk>/', FlashcardViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='flashcard-detail'),
]
