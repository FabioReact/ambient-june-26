import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import battleHistoryReducer from './features/battle-history/battleHistorySlice'
import { heroesApi } from './services/heroesApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    battleHistory: battleHistoryReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heroesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
