// src/api.js

import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

export const fetchDecks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/decks/`)
    return response.data
  } catch (error) {
    console.error('Error fetching decks:', error)
    throw error
  }
}

export const createDeck = async (deck) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/decks/`, deck)
    return response.data
  } catch (error) {
    console.error('Error creating deck:', error)
    throw error
  }
}

export const updateDeck = async (id, updatedDeck) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/decks/${id}`,
      updatedDeck
    )
    return response.data
  } catch (error) {
    console.error('Error updating deck:', error)
    throw error
  }
}

export const deleteDeck = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/decks/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting deck:', error)
    throw error
  }
}

export const fetchFlashcards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flashcards/`)
    return response.data
  } catch (error) {
    console.error('Error fetching flashcards:', error)
    throw error
  }
}

export const createFlashcard = async (flashcard) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/flashcards/`, flashcard)
    return response.data
  } catch (error) {
    console.error('Error creating flashcard:', error)
    throw error
  }
}

export const updateFlashcard = async (id, updatedFlashcard) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/flashcard/${id}`,
      updatedFlashcard
    )
    return response.data
  } catch (error) {
    console.error('Error updating flashcard:', error)
    throw error
  }
}

export const deleteFlashcard = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/flashcards/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting flashcard:', error)
    throw error
  }
}
