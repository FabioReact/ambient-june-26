import { useState } from 'react'
import { generateAlphabet } from './utils'
import { Button } from '@/components/ui/button'
import HeroCard from '@/components/HeroCard/HeroCard'
import IsLoading from '@/components/IsLoading/IsLoading'
import { useSearchParams } from 'react-router'
import { useGetHeroesByFirstLetterQuery } from '@/redux/services/heroesApi'

const alphabet = generateAlphabet()

const HeroesList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedLetter, setSelectedLetter] = useState<string>(searchParams.get('q') || 'A')

  const {
    isError,
    error,
    isLoading,
    isFetching,
    data: heroes,
  } = useGetHeroesByFirstLetterQuery(selectedLetter)

  const onSelectLetter = (letter: string) => {
    setSearchParams({ q: letter })
    setSelectedLetter(letter)
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
      <section className='flex justify-center'>
        {isError && (
          <p className='text-red-500'>
            An error occured: {'message' in error ? error.message : ''}
          </p>
        )}
        {!isError && (
          <IsLoading loading={isLoading || isFetching}>
            <div className='grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {heroes?.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
              ))}
            </div>
          </IsLoading>
        )}
      </section>
    </section>
  )
}

export default HeroesList
