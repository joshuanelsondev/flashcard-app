// src/components/decks/DeckList.jsx

import React, { useState, useEffect } from 'react'
import { getDecks } from '../../api'

export default function DeckList() {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const data = await getDecks()
        setDecks(data)
      } catch (error) {
        console.error('Error fetching decks:', error)
      }
    }

    fetchDecks()
  }, [])

  const handleDelete = async (deckId) => {
    try {
      await deleteDeck(deckId)
      setDecks(decks.filter((deck) => deck.id !== deckId))
    } catch (error) {
      console.error('Error deleting deck:', error)
    }
  }

  return (
    <div>
      <h1>Deck List</h1>
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>{deck.name}</li>
        ))}
      </ul>
    </div>
  )
}
