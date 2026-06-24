import { useState, useReducer } from 'react'

export const useStateCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const incrementBy = (nb: number) => {
    setCounter((prevCounter) => prevCounter + nb)
  }

  return { counter, increment, incrementBy }
}

const counterReducer = (state: number, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case 'increment': {
      const newState = state + 1
      return newState
    }
    case 'incrementBy': {
      if (action.payload) {
        const newState = state + action.payload
        return newState
      }
      return state
    }
    default:
      throw new Error('counterReducer - Not a valid action type')
  }
}

export const useCounter = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0)

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  const incrementBy = (nb: number) => {
    dispatch({ type: 'incrementBy', payload: nb })
  }

  return { counter, increment, incrementBy }
}
