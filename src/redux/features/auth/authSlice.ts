import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface AuthState {
  connected: boolean
  id: number | undefined
  email: string | undefined
  accessToken: string | undefined
}

// Define the initial state using that type
const initialState: AuthState = {
  connected: false,
  email: undefined,
  id: undefined,
  accessToken: undefined,
}

type UserPayload = {
  id: number
  email: string
  accessToken: string
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loginUserRedux: (state, action: PayloadAction<UserPayload>) => {
      // immerJS
      state.id = action.payload.id
      state.email = action.payload.email
      state.accessToken = action.payload.accessToken
      state.connected = true
    },
    logoutUserRedux: (state) => {
      state.id = undefined
      state.email = undefined
      state.accessToken = undefined
      state.connected = false
    },

  },
})

export const { loginUserRedux, logoutUserRedux } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer
