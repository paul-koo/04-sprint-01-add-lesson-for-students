import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/store'
import { fetchDecksTC } from '../../decks-thunks'
import { decksSelector } from '../../decks-selectors'

export const useFetchDecks = () => {
  const decks = useAppSelector(decksSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return decks
}
