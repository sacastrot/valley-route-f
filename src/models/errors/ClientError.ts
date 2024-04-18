import { ClientError } from './RequestError'

export class BadRequestError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'BadRequestError'
  }
}

export class UnauthorizedError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

export class ForbbidenError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'ForbbidenError'
  }
}

export class NotFoundError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class MethodNotAllowedError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'MethodNotAllowedError'
  }
}

export class TooManyRequestsError extends ClientError {
  constructor(message: string) {
    super(message)
    this.name = 'TooManyRequestsError'
  }
}
