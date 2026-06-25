import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ToastContainer } from 'react-toastify'
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
          <NavLink to='/' className='flex shrink-0 items-center gap-2 font-semibold tracking-tight'>
            <span className='grid size-8 place-items-center rounded-lg bg-primary text-sm font-black text-primary-foreground'>
              H
            </span>
            <span>Hero Nexus</span>
          </NavLink>
          <div className='flex flex-wrap justify-end gap-1'>
            <NavLink className={getActiveClassNames} to='/heroes'>
              Heroes
            </NavLink>
            <NavLink className={getActiveClassNames} to='/squad'>
              Squad
            </NavLink>
            <NavLink className={getActiveClassNames} to='/battle'>
              Battle
            </NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant='ghost' className='cursor-pointer'>
                    Learning
                  </Button>
                }
              />
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <NavLink to='/learning/useState'>useState</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to='/learning/useEffect'>useEffect</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to='/learning/useRef'>useRef</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink className={getActiveClassNames} to='/profile'>
              Profile
            </NavLink>
            <NavLink className={getActiveClassNames} to='/login'>
              Login
            </NavLink>
            <NavLink className={getActiveClassNames} to='/register'>
              Register
            </NavLink>
          </div>
        </nav>
      </header>
      <main className='mx-auto min-h-[calc(100vh-4.5rem)] w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <ToastContainer />
        <Outlet />
      </main>
      <footer>Created with React - 2026</footer>
    </>
  )
}

export default MainLayout
