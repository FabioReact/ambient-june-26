import { useAppDispatch } from '@/redux/app/hooks'
import { logoutUserRedux } from '@/redux/features/auth/authSlice'
import { useLayoutEffect } from 'react'
import { Navigate } from 'react-router'

const Logout = () => {
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    dispatch(logoutUserRedux()) // dispatch({ type: "logoutUserRedux", payload: undefined })
  }, [])

  return <Navigate to='/login' replace />
}

export default Logout
