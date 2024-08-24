// src/components/NewButton.jsx
import { Link } from 'react-router-dom'

export default function NewButton () {

  return (
    <div>
      <button>New</button>
      <div>
        <Link>New Deck</Link>
        <Link>New Flashcard</Link>
      </div>
    </div>
