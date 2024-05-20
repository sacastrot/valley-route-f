/**
 * In this file, we define the server errors that can be thrown by the application.
 * These errors are meant to be thrown when there is a problem with the server.
 *
 * The errors are defined as classes that extend the ServerError class.
 *
 */
import { ServerError } from './RequestError'

/**
 * InternalServerError is thrown when there is a problem with the server.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class InternalServerError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'InternalServerError'
  }
}

/**
 * BadGatewayError is thrown when there is a problem with the server.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */

/**
 * ExpiredTokenError is thrown when the token has expired.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class ExpiredTokenError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'ExpiredTokenError'
  }
}
