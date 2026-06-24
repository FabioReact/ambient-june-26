import { api, ApiError, getErrorStatus } from './api'

type RegisterUserParams = {
  email: string
  password: string
}

type UserResponse = {
  accessToken: string
  user: {
    email: string
  }
}

export const registerUser = async ({
  email,
  password,
}: RegisterUserParams): Promise<UserResponse> => {
  try {
    const response = await api.post('/register', { email, password })
    return response.data
  } catch (error) {
    if (getErrorStatus(error) === 400) throw new ApiError('User already exists', 400)
    throw error
  }
}
