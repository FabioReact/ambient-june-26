import { NavLink, Outlet, type NavLinkRenderProps } from 'react-router'

const getActiveClassNames = ({ isActive }: NavLinkRenderProps) => {
  let classnames = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
  if (isActive) classnames += 'bg-primary  shadow-sm'
  else classnames += 'text-muted-foreground hover:bg-muted hover:text-foreground'
  return classnames
}

const MainLayout = () => {
  return (
    <>
      <header className='sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur-xl'>
        <nav className='mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
          <NavLink
            className={(state) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${getActiveClassNames(state)}`
            }
            to='/'
          >
            Home
          </NavLink>
          <NavLink className={getActiveClassNames} to='/heroes'>
            Heroes
          </NavLink>
          <NavLink className={getActiveClassNames} to='/learning/useState'>
            useState
          </NavLink>
          <NavLink className={getActiveClassNames} to='/learning/useEffect'>
            useEffect
          </NavLink>
          <NavLink className={getActiveClassNames} to='/learning/useRef'>
            useRef
          </NavLink>
          <NavLink className={getActiveClassNames} to='/login'>
            Login
          </NavLink>
          <NavLink className={getActiveClassNames} to='/register'>
            Register
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>Created with React - 2026</footer>
    </>
  )
}

export default MainLayout
