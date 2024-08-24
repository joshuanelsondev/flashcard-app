import Decks from './components/decks/Decks'
import Flashcards from './components/flashcards/Flashcards'
import './App.scss'

function App() {
  return (
    <main>
      <h1>Flashcards</h1>
      <Decks />
      <Flashcards />
    </main>
  )
}

export default App
