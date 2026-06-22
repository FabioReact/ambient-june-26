import { useState } from 'react'
import { generateAlphabet } from './utils'
import { Button } from '@/components/ui/button'
import { useGetHeroesByFirstLetter } from '@/hooks/useGetHeroesByFirstLetter'

const alphabet = generateAlphabet()

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A')
  const { heroes, isLoading, isError, error, refetch } = useGetHeroesByFirstLetter()

  const onSelectLetter = (letter: string) => {
    setSelectedLetter(letter)
    refetch(letter)
  }

  return (
    <>
      <ul className='flex justify-center gap-1.5 border rounded-xl shadow-sm'>
        {alphabet.map((letter) => (
          <li key={letter}>
            <Button
              variant={selectedLetter === letter ? 'default' : 'ghost'}
              onClick={() => onSelectLetter(letter)}
            >
              {letter}
            </Button>
          </li>
        ))}
      </ul>
      <section>
        {isError && <p className='text-red-500'>An error occured: {error}</p>}
        {isLoading && !isError ? <p>Loading...</p> : null}
        {!isError && (
          <ul className={isLoading ? 'opacity-50' : undefined}>
            {heroes?.map((hero) => (
              <li key={hero.id}>
                {hero.id} - {hero.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default HeroesList
