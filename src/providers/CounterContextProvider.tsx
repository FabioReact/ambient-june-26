import CounterContext from '@/context/counter-context'
import { useState, type PropsWithChildren } from 'react'

// Créer SquadContext
// Ajouter un héro à la squad
// Retirer un héro de la squad
// Max 3 par Squad
// Sur la page Squad, je dois voir retirer un héro de la squad, mais pas en ajouter
// Sur la page HeroesList, je peux en ajouter (possiblement le retirer)
// Sur la page squad, je n'ai de détails sur le nombre de heros présents dans ma squad

const CounterContextProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((preCounter) => preCounter + 1)
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        increment,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider
