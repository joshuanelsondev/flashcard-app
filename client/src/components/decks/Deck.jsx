// src/components/decks/Deck.jsx

import { useState } from 'react'
import { createDeck } from '../../api'

export default function Deck() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newDeck = { name, description }
      await createDeck(newDeck)
    } catch (error) {
      console.error('Error creating deck:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Create Deck</button>
    </form>
  )
}
