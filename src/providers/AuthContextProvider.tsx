import AuthContext from '@/context/auth-context'
import { useState, type PropsWithChildren } from 'react'

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [connected, setConnected] = useState(false)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [id, setId] = useState<number | undefined>(undefined)
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)

  const loginUserContext = ({
    accessToken,
    email,
    id,
  }: {
    id: number
    email: string
    accessToken: string
  }) => {
    setConnected(true)
    setEmail(email)
    setId(id)
    setAccessToken(accessToken)
  }

  const logoutUserContext = () => {
    setConnected(false)
    setEmail(undefined)
    setId(undefined)
    setAccessToken(undefined)
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        connected,
        email,
        id,
        loginUserContext,
        logoutUserContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
