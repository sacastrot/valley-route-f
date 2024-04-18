export class RequestError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RequestError'
  }
}

export class ClientError extends RequestError {
  constructor(message: string) {
    super(message)
    this.name = 'ClientError'
  }
}

export class ServerError extends RequestError {
  constructor(message: string) {
    super(message)
    this.name = 'ServerError'
  }
}
