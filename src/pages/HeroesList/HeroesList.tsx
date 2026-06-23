import { useState } from 'react'
import { generateAlphabet } from './utils'
import { Button } from '@/components/ui/button'
import { useGetHeroesByFirstLetter } from '@/hooks/useGetHeroesByFirstLetter'
import HeroCard from '@/components/HeroCard/HeroCard'

const alphabet = generateAlphabet()

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A')
  const { heroes, isLoading, isError, error, refetch } = useGetHeroesByFirstLetter()

  const onSelectLetter = (letter: string) => {
    setSelectedLetter(letter)
    refetch(letter)
  }

  return (
    <section className='space-y-8'>
      <div className='space-y-2 text-center'>
        <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Directory</p>
        <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>Explore heroes</h1>
        <p className='text-muted-foreground'>Choose an initial to browse the roster.</p>
      </div>
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
          // <ul className={isLoading ? 'opacity-50' : undefined}>
          //   {heroes?.map((hero) => (
          //     <li key={hero.id}>
          //       {hero.id} - {hero.name}
          //     </li>
          //   ))}
          // </ul>
          <div className='grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {heroes?.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default HeroesList
