// src/components/decks/EditDeck.jsx

import React, { useState, useEffect } from 'react'
import { getDeckById, updateDeck } from '../../api'

const EditDeck = ({ deckId }) => {
  const [deck, setDeck] = useState({ name: '', description: '' })

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const data = await getDeckById(deckId)
        setDeck(data)
      } catch (error) {
        console.error('Error fetching deck:', error)
      }
    }

    fetchDeck()
  }, [deckId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateDeck(deckId, deck)
    } catch (error) {
      console.error('Error updating deck:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={deck.name}
          onChange={(e) => setDeck({ ...deck, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={deck.description}
          onChange={(e) => setDeck({ ...deck, description: e.target.value })}
        />
      </div>
      <button type="submit">Update Deck</button>
    </form>
  )
}

export default EditDeck
