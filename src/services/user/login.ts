/**
 * In this file, we define the utility functions for user authentication and data retrieval.
 *
 * @requires baseRequest
 * This is the API service that is used to make requests to the API.
 *
 */

// Axios instance for making requests to the API.
import baseRequest from '@/api/api.service'

// User token model.
import UserToken from '@/models/user/loginModel'
import { useStoreUser } from '@/stores/user'

/**
 * Utility functions for user authentication and data retrieval.
 */
export const autService = {
  login,
  getUser
}

/**
 * Logs in the user using the provided credentials.
 * @param body Form data containing user credentials.
 * @returns A promise that resolves with the user token upon successful login.
 * @throws Error if login fails.
 */
async function login(body: FormData): Promise<UserToken> {
  try {
    const { data } = await baseRequest.post(`/auth/token`, body)

    // Create a new instance of UserToken with the access token and token type.
    const userToken = new UserToken(data.access_token, data.token_type)
    return userToken
  } catch (error) {
    throw new Error('Error al iniciar sesión')
  }
}

/**
 * Retrieves user data from the API and updates the user store.
 * @returns A promise that resolves when user data is successfully retrieved.
 * @throws Error if user data retrieval fails.
 */
async function getUser(): Promise<void> {
  const userStore = useStoreUser()
  const user = userStore.state
  try {
    const { data } = await baseRequest.get('/')
    user.email = data.email
    user.firstName = data.firstName
    user.lastName = data.lastName
  } catch (error) {
    throw new Error('Error al obtener los datos del usuario')
  }
}
