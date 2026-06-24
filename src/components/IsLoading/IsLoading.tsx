// Si je suis en train de charger, j'affiche Loading
// Si j'ai terminé de charger, alors j'affiche le contenu du composant

import type { PropsWithChildren } from 'react'
import Spinner from './Spinner'

type IsLoadingProps = PropsWithChildren<{
  loading: boolean
}>

const IsLoading = ({ loading, children }: IsLoadingProps) => {
  if (loading) return <Spinner />
  return children
}

export default IsLoading
