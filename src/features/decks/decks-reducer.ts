import { AddDeckRespType, Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return { ...state, decks: action.payload.deks }
    }
    case 'ADD-DECK': {
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    }

    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (deks: Deck[]) => {
  return {
    type: 'SET-DECKS' as const,
    payload: { deks },
  }
}

export const addDeckAC = (deck: AddDeckRespType) => {
  return {
    type: 'ADD-DECK' as const,
    payload: { deck },
  }
}
