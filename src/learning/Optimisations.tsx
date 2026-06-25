/* eslint-disable react-hooks/refs */
import {
  useState,
  type PropsWithChildren,
  useRef,
  useEffect,
  memo,
  useCallback,
  useMemo,
} from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const expensiveFunction = (number: number) => {
  let str = ''
  for (let i = 0; i < 30000000; i++) {
    str += 'a'
  }
  return str.length + number
}

const Title = memo(({ children }: PropsWithChildren) => {
  console.log('Render de Title')
  // const rendersRef = useRef(1)
  // useEffect(() => {
  //   rendersRef.current = rendersRef.current + 1
  // })
  return <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>{children}</h1>
})

const Button = memo(({ onClick, children }: PropsWithChildren<{ onClick: () => void }>) => {
  console.log('Render de Button', children)
  const rendersRef = useRef(1)
  useEffect(() => {
    rendersRef.current = rendersRef.current + 1
  })
  return <button onClick={onClick}>{children}</button>
})

const Optimisations = () => {
  const [incrementBy, setIncrementBy] = useState(1)
  const [counter, setCounter] = useState(0)

  const increment = useCallback(() => {
    setCounter((c) => c + 1)
  }, [])

  const decrement = useCallback(() => setCounter((c) => c - 1), [])

  const onIncrementBy = useCallback(() => {
    setCounter((c) => c + incrementBy)
  }, [incrementBy])

  const result = useMemo(() => {
    console.log('Nouveau calcul de expensive function')
    return expensiveFunction(incrementBy)
  }, [incrementBy])

  return (
    <section className='mx-auto max-w-4xl space-y-8'>
      <div className='space-y-2'>
        <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>React lab</p>
        <Title>Optimisations</Title>
        <p className='max-w-2xl text-muted-foreground'>
          Explore the impact of memoization with React.memo, useCallback and useMemo.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle>Counter controls</CardTitle>
            <CardDescription>
              Update the counter and inspect component renders in the console.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-5'>
            <div className='rounded-xl bg-muted p-5'>
              <p className='text-sm text-muted-foreground'>Current counter</p>
              <p className='mt-1 text-4xl font-semibold tracking-tight tabular-nums'>{counter}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Button onClick={increment}>Increment</Button>
              <Button onClick={decrement}>Decrement</Button>
              <Button onClick={onIncrementBy}>Increment by {incrementBy || 'X'}</Button>
            </div>
          </CardContent>
        </Card>

        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle>Memoized computation</CardTitle>
            <CardDescription>
              The calculation runs only when the increment value changes.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-5'>
            <div className='space-y-2'>
              <Label htmlFor='incrementBy'>Increment by</Label>
              <Input
                id='incrementBy'
                type='number'
                value={incrementBy}
                onChange={(e) => setIncrementBy(parseInt(e.target.value))}
              />
            </div>
            <div className='rounded-xl border border-primary/15 bg-primary/5 p-5'>
              <p className='text-sm text-muted-foreground'>Result of expensive computation</p>
              <p className='mt-1 text-2xl font-semibold tabular-nums'>{result}</p>
            </div>
          </CardContent>
        </Card>
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle>React.memo</CardTitle>
            <CardDescription>
              memo permet de mémoïser le résultat d'un composant. Il ne se re-rendera que si ses
              props changent.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle>useCallback</CardTitle>
            <CardDescription>
              useCallback permet de mémoïser la référence d'une fonction. Elle ne sera recréée que
              si ses dépendances changent.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle>useMemo</CardTitle>
            <CardDescription>
              useMemo permet de mémoïser le résultat d'une fonction. Le résultat ne sera recalculé
              que si ses dépendances changent.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

export default Optimisations
