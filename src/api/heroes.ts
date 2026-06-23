import type { Hero } from '../types/hero'

export const getHeroesByFirstLetter = (letter: string, options?: RequestInit): Promise<Hero[]> => {
  return fetch(`http://localhost:3001/heroes?name_like=^${letter}`, options).then((response) => {
    if (response.ok) return response.json()
  })
}
