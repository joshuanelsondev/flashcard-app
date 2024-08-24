// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Decks from './components/decks/Decks'
import Flashcards from './components/flashcards/Flashcards'

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
        element: <Decks />,
      },
      {
        path: '/flashcards',
        element: <Flashcards />,
      },
    ],
  },
])

export default router
