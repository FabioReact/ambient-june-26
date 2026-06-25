import { Button } from '@/components/ui/button'
import SelectHero from './SelectHero'
import { Swords } from 'lucide-react'
import { useState } from 'react'
import type { Hero } from '@/types/hero'
import HeroCard from '@/components/HeroCard/HeroCard'
import { fight } from './utils'
import { useAppDispatch } from '@/redux/app/hooks'
import { addBattleHistoryEntry } from '@/redux/features/battle-history/battleHistorySlice'

const Battle = () => {
  const [hero, setHero] = useState<Hero | null>(null)
  const [challenger, setChallenger] = useState<Hero | null>(null)
  const [winner, setWinner] = useState<Hero | null>(null)
  const dispatch = useAppDispatch()

  const onSelectHero = (hero: Hero) => {
    setHero(hero)
  }

  const onSelectChallenger = (hero: Hero) => {
    setChallenger(hero)
  }

  const onFight = () => {
    if (!hero || !challenger) return
    const result = fight(hero, challenger)
    const loserName = hero.id === result.id ? challenger.name : hero.name
    const id = Math.random().toString(8).substring(2, 15) + Math.random().toString(8).substring(2, 15)
    // use temporal api
    // const datetime = Temporal.Now.instant().toString()
    const datetime = new Date().toISOString()
    dispatch(addBattleHistoryEntry({ id, winner: result.name, loser: loserName, datetime }))
    setWinner(result)
  }

  const onReset = () => {
    setHero(null)
    setChallenger(null)
    setWinner(null)
  }

  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Simulator</p>
        <h1 className='mt-2 text-3xl font-semibold tracking-tight sm:text-4xl'>Hero battle</h1>
        <p className='mt-2 text-muted-foreground'>
          Pick two contenders and let their power stats decide.
        </p>
      </div>
      {/* Select Heroes Section */}
      <div className='flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start'>
        {!hero && <SelectHero onSelect={onSelectHero} />}
        {hero && <HeroCard hero={hero} />}
        {hero && challenger && (
          <div className='self-center'>
            <Button
              className='size-12 rounded-full'
              size='icon'
              aria-label='Start battle'
              onClick={onFight}
            >
              <Swords />
            </Button>
          </div>
        )}
        {!challenger && <SelectHero onSelect={onSelectChallenger} />}
        {challenger && <HeroCard hero={challenger} />}
      </div>
      {/* Winner Section */}
      {winner && (
        <div className='flex flex-col items-center gap-4 rounded-xl border bg-card p-6 shadow-sm'>
          <Button onClick={onReset} variant='outline'>
            Reset
          </Button>
          <h2 className='text-xl font-semibold'>🎉 The winner is {winner.name}</h2>
        </div>
      )}
    </section>
  )
}

export default Battle
