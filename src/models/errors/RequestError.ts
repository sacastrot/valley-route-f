/**
 * In this file, we define the errors that can be thrown by the application when there is a problem with the request.
 * These errors are meant to be thrown when there is a problem with the request.
 *
 * This errors are thrown in the api service when the request fails.
 */

/**
 * RequestError is thrown when there is a problem with the request.
 * This error is meant to be thrown when there is a problem with the request.
 * For example, if the request fails, the application should throw a RequestError.
 * @constructor
 * @param {string} message
 * The error message to display
 */
export class RequestError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RequestError'
  }
}

/**
 * ClientError is thrown when there is a problem with the request.
 * This error is meant to be thrown when there is a problem with the request.
 * For example, if the request fails, the application should throw a RequestError.
 * @constructor
 * @param {string} message
 * The error message to display
 */
export class ClientError extends RequestError {
  constructor(message: string) {
    super(message)
    this.name = 'ClientError'
  }
}

/**
 * ServerError is thrown when there is a problem with the request.
 * This error is meant to be thrown when there is a problem with the request.
 * For example, if the request fails, the application should throw a RequestError.
 * @constructor
 * @param {string} message
 * The error message to display
 */
export class ServerError extends RequestError {
  constructor(message: string) {
    super(message)
    this.name = 'ServerError'
  }
}
