import { createContext } from 'react'

type CounterContextType = {
  counter: number
  increment: () => void
}

const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
})

export default CounterContext
