// Si je suis en train de charger, j'affiche Loading
// Si j'ai terminé de charger, alors j'affiche le contenu du composant

type IsLoadingProps = {
  loading: boolean
}

const IsLoading = ({ loading }: IsLoadingProps) => {
  if (loading) return <div>Loading...</div>

  return <p>It works</p>
}

export default IsLoading
