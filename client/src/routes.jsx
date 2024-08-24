// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import DeckList from './components/decks/DeckList'
import Deck from './components/decks/Deck'
import FlashcardList from './components/flashcards/FlashcardList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/decks',
        element: <DeckList />,
      },
      {
        path: '/decks/:id',
        element: <Deck />,
      },
      {
        path: '/decks/:id/flashcards',
        element: <FlashcardList />,
      },
    ],
  },
])

export default router
