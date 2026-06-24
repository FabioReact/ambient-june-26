import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import type { Hero } from '@/types/hero'
import { Button } from '../ui/button'
import { ShieldPlus, Star } from 'lucide-react'
import Check from '../icons/Check'
import { useSquadContext } from '@/context/squad-context'

type HeroCardProps = {
  hero: Hero
}

const HeroCard = ({ hero }: HeroCardProps) => {
  const { squad, addToSquad } = useSquadContext()
  const isInSquad = squad.includes(hero)
  const isFull = squad.length === 3

  const stats = [
    {
      label: 'INT',
      value: hero.powerstats.intelligence,
      className:
        'border-sky-200 bg-sky-100 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300',
    },
    {
      label: 'COM',
      value: hero.powerstats.combat,
      className:
        'border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300',
    },
    {
      label: 'DUR',
      value: hero.powerstats.durability,
      className:
        'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      label: 'POW',
      value: hero.powerstats.power,
      className:
        'border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300',
    },
    {
      label: 'SPD',
      value: hero.powerstats.speed,
      className:
        'border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300',
    },
    {
      label: 'STR',
      value: hero.powerstats.strength,
      className:
        'border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300',
    },
  ]

  return (
    <Card className='w-full max-w-xs gap-0 overflow-hidden py-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl'>
      <div className='relative h-80 overflow-hidden bg-muted'>
        <img
          className='absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-500 group-hover/card:scale-105'
          src={hero.image.url}
          alt={`Illustration of ${hero.biography['full-name'] || hero.name}`}
        />
      </div>
      <CardHeader className='pt-4'>
        <CardTitle className='text-lg'>
          <span className='ml-1.5 text-sm font-normal text-muted-foreground'>#{hero.id}</span>
        </CardTitle>
        <CardDescription>{hero.biography['full-name'] || 'Unknown identity'}</CardDescription>
        <CardAction>
          <Star fill="gold" color='gold' />
        </CardAction>
      </CardHeader>
      <CardContent className='flex flex-wrap gap-1.5 border-t mt-3 py-3'>
        {stats.map(({ label, value, className }) => (
          <Badge key={label} variant='outline' className={className}>
            {label} {value}
          </Badge>
        ))}
      </CardContent>
      <CardContent className='border-t py-3'>
        <Button
          className='w-full cursor-pointer'
          variant={isInSquad ? 'secondary' : 'outline'}
          disabled={isInSquad || isFull}
          onClick={() => addToSquad(hero)}
        >
          {isInSquad ? <Check /> : <ShieldPlus />}
          {isInSquad ? 'In Squad' : isFull ? 'Squad full' : 'Add to squad'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default HeroCard
