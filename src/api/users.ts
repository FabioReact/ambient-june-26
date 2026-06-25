import { api, ApiError, getErrorStatus } from './api'

type UserParams = {
  email: string
  password: string
}

type UserResponse = {
  accessToken: string
  user: {
    email: string
    id: number
  }
}

export const registerUser = async ({ email, password }: UserParams): Promise<UserResponse> => {
  try {
    const response = await api.post('/register', { email, password })
    return response.data
  } catch (error) {
    if (getErrorStatus(error) === 400) throw new ApiError('User already exists', 400)
    throw error
  }
}

export const loginUser = async ({ email, password }: UserParams): Promise<UserResponse> => {
  const response = await api.post('/login', { email, password })
  return response.data
}
