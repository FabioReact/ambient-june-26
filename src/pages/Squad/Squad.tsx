import CounterContext from '@/context/counter-context'
import { useContext } from 'react'

const Squad = () => {
  const { counter, increment } = useContext(CounterContext)
  return (
    <section>
      <h1>Squad</h1>
      <button onClick={increment}>Increment Counter ({counter})</button>
    </section>
  )
}

export default Squad
