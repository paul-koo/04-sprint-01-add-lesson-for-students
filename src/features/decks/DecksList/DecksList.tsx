import { useEffect } from 'react'
import { decksAPI } from '../decks-api'
import s from './DecksList.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { fetchDecksTC } from '../decks-thunks'
import { useFetchDecks } from './DeckItem/useFetchDeks'

export const DecksList = () => {
  const decks = useFetchDecks()

  return <ul className={s.list}>{decks.map((deck) => DeckItem({ deck }))}</ul>
}
