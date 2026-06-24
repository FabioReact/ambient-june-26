import { getHeroesByName } from '@/api/heroes'
import type { Hero } from '@/types/hero'
import { useState } from 'react'

export const useGetHeroesByName = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<undefined | Hero[]>(undefined)
  const [error, setError] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const searchHero = (name: string) => {
    setIsLoading(true)
    setIsError(false)
    setError('')
    getHeroesByName(name)
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setIsError(true)
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    isLoading,
    isError,
    error,
    data,
    searchHero,
  }
}
