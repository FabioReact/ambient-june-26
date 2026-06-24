import axios from 'axios'

export class ApiError extends Error {
  status?: number
  code?: string

  constructor(message: string, status?: number, code?: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
  }
}

const defaultMessages: Record<number, string> = {
  400: 'The request is invalid. Please check your information.',
  401: 'Your session has expired. Please sign in again.',
  403: 'You do not have permission to perform this action.',
  404: 'The requested resource was not found.',
  422: 'Some information is invalid. Please check the form.',
}

const getResponseMessage = (data: unknown): string | undefined => {
  if (typeof data !== 'object' || data === null || !('message' in data)) return undefined

  return typeof data.message === 'string' ? data.message : undefined
}

const getDefaultMessage = (status?: number): string => {
  if (!status) return 'Unable to reach the server. Please check your connection.'
  if (status >= 500) return 'The server encountered an error. Please try again later.'

  return defaultMessages[status] ?? 'The request could not be completed.'
}

export const normalizeApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) return error

  if (axios.isAxiosError(error)) {
    const status = error.response?.status
    const responseMessage = getResponseMessage(error.response?.data)
    const message = responseMessage ?? getDefaultMessage(status)

    return new ApiError(message, status, error.code)
  }

  if (error instanceof Error) return new ApiError(error.message)

  return new ApiError('An unexpected error occurred.')
}

export const getErrorMessage = (error: unknown) => normalizeApiError(error).message

export const getErrorStatus = (error: unknown) => normalizeApiError(error).status

let unauthorizedHandler: (() => void) | undefined

export const setUnauthorizedHandler = (handler?: () => void) => {
  unauthorizedHandler = handler
}

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    const normalizedError = normalizeApiError(error)
    if (normalizedError.status === 401) unauthorizedHandler?.()
    return Promise.reject(normalizedError)
  },
)
