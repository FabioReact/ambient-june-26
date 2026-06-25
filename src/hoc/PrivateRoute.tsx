import { useAppSelector } from '@/redux/app/hooks'
import { Navigate, Outlet, useLocation } from 'react-router'

const PrivateRoute = () => {
  const connected = useAppSelector((state) => state.auth.connected)
  const location = useLocation()

  if (!connected) return <Navigate to='/login' state={{ from: location.pathname }} replace />

  return <Outlet />
}

export default PrivateRoute
