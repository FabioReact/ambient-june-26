// Si je clique sur l'etoile, elle devient selectionnée et prend la couleur gold
// Si je clique une deuxieme fois, elle reprend son etat initial
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Star from './Star'

describe('Star Component', () => {
  it('should not be selected initialy', () => {
    render(<Star />)
    const star = screen.getByRole('checkbox')

    expect(star).not.toBeChecked()
    expect(star).toHaveAttribute('fill', 'white')
  })

  it('should not be selected initialy', async () => {
    render(<Star />)
    const star = screen.getByRole('checkbox')
    await userEvent.click(star)

    expect(star).toBeChecked()
    expect(star).toHaveAttribute('fill', 'gold')
  })
})
