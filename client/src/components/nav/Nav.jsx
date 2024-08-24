// src/components/Nav.jsx
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div id="nav" className="nav">
      <h2 className="nav__current-deck">{/*currentDeck*/}</h2>
      <div className="nav__links-container">
        <Link to={'/'} className="nav__home">
          Home
        </Link>
        <Link to={'/decks'} className="nav__decks">
          Decks
        </Link>
        <button className="nav__new-button">New</button>
      </div>
      <div className='nav__new-container'>
        <p className="nav__new-deck">New Deck</p>
        <p className="nav__new-flashcard">hew Flashcard</p>
      </div>
    </div>
  )
}
