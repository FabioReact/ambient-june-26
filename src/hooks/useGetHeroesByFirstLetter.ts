// Nos custom hooks permettent de centraliser une logique qu'on souhaite potentiellement réutiliser, ou l'extraire pour simplifier la lecture d'un composant.
// un custom hook devra toujours commencer par "use"

import { getHeroesByFirstLetter } from '@/api/heroes'
import type { Hero } from '@/types/hero'
import { useEffect, useState } from 'react'

export const useGetHeroesByFirstLetter = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [heroes, setHeroes] = useState<undefined | Hero[]>(undefined)
  const [error, setError] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()
    getHeroesByFirstLetter('A', { signal: controller.signal })
      .then((data) => {
        setHeroes(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        setError(error.message)
      })
    return () => {
      // désinscrit de l'appel http
      controller.abort()
    }
  }, [])

  const refetch = (letter: string) => {
    setIsLoading(true)
    setIsError(false)
    setError('')
    getHeroesByFirstLetter(letter)
      .then((data) => {
        setHeroes(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        setError(error.message)
      })
  }

  return {
    isLoading, // isLoading: isLoading,
    isError,
    error,
    heroes,
    refetch,
  }
}
