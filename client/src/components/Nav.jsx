// src/components/Nav.jsx
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <h2>{/*currentDeck*/}</h2>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/decks'}>Decks</Link>
        <button>New</button>
      </div>
      <div>
        <p>New Deck</p>
        <p>New Flashcard</p>
      </div>
    </div>
  )
}
