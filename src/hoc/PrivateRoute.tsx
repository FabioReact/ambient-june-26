import { useAuthContext } from '@/context/auth-context'
import { Navigate, Outlet, useLocation } from 'react-router'

const PrivateRoute = () => {
  const { connected } = useAuthContext()
  const location = useLocation()

  if (!connected) return <Navigate to='/login' state={{ from: location.pathname }} replace />

  return <Outlet />
}

export default PrivateRoute
