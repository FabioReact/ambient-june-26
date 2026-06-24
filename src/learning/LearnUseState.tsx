import { useState } from 'react'

const LearnUseState = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  return (
    <section className='mx-auto max-w-3xl space-y-6'>
      <header className='space-y-3 border-b border-border pb-6'>
        <span className='inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground'>
          React Hook
        </span>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>useState</h1>
          <p className='max-w-2xl text-base leading-7 text-muted-foreground'>
            Mémoriser une valeur entre les rendus et rafraîchir l’interface lorsqu’elle change.
          </p>
        </div>
      </header>

      <div className='space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6'>
        <p className='leading-7 text-card-foreground'>
          <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>useState</code> crée
          un état local pour le composant. Il renvoie la valeur actuelle et une fonction qui permet
          de la mettre à jour. Chaque mise à jour demande à React de recalculer l’interface avec la
          nouvelle valeur.
        </p>
        <p className='border-l-2 border-primary pl-4 leading-7 text-muted-foreground'>
          Ici, le compteur augmente deux fois. Comme chaque nouvelle valeur dépend de la précédente,
          la fonction de mise à jour reçoit un callback :{' '}
          <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>prevCounter =&gt; prevCounter + 1</code>.
          Cela garantit que React utilise toujours la valeur la plus récente.
        </p>
      </div>

      <div className='flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6'>
        <div className='space-y-1'>
          <p className='text-sm font-medium text-muted-foreground'>Valeur du compteur</p>
          <p className='text-5xl font-bold tracking-tight tabular-nums'>{counter}</p>
        </div>
        <button
          className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
          onClick={onIncrement}
        >
          Incrémenter de 2
        </button>
      </div>
    </section>
  )
}

export default LearnUseState
