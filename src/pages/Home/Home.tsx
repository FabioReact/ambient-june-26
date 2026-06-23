import CounterContext from '@/context/counter-context'
import { useContext } from 'react'

const Home = () => {
  const { counter, increment } = useContext(CounterContext)
  return (
    <section>
      <h1>Home Page</h1>
      <button onClick={increment}>Increment Counter ({counter})</button>
    </section>
  )
}

export default Home
