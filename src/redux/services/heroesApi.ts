// Need to use the React-specific entry point to allow generating React hooks
import type { Hero } from '@/types/hero'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/heroes' }),
  endpoints: (build) => ({
    getHeroesByName: build.query<Hero[], string>({
      query: (name) => `?name_like=${name}`,
    }),
    getHeroesByFirstLetter: build.query<Hero[], string>({
      query: (letter) => `?name_like=^${letter}`,
    }),
    getHeroById: build.query<Hero, string>({
      query: (id) => `/${id}`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetHeroesByNameQuery, useGetHeroesByFirstLetterQuery, useGetHeroByIdQuery } = heroesApi
