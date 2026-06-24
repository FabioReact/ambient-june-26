import { render, screen } from '@testing-library/react'
import IsLoading from './IsLoading'
import '@testing-library/jest-dom'

// getBy - doit exister lors rendu - throw si pas de résultat
// findBy
// queryBy - doit exister lors rendu - retourne null si pas de résultat

// getAllBy
// findAllBy
// queryAllBy

describe('IsLoading component', () => {
  it('should return a spinner when loading is true', () => {
    render(<IsLoading loading={true}>Hello</IsLoading>)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('should not return Hello when loading is true', () => {
    render(<IsLoading loading={true}>Hello</IsLoading>)
    expect(screen.queryByText('Hello')).toBeNull()
  })

  it('should not return a spinner when loading is false', () => {
    render(<IsLoading loading={false}>Hello</IsLoading>)
    const spinner = screen.queryByRole('status')
    expect(spinner).toBeNull()
  })

  it('should return Hello when loading is false', () => {
    render(<IsLoading loading={false}>Hello</IsLoading>)
    const hello = screen.getByText('Hello')
    expect(hello).toBeInTheDocument()
  })
})
