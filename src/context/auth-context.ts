/* Créer un nouveau context contenant les information suivantes
  - une boolean connected
  - l'id de l'utilisateur
  - email de l'utilisateur
  - accessToken
  - une fonction qui permet de connecter l'utilisateur: loginUserContext
  - une fonction qui permet déconnecter l'utilisateur: logoutUserContext

Créer un page Profile ou je peux voir les informations de l'utilisateur
*/

import { createContext, useContext } from 'react'

type AuthContextType = {
  connected: boolean
  id: number | undefined
  email: string | undefined
  accessToken: string | undefined
  loginUserContext: ({
    id,
    email,
    accessToken,
  }: {
    id: number
    email: string
    accessToken: string
  }) => void
  logoutUserContext: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext
