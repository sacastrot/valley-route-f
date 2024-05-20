/**
 * This service is used to make HTTP requests to the API with a personalized
 * Axios instance. It has the base URL for the API and the request and response
 * interceptors. The request interceptor is used to add the token to the
 * Authorization header of the request. The response interceptor is used to
 * handle the response of the request. If the response status is 404, 401, 403
 * or 400, it throws the corresponding error. If the response status is different,
 * it throws an UnknownError.
 *
 * API service
 * @module api/api.service
 * Framework Vuejs
 * @requires Vue
 * Hook Function for Navigation Guards
 * @requires VueRouter
 * Store for User Data
 * @requires stores/user
 * Models for Client Errors
 * @requires models/errors/ClientError
 * Model for Unknown Errors
 * @requires models/errors/UnknownError
 * Axios for HTTP Requests
 * @requires axios
 * Base URL for API from .env file
 * @requires import.meta.env.VITE_API_URL
 * Client Error for Bad Request code 400
 * @requires BadRequestError
 * Hook for User Store
 * @requires useStoreUser
 * Client Error for Forbidden code 403
 * @requires ForbbidenError
 * Client Error for Not Found code 404
 * @requires NotFoundError
 * Client Error for Unauthorized code 401
 * @requires UnauthorizedError
 * Unknown Error for other codes
 * @requires UnknownError
 *
 * @description
 * This service is used to make HTTP requests to the API.
 * @returns {Object}
 * Return the baseRequest object with the request and response interceptors.
 * @throws {Error}
 * Return a ClientError or UnknownError if the response status is different
 * from 404, 401, 403 or 400.
 */

//Vue imports

//Vue Router imports

//Stores imports
import { useStoreUser } from '@/stores/user'

//Models imports
import {
  BadRequestError,
  ForbbidenError,
  NotFoundError,
  UnauthorizedError
} from '@/models/errors/ClientError'
import { UnknownError } from '@/models/errors/UnknownError'

//Views imports

//Services imports

import axios from 'axios'

// Base URL for API
const BASE_URL = import.meta.env.VITE_API_URL

// Axios instance
const baseRequest = axios.create({
  baseURL: BASE_URL
})

// Hook for User Store

/**
 * This function is used to logout the user and remove the user data
 * from the local storage.
 *
 * @returns {void}
 */
const logout = (): void => {
  const userStore = useStoreUser()
  userStore.logout()
  window.localStorage.removeItem('userData')
  location.reload()
}

/**
 * This function is used to add the token to the Authorization header
 * of the request. If the token exists, it is added to the header.
 *
 * @param {Object} config
 * The request configuration
 * @returns {Object}
 * The request configuration with the token in the header
 * @throws {Error}
 */
baseRequest.interceptors.request.use(
  (config) => {
    let token
    // Get the user data from the local storage
    const userData = window.localStorage.getItem('userData')

    // If the user data exists, get the token
    if (userData) {
      const userSession = JSON.parse(atob(userData))
      token = userSession.token
    }
    if (token) {
      // Add the token to the Authorization header
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * This function is used to handle the response of the request.
 * If the response status is 404, 401, 403 or 400, it throws the
 * corresponding error. If the response status is different, it
 * throws an UnknownError.
 *
 * @param {Object} response
 * The response of the request
 * @returns {Object}
 * The response of the request
 * @throws {Error}
 * Return a ClientError or UnknownError if the response status is different
 */
baseRequest.interceptors.response.use(
  (response) => {
    console.log('Response:', response)
    return response
  },
  (error) => {
    if (error.response.status === 404) {
      throw new NotFoundError(error.response.data.detail)
    } else if (error.response.status === 401) {
      if (error.response.data.detail === 'Not authenticated') {
        logout()
      }
      throw new UnauthorizedError(error.response.data.detail)
    } else if (error.response.status === 403) {
      throw new ForbbidenError(error.response.data.detail)
    } else if (error.response.status === 400) {
      throw new BadRequestError(error.response.data.detail)
    } else {
      throw new UnknownError(error.response.data.detail)
    }
  }
)

export default baseRequest
