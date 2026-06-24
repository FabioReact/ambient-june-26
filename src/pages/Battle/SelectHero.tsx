import ErrorState from '@/components/ErrorState/ErrorState'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useGetHeroesByName } from '@/hooks/useGetHeroesByName'
import type { Hero } from '@/types/hero'
import { useRef } from 'react'

// Pour transmettre une information d'un parent à un children je peux utiliser les props
// Pour transmettre une information du children vers le parent, je ne peux le faire que si le parent me donne une fonction callback

type SelectHeroProps = {
  onSelect: (hero: Hero) => void
}

const SelectHero = ({ onSelect }: SelectHeroProps) => {
  const { isLoading, isError, error, searchHero, data } = useGetHeroesByName()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (event: React.SubmitEvent) => {
    event.preventDefault()
    const name = inputRef.current?.value
    if (name) searchHero(name)
  }

  return (
    <Card className='w-full max-w-sm shadow-sm'>
      <CardHeader>
        <CardTitle className='capitalize'>Choose Hero</CardTitle>
        <CardDescription>Search the hero directory by name.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmitHandler}>
          <fieldset className='mb-4 space-y-2'>
            <Label htmlFor='hero'>Select your Hero</Label>
            <Input type='text' name='hero' id='hero' ref={inputRef} />
          </fieldset>
          <Button className='w-full' type='submit' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Search'}
          </Button>
        </form>
        {isError && (
          <div className='mt-4'>
            <ErrorState
              error={error}
              title='Unable to search heroes'
              onRetry={() => {
                const name = inputRef.current?.value
                if (name) searchHero(name)
              }}
            />
          </div>
        )}
      </CardContent>
      {data && (
        <ul className='mt-5 space-y-1 border-t pt-4'>
          {data.map((hero) => (
            <li
              className='cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted'
              key={hero.id}
            >
              <button
                onClick={() => {
                  onSelect(hero)
                }}
              >
                <span>#{hero.id}</span> - {hero.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export default SelectHero
