import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthContext } from '@/context/auth-context'
import { useAppSelector } from '@/redux/app/hooks'
import { NavLink, type NavLinkRenderProps } from 'react-router'

const getActiveClassNames = ({ isActive }: NavLinkRenderProps) => {
  let classnames = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
  if (isActive) classnames += 'bg-primary  shadow-sm'
  else classnames += 'text-muted-foreground hover:bg-muted hover:text-foreground'
  return classnames
}

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

const links = [
  { to: '/', label: 'Home', visibility: LinkVisibility.PUBLIC },
  { to: '/battle', label: 'Battle', visibility: LinkVisibility.PUBLIC },
  { to: '/heroes', label: 'Heroes', visibility: LinkVisibility.PUBLIC },
  { to: '/search', label: 'Search', visibility: LinkVisibility.PUBLIC },
  { to: '/squad', label: 'Squad', visibility: LinkVisibility.PUBLIC },
  { to: '/profile', label: 'Profile', visibility: LinkVisibility.PRIVATE },
  { to: '/logout', label: 'Logout', visibility: LinkVisibility.PRIVATE },
  {
    to: '/register',
    label: 'Register',
    visibility: LinkVisibility.NOT_AUTHENTICATED,
  },
  {
    to: '/login',
    label: 'Login',
    visibility: LinkVisibility.NOT_AUTHENTICATED,
  },
]

const Navigation = () => {
  // const { connected } = useAuthContext()
  const connected = useAppSelector((state) => state.auth.connected)
  return (
    <header className='sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur-xl'>
      <nav className='mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <NavLink to='/' className='flex shrink-0 items-center gap-2 font-semibold tracking-tight'>
          <span className='grid size-8 place-items-center rounded-lg bg-primary text-sm font-black text-primary-foreground'>
            H
          </span>
          <span>Hero Nexus</span>
        </NavLink>
        <div className='flex flex-wrap justify-end gap-1'>
          {links
            .filter((link) => {
              if (link.visibility === LinkVisibility.PUBLIC) return true
              if (link.visibility === LinkVisibility.PRIVATE && connected) return true
              if (link.visibility === LinkVisibility.NOT_AUTHENTICATED && !connected) return true
            })
            .map((link) => (
              <NavLink to={link.to} className={getActiveClassNames}>
                {link.label}
              </NavLink>
            ))}
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
        </div>
      </nav>
    </header>
  )
}

export default Navigation
