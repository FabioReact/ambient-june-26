import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import battleHistoryReducer from './features/battle-history/battleHistorySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    battleHistory: battleHistoryReducer,
  },
})

/*
  const store = {
    auth: null
  }
*/

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
