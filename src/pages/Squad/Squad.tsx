import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useSquadContext } from '@/context/squad-context'
import { ShieldPlus, Trash2, UsersRound } from 'lucide-react'
import { Link } from 'react-router'

const Stat = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className='rounded-lg bg-muted p-3 text-center'>
    <p className={`text-xs font-semibold tracking-wide ${color}`}>{label}</p>
    <p className='mt-1 text-xl font-semibold tabular-nums'>{value}</p>
  </div>
)

const Squad = () => {
  // const { counter, increment } = useContext(CounterContext)
  const { squad, removeFromSquad } = useSquadContext()

  const totals = squad.reduce(
    (stats, hero) => ({
      intelligence: stats.intelligence + hero.powerstats.intelligence,
      combat: stats.combat + hero.powerstats.combat,
      durability: stats.durability + hero.powerstats.durability,
      power: stats.power + hero.powerstats.power,
      speed: stats.speed + hero.powerstats.speed,
      strength: stats.strength + hero.powerstats.strength,
    }),
    { intelligence: 0, combat: 0, durability: 0, power: 0, speed: 0, strength: 0 },
  )

  return (
    <section className='space-y-6'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>
            Team builder
          </p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Build your squad</h1>
          <p className='mt-2 text-muted-foreground'>
            Choose up to three heroes and appoint a captain.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <Badge variant='outline' className='h-7 px-3'>
            {squad.length} / 3 heroes
          </Badge>
          {/* {squad.length > 0 && (
            <Button variant='outline' onClick={clearSquad}>
              Clear squad
            </Button>
          )} */}
        </div>
      </div>

      {squad.length === 0 ? (
        <Card className='border-dashed py-10 text-center shadow-none'>
          <CardContent className='flex flex-col items-center'>
            <div className='grid size-12 place-items-center rounded-full bg-primary/10 text-primary'>
              <UsersRound />
            </div>
            <CardTitle className='mt-4'>Your squad is empty</CardTitle>
            <CardDescription className='mt-2'>
              Add heroes from the directory to start building a team.
            </CardDescription>
            <Button className='mt-5' render={<Link to='/heroes' />}>
              <ShieldPlus />
              Explore heroes
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className='grid gap-4 lg:grid-cols-3'>
            {squad.map((hero) => {

              return (
                <Card key={hero.id} size='sm' className='overflow-hidden shadow-sm'>
                  <div className='flex gap-3 p-3'>
                    <img
                      className='size-16 rounded-lg bg-muted object-cover'
                      src={hero.image.url}
                      alt={`Illustration of ${hero.biography['full-name'] || hero.name}`}
                    />
                    <div className='min-w-0 flex-1'>
                      <div className='flex items-start justify-between gap-2'>
                        <div>
                          <Link
                            to={`/heroes/${hero.id}`}
                            className='font-semibold hover:text-primary'
                          >
                            {hero.name}
                          </Link>
                          <p className='text-xs text-muted-foreground'>#{hero.id}</p>
                        </div>
                      </div>
                      <div className='mt-3 flex flex-wrap gap-2'>
                        <Button
                          size='sm'
                          variant='destructive'
                          onClick={() => removeFromSquad(hero.id)}
                          aria-label={`Remove ${hero.name} from squad`}
                        >
                          <Trash2 />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card size='sm' className='shadow-sm'>
            <CardHeader>
              <CardTitle>Combined power</CardTitle>
              <CardDescription>Totals for the heroes currently in your squad.</CardDescription>
            </CardHeader>
            <CardContent className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6'>
              <Stat label='INT' value={totals.intelligence} color='text-sky-600' />
              <Stat label='COM' value={totals.combat} color='text-rose-600' />
              <Stat label='DUR' value={totals.durability} color='text-emerald-600' />
              <Stat label='POW' value={totals.power} color='text-violet-600' />
              <Stat label='SPD' value={totals.speed} color='text-amber-600' />
              <Stat label='STR' value={totals.strength} color='text-orange-600' />
            </CardContent>
          </Card>
        </>
      )}
    </section>
  )
}

export default Squad
