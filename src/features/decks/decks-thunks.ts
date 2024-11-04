import { Dispatch } from 'redux'
import { decksAPI } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'
import { AppDispatch } from '../../app/store'

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksAPI.getDecks().then((data) => dispatch(setDecksAC(data.data.items)))
}
export const addDeckTC = (name: string) => (dispatch: AppDispatch) => {
  return decksAPI.addDeck(name).then((data) => {
    console.log('data', data)
    dispatch(addDeckAC(data.data))
  })
}
