/**
 * In this file, we define the utility function to reset the user password.
 *
 * This function sends a request to the API endpoint for resetting the user password.
 *
 * @requires baseRequest
 * This is the API service that is used to make requests to the API.
 */

// Axios instance for making requests to the API.
import baseRequest from '@/api/api.service'

/**
 * Utility function to reset user password.
 *
 * This function sends a request to the API endpoint for resetting the user password.
 *
 * @param body - An object containing user email and new password.
 * @param body.email - Email address of the user.
 * @param body.new_password - New password to be set.
 * @returns A promise that resolves when the password is successfully reset.
 * @throws Error if there is an error resetting the password.
 */
export default async function resetPassword(body: {
  email: string
  new_password: string
}): Promise<void> {
  try {
    const response = await baseRequest.post(`/auth/reset-password`, body)

    // If the response status is 200, it indicates a successful password reset.
    if (response.status === 200) {
      return
    }
  } catch (error) {
    // If an error occurs during password reset, throw an error with a message.
    throw new Error('Error al restablecer la contraseña, verifica el correo electrónico')
  }
}
