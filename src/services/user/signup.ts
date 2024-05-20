/**
 * In this file we define the signup function that sends a request to the API endpoint for user signup.
 *
 * This function sends a request to the API endpoint for user signup.
 *
 * @requires baseRequest
 * This is the API service that is used to make requests to the API.
 *
 */

// Axios instance for making requests to the API.
import baseRequest from '@/api/api.service'

// Error model for handling bad request errors.
import { BadRequestError } from '@/models/errors'

// User signup model for signup data.
import type SignupUser from '@/models/user/signupModel'

/**
 * Utility function for user signup.
 *
 * This function sends a request to the API endpoint for user signup.
 *
 * @param body - An object containing user signup data.
 * @returns A promise that resolves when the user is successfully signed up.
 * @throws Error if there is an error during the signup process.
 */
export default async function signup(body: SignupUser): Promise<void> {
  try {
    const response = await baseRequest.post(`/auth`, body)

    // If the response status is 200, it indicates a successful signup.
    if (response.status === 200) {
      return
    }
  } catch (error) {
    console.log('Error:', error)

    // If the error is of type BadRequestError, handle specific error cases.
    if (error instanceof BadRequestError) {
      console.log('Error:', error)

      // If the error message indicates that the email is already registered, throw an error.
      if (error.message.includes('already')) {
        throw new Error('El correo electrónico ya ha sido registrado')
      }
    } else {
      // If the error is not a BadRequestError, throw a general error message.
      throw new Error('Error al crear la cuenta')
    }
  }
}
