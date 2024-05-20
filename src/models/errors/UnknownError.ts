/**
 * In this file, we define the errors that can be thrown by the application when there is a problem with the request.
 * These errors are meant to be thrown when there is a problem with the request.
 *
 * This errors are thrown in the api service when the request fails.
 */

/**
 * UnknownError is thrown when there is a problem with the request.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 */
export class UnknownError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UnknownError'
  }
}
