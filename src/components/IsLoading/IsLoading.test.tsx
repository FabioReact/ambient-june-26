import { render, screen } from '@testing-library/react'
import IsLoading from './IsLoading'

// getBy - doit exister lors rendu - throw si pas de résultat
// findBy
// queryBy - doit exister lors rendu - retourne null si pas de résultat

// getAllBy
// findAllBy
// queryAllBy

describe('IsLoading component', () => {
  it('should return Loading... when loading is true', () => {
    render(<IsLoading loading={true} />)
    screen.debug()
    expect(screen.getByText('Loading...'))
  })

  it('should not return Loading... when loading is false', () => {
    render(<IsLoading loading={false} />)
    const loadingText = screen.queryByText('Loading...')

    expect(loadingText).toBeNull()
  })
})
