import { useState } from 'react'

const LearnUseState = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  return (
    <section>
      <h1>Learn UseState</h1>
      <p>
        On utilise useState lorsqu'on souhaite que React observe une variable et rafraichisse l'UI
        lorsque cette variable change.
      </p>
      <p>
        Si la valeur future de mon état dépend de la valeur actuelle, alors je dois utiliser la
        fonction callback de mon "setState"
      </p>
      <div>
        <p>Valeur du compteur: {counter}</p>
        <button onClick={onIncrement}>Incrémenter</button>
      </div>
    </section>
  )
}

export default LearnUseState
