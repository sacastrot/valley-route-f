/**
 * In this file, we define the errors that can be thrown by the application when there is a problem with the connection to the database.
 * These errors are meant to be thrown when there is a problem with the connection to the database.
 * For example, if the application cannot connect to the database, it should throw a ConnectionError.
 */

/**
 * ConnectionError is thrown when there is a problem with the connection to the database.
 *
 * @constructor
 * @param {string} message
 * The error message to display
 */
export class ConnectionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ConnectionError'
  }
}
