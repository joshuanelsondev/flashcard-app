// src/components/NewButton.jsx
import { Link } from 'react-router-dom'

export default function NewButton() {
  return (
    <div>
      <Link to={'/decks'}>Decks</Link>
      <button>New</button>
      <div>
        <p>New Deck</p>
        <p>New Flashcard</p>
      </div>
    </div>
  )
}
