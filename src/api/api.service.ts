import {
  BadRequestError,
  ForbbidenError,
  NotFoundError,
  UnauthorizedError
} from '@/models/errors/ClientError'
import { ExpiredTokenError } from '@/models/errors/ServerError'
import { UnknownError } from '@/models/errors/UnknownError'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_URL
const baseRequest = axios.create({
  baseURL: BASE_URL
})

baseRequest.interceptors.request.use(
  (config) => {
    let token
    const userData = window.localStorage.getItem('userData')
    if (userData) {
      const userSession = JSON.parse(atob(userData))
      token = userSession.token
    }
    if (token) {
      console.log('Token:', token)
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log('Request error:', error)
    return Promise.reject(error)
  }
)

baseRequest.interceptors.response.use(
  (response) => {
    console.log('Response:', response)
    return response.data
  },
  (error) => {
    if (error.response.status === 404) {
      throw new NotFoundError(error.response.data.detail)
    } else if (error.response.status === 401) {
      throw new UnauthorizedError(error.response.data.detail)
    } else if (error.response.status === 403) {
      throw new ForbbidenError(error.response.data.detail)
    } else if (error.response.status === 400) {
      throw new BadRequestError(error.response.data.detail)
    } else if (error.response.status === 500) {
      if (error.response.data.detail.includes('JWT expired')) {
        throw new ExpiredTokenError(error.response.data.detail)
      }
    } else {
      throw new UnknownError(error.response.data.detail)
    }
  }
)

//TODO: Add interceptor for handling 401 errors and JWT token refresh
export default baseRequest
