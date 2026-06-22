import { useEffect, useLayoutEffect } from 'react'

// useEffect avec un tableau de dépendances vide ne va s'executer qu'une seule fois: après le premier rendu du composant
// useEffect avec une variable dans le tableau de dépendances va s'éxécuter une fois après le premier rendu ET à chaque mise à jour de la variable observée

const LearnUseEffect = () => {
  const log = () => {
    console.log('log')
  }

  useEffect(() => {
    console.log('useEffect - Déclenchement du useEffect après le rendu du composant')
    document.addEventListener('click', log)
    // Ici, je peux executer des fonctions avec des effets de bord
    return () => {
      console.log("return useEffect - Le composant va se démonter de l'UI")
      document.removeEventListener('click', log)
      // clean up - nettoyage
    }
  }, []) // drama130 -> Avengers001

  useLayoutEffect(() => {
    console.log('useLayoutEffect - Déclenchement AVANT le rendu du composant')
    return () => {
      console.log("return useLayoutEffect - Le composant va se démonter de l'UI")
    }
  }, [])

  console.log('Render du composant LearnUseEffect')

  return (
    <section>
      <h1>Learn useEffect</h1>
    </section>
  )
}

export default LearnUseEffect
