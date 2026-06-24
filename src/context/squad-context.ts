import type { Hero } from '@/types/hero'
import { createContext, useContext } from 'react'

type SquadContextType = {
  squad: Hero[]
  addToSquad: (hero: Hero) => void
  removeFromSquad: (id: number) => void
}

const SquadContext = createContext<SquadContextType>(null!)

type SquadState = Hero[]
type SquadAction =
  | { type: 'ADD_TO_SQUAD'; payload: Hero }
  | { type: 'REMOVE_FROM_SQUAD'; payload: number }

export const squadReducer = (state: SquadState, action: SquadAction) => {
  switch (action.type) {
    case 'ADD_TO_SQUAD': {
      if (state.length === 3) return state
      if (state.includes(action.payload)) return state
      return [...state, action.payload]
    }
    case 'REMOVE_FROM_SQUAD': {
      return state.filter((hero) => hero.id !== action.payload)
    }
    default:
      return state
  }
}

export const useSquadContext = () => useContext(SquadContext)

export default SquadContext
