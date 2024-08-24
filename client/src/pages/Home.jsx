// src/pages/Home.jsx
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/decks'}>
        <h2>Decks</h2>
      </Link>
      <div>
        <h2>New Deck</h2>
      </div>
    </div>
  )
}
