import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponseType>('v2/decks')
  },

  addDeck(name: string) {
    return instance.post<AddDeckRespType>('v1/decks', { name })
  },
}

export type GetDecksResponseType = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  author: Author
  id: string //
  userId: string //
  name: string //
  isPrivate: boolean //
  cover: string //
  created: string //
  updated: string //
  cardsCount: number //
}

export type AddDeckRespType = {
  author: Author
  id: string //
  userId: string //
  name: string //
  isPrivate: boolean //
  cover: string //
  created: string //
  updated: string //
  cardsCount: number //
}

type Author = {
  id: string
  name: string
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
