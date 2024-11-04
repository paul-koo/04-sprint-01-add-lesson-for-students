import { AppRootState, useAppSelector } from '../../app/store'
import { Deck } from './decks-api'

export const decksSelector = (state: AppRootState) => state.decksReducer.decks
