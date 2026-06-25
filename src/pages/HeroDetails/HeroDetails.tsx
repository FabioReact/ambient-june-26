import { getHeroById } from '@/api/heroes'
import ErrorState from '@/components/ErrorState/ErrorState'
import IsLoading from '@/components/IsLoading/IsLoading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { BriefcaseBusiness, Eye, MapPin, Ruler, Star, Users, Weight } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router'

const HeroDetails = () => {
  const { id } = useParams()

  const {
    error,
    data: hero,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['hero', id],
    queryFn: () => getHeroById(id!),
  })

  return (
    <section className='space-y-5'>
      <IsLoading loading={isLoading}>
        {isError && (
          <ErrorState
            error={error}
            title='Unable to load this hero'
            // onRetry={() => void refetch()}
          />
        )}

        {!isError && hero && (
          <>
            <div className='overflow-hidden rounded-2xl border bg-card shadow-sm'>
              <div className='flex flex-col xl:flex-row'>
                <div className='flex-1 px-5 py-7 sm:px-8 sm:py-9'>
                  <div className='mb-3 flex flex-wrap gap-1.5'>
                    <Badge variant='outline' className='bg-background/80'>
                      #{hero.id}
                    </Badge>
                    <Badge
                      variant={hero.biography.alignment === 'good' ? 'secondary' : 'destructive'}
                    >
                      {hero.biography.alignment}
                    </Badge>
                    {hero.biography.publisher && (
                      <Badge variant='outline' className='bg-background/80'>
                        {hero.biography.publisher}
                      </Badge>
                    )}
                  </div>
                  <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>
                    Hero dossier
                  </p>
                  <h1 className='mt-2 text-3xl font-semibold tracking-tight sm:text-4xl'>
                    {hero.name}
                  </h1>
                  <p className='mt-1 text-base text-muted-foreground'>
                    {hero.biography['full-name'] || 'Unknown identity'}
                  </p>
                  {/* {accessToken && (
                    <Button
                      className='mt-4'
                      variant={isFavorite ? 'secondary' : 'outline'}
                      onClick={() =>
                        isFavorite ? removeFromFavorites(hero.id) : addToFavorites(hero)
                      }
                    >
                      <Star className={isFavorite ? 'fill-amber-400 text-amber-400' : ''} />
                      {isFavorite ? 'Saved to favorites' : 'Save to favorites'}
                    </Button>
                  )} */}
                </div>

                <div className='border-t bg-muted/30 px-5 py-6 xl:w-80 xl:border-t-0 xl:border-x xl:px-6'>
                  <div className='mb-4 flex items-center gap-2'>
                    <MapPin className='size-4 text-primary' />
                    <p className='text-sm font-semibold tracking-[0.16em] uppercase'>Origin</p>
                  </div>
                  <div className='grid gap-y-3 text-sm'>
                    <HeaderDetail label='Place of birth' value={hero.biography['place-of-birth']} />
                    <HeaderDetail
                      label='First appearance'
                      value={hero.biography['first-appearance']}
                    />
                    <HeaderDetail label='Aliases' value={hero.biography.aliases.join(', ')} />
                    <HeaderDetail label='Alter egos' value={hero.biography['alter-egos']} />
                  </div>
                </div>

                <div className='relative min-h-64 bg-muted/50 xl:min-h-0 xl:w-72'>
                  <img
                    className='absolute inset-0 h-full w-full object-contain p-4'
                    src={hero.image.url}
                    alt={`Illustration of ${hero.biography['full-name'] || hero.name}`}
                  />
                </div>
              </div>
            </div>

            <div className='grid gap-4 lg:grid-cols-[1.1fr_0.9fr]'>
              <Card size='sm' className='shadow-sm'>
                <CardHeader>
                  <CardTitle>Power profile</CardTitle>
                  <CardDescription>Core abilities measured across six attributes.</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-x-5 gap-y-3 sm:grid-cols-2'>
                  {[
                    ['Intelligence', hero.powerstats.intelligence, 'bg-sky-500'],
                    ['Combat', hero.powerstats.combat, 'bg-rose-500'],
                    ['Durability', hero.powerstats.durability, 'bg-emerald-500'],
                    ['Power', hero.powerstats.power, 'bg-violet-500'],
                    ['Speed', hero.powerstats.speed, 'bg-amber-500'],
                    ['Strength', hero.powerstats.strength, 'bg-orange-500'],
                  ].map(([label, value, color]) => (
                    <div key={label as string} className='space-y-1.5'>
                      <div className='flex items-center justify-between text-sm'>
                        <span className='font-medium'>{label}</span>
                        <span className='font-semibold tabular-nums'>{value}</span>
                      </div>
                      <div className='h-2 overflow-hidden rounded-full bg-muted'>
                        <div
                          className={`h-full rounded-full transition-all ${color}`}
                          style={{ width: `${Math.min(Number(value), 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card size='sm' className='shadow-sm'>
                <CardHeader>
                  <CardTitle>Identity</CardTitle>
                  <CardDescription>Personal and appearance information.</CardDescription>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='grid grid-cols-2 gap-2.5'>
                    <Detail icon={<Eye />} label='Eyes' value={hero.appearance['eye-color']} />
                    <Detail icon={<Star />} label='Hair' value={hero.appearance['hair-color']} />
                    <Detail
                      icon={<Ruler />}
                      label='Height'
                      value={hero.appearance.height.join(' / ')}
                    />
                    <Detail
                      icon={<Weight />}
                      label='Weight'
                      value={hero.appearance.weight.join(' / ')}
                    />
                  </div>
                  <div className='rounded-xl bg-muted p-3 text-sm'>
                    <p className='text-muted-foreground'>Gender & race</p>
                    <p className='mt-1 font-medium'>
                      {hero.appearance.gender} · {hero.appearance.race}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <InfoCard
                icon={<BriefcaseBusiness />}
                title='Work'
                items={[
                  ['Occupation', hero.work.occupation],
                  ['Base', hero.work.base],
                ]}
              />
              <InfoCard
                icon={<Users />}
                title='Connections'
                items={[
                  ['Affiliations', hero.connections['group-affiliation']],
                  ['Relatives', hero.connections.relatives],
                ]}
              />
            </div>
          </>
        )}
      </IsLoading>
    </section>
  )
}

const HeaderDetail = ({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode
  label: string
  value: string
}) => (
  <div className='min-w-0'>
    <p className='flex items-center gap-1 text-xs font-medium tracking-wide text-muted-foreground uppercase [&_svg]:size-3.5'>
      {icon}
      {label}
    </p>
    <p className='mt-0.5 truncate font-medium' title={value || 'Unknown'}>
      {value || 'Unknown'}
    </p>
  </div>
)

const Detail = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) => (
  <div className='rounded-lg border p-2.5'>
    <div className='flex items-center gap-1.5 text-muted-foreground [&_svg]:size-3.5'>
      {icon}
      <span className='text-xs font-medium uppercase tracking-wide'>{label}</span>
    </div>
    <p className='mt-1 text-sm font-medium'>{value || 'Unknown'}</p>
  </div>
)

const InfoCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: [string, string][]
}) => (
  <Card size='sm' className='shadow-sm'>
    <CardHeader>
      <CardTitle className='flex items-center gap-2'>
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className='space-y-3'>
      {items.map(([label, value]) => (
        <div key={label}>
          <p className='text-xs font-medium tracking-wide text-muted-foreground uppercase'>
            {label}
          </p>
          <p className='mt-0.5 text-sm leading-5'>{value || 'Unknown'}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

export default HeroDetails
