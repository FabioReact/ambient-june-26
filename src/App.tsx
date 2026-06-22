// import myClasses from './App.module.css'

import { useState } from 'react'

const alphabet: string[] = []

for (let index = 65; index <= 90; index++) {
  alphabet.push(String.fromCharCode(index))
}

function App() {
  const [selectedLetter, setSelectedLetter] = useState('')

  const onSelectLetter = (letter: string) => {
    setSelectedLetter(letter)
  }

  return (
    <>
      <h1>Superhero App</h1>
      <ul>
        {alphabet.map((letter) => (
          <li key={letter} onClick={() => onSelectLetter(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      <p>Vous avez choisi la lettre {selectedLetter}</p>
    </>
  )
}

export default App
