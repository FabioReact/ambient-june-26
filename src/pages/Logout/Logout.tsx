import { useAuthContext } from '@/context/auth-context'
import { useLayoutEffect } from 'react'
import { Navigate } from 'react-router'

const Logout = () => {
  const { logoutUserContext } = useAuthContext()

  useLayoutEffect(() => {
    logoutUserContext()
  }, [])

  return <Navigate to='/login' replace />
}

export default Logout
