import { ServerError } from './RequestError'

export class InternalServerError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'InternalServerError'
  }
}

export class BadGatewayError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'BadGatewayError'
  }
}

export class ServiceUnavailableError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'ServiceUnavailableError'
  }
}

export class GatewayTimeoutError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'GatewayTimeoutError'
  }
}

export class ExpiredTokenError extends ServerError {
  constructor(message: string) {
    super(message)
    this.name = 'ExpiredTokenError'
  }
}
