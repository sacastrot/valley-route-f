/**
 * In this file, we define the client errors that can be thrown by the application.
 * These errors are meant to be thrown when the client has made a mistake in the request.
 * For example, if the client sends a request with a missing parameter, the application should throw a BadRequestError.
 *
 * The errors are defined as classes that extend the ClientError class.
 */
import { ClientError } from './RequestError'

/**
 * BadRequestError is thrown when the client sends a request with invalid parameters.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class BadRequestError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'BadRequestError'
  }
}

/**
 * UnauthorizedError is thrown when the client sends a request without proper authentication.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class UnauthorizedError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

/**
 * PaymentRequiredError is thrown when the client sends a request that requires payment.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class ForbbidenError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'ForbbidenError'
  }
}

/**
 * NotFoundError is thrown when the client sends a request to a resource that does not exist.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class NotFoundError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundError'
  }
}

/**
 * MethodNotAllowedError is thrown when the client sends a request with an invalid HTTP method.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class MethodNotAllowedError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'MethodNotAllowedError'
  }
}

/**
 * NotAcceptableError is thrown when the client sends a request with an invalid Accept header.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 *
 */
export class TooManyRequestsError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'TooManyRequestsError'
  }
}
