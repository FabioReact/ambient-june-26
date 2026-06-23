import { useRef, useState } from 'react'

// Créer un composant où renders = 0 et counter = 0
// J'incrémente le counter, il incrémente renders de 1, il détruit le composant où counter = 0
// Il créer un nouveau composant où counter = 1 et renders = 0
// J'incrémente le counter, il incrémente renders de 1, il détruit le composant où counter = 1
// Il créer un nouveau composant où counter = 2 et renders = 0

const LearnUseRef = () => {
  const [counter, setCounter] = useState(0)
  //   let renders = 0
  const rendersRef = useRef(0)
  //   const boxElement = document.getElementById('box')
  const boxRef = useRef(null)

  const onClickHandler = () => {
    setCounter((prevCount) => prevCount + 1)
    // renders++
    rendersRef.current++
    console.log(rendersRef.current)
  }

  return (
    <section>
      <h1>Learn UseRef</h1>
      <p>
        On utilise useRef lorqu'on souhaite conserver une référence stable (malgrès les différents
        rendu) vers une variable. À la différence de useState, useRef ne provoque pas de nouveau
        rendu du l'UI
      </p>
      <div id='box' ref={boxRef}>
        Box
      </div>
      <button onClick={onClickHandler}>Increment {counter}</button>
    </section>
  )
}

export default LearnUseRef
