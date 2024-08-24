// src/components/Nav.jsx
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/decks'}>Decks</Link>
      <button>New</button>
      <div>
        <p>New Deck</p>
        <p>New Flashcard</p>
      </div>
    </div>
  )
}
