import type { Hero } from '../types/hero'

export const getHeroesByFirstLetter = (letter: string): Promise<Hero[]> => {
  return fetch(`http://localhost:3001/heroes?name_like=^${letter}`).then((response) => {
    if (response.ok) return response.json()
  })
}
