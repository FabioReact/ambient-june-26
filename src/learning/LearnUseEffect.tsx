import { useEffect, useLayoutEffect } from 'react'

// useEffect avec un tableau de dépendances vide ne va s'executer qu'une seule fois: après le premier rendu du composant
// useEffect avec une variable dans le tableau de dépendances va s'éxécuter une fois après le premier rendu ET à chaque mise à jour de la variable observée

const LearnUseEffect = () => {
  const log = () => {
    console.log('log')
  }

  useEffect(() => {
    console.log('useEffect - Déclenchement du useEffect après le rendu du composant')
    document.addEventListener('click', log)
    // Ici, je peux executer des fonctions avec des effets de bord
    return () => {
      console.log("return useEffect - Le composant va se démonter de l'UI")
      document.removeEventListener('click', log)
      // clean up - nettoyage
    }
  }, []) // drama130 -> Avengers001

  useLayoutEffect(() => {
    console.log('useLayoutEffect - Déclenchement AVANT le rendu du composant')
    return () => {
      console.log("return useLayoutEffect - Le composant va se démonter de l'UI")
    }
  }, [])

  console.log('Render du composant LearnUseEffect')

  return (
    <section className='mx-auto max-w-3xl space-y-6'>
      <header className='space-y-3 border-b border-border pb-6'>
        <span className='inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground'>
          React Hook
        </span>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>useEffect</h1>
          <p className='max-w-2xl text-base leading-7 text-muted-foreground'>
            Exécuter et nettoyer une synchronisation avec le monde extérieur à React.
          </p>
        </div>
      </header>

      <div className='rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6'>
        <div className='flex items-start gap-4'>
          <span className='mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_4px] shadow-emerald-500/15' />
          <div className='space-y-2'>
            <p className='font-semibold text-card-foreground'>Un effet après le rendu</p>
            <p className='leading-7 text-muted-foreground'>
              <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>useEffect</code>{' '}
              s’exécute après l’affichage du composant. Dans cet exemple, il enregistre un écouteur
              de clic sur le document. Le tableau de dépendances vide indique que cette
              synchronisation est créée au montage du composant uniquement.
            </p>
            <p className='leading-7 text-muted-foreground'>
              Si une valeur est ajoutée au tableau, par exemple{' '}
              <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>[searchTerm]</code>,
              l’effet s’exécute une première fois après le montage, puis à chaque changement de{' '}
              <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>searchTerm</code>.
              React compare les dépendances entre deux rendus et ne relance l’effet que si au moins
              l’une d’elles a changé.
            </p>
            <p className='leading-7 text-muted-foreground'>
              La fonction retournée par l’effet est appelée lors du démontage : elle supprime
              l’écouteur pour éviter de conserver un comportement devenu inutile. Quand une
              dépendance change, ce nettoyage est aussi exécuté avant que le nouvel effet ne soit
              lancé.
            </p>
          </div>
        </div>
      </div>

      <div className='rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6'>
        <h2 className='text-lg font-semibold tracking-tight'>useEffect ou useLayoutEffect ?</h2>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='rounded-xl bg-muted/60 p-4'>
            <code className='font-mono text-sm font-semibold'>useEffect</code>
            <p className='mt-2 leading-7 text-muted-foreground'>
              S’exécute après que le navigateur a affiché les changements. C’est le choix par
              défaut pour les requêtes, abonnements, écouteurs ou synchronisations qui n’ont pas
              besoin de bloquer l’affichage.
            </p>
          </div>
          <div className='rounded-xl bg-muted/60 p-4'>
            <code className='font-mono text-sm font-semibold'>useLayoutEffect</code>
            <p className='mt-2 leading-7 text-muted-foreground'>
              S’exécute de façon synchrone après la mise à jour du DOM, mais avant son affichage.
              Il sert à mesurer ou modifier la mise en page sans effet visuel intermédiaire, mais
              peut retarder le rendu.
            </p>
          </div>
        </div>
        <p className='mt-4 border-l-2 border-primary pl-4 leading-7 text-muted-foreground'>
          Utilisez <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>useEffect</code>{' '}
          dans la majorité des cas. Réservez{' '}
          <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>useLayoutEffect</code>{' '}
          aux besoins lorsque vous souhaitez executer une tâche avant le rendu.
        </p>
      </div>
    </section>
  )
}

export default LearnUseEffect
