import { Star as LucideStar } from 'lucide-react'
import { useState } from 'react'

const Star = () => {
  const [selected, setSelected] = useState(false)
  return (
    <LucideStar
      role='checkbox'
      aria-checked={selected}
      fill={selected ? 'gold' : 'white'}
      onClick={() => setSelected((b) => !b)}
    />
  )
}

export default Star
