/**
 * Represents a user token with its associated type.
 */
export default class UserToken {
  private access_token: string
  private token_type: string

  /**
   * Creates a new instance of UserToken.
   *
   * @param {string} access_token - The access token.
   * @param {string} token_type - The type of the token.
   */
  constructor(access_token: string, token_type: string) {
    this.access_token = access_token
    this.token_type = token_type
  }

  /**
   * Gets the access token.
   *
   * @returns {string} The access token.
   */
  get token(): string {
    return this.access_token
  }

  /**
   * Gets the type of the token.
   *
   * @returns {string} The token type.
   */
  get type(): string {
    return this.token_type
  }

  /**
   * Gets the user's email from the token's payload.
   *
   * @returns {string} The user's email.
   * @throws {Error} If the payload does not contain a valid email.
   */
  get email(): string {
    const payload = this.access_token.split('.')[1]
    const decodedPayload = atob(payload)
    const email = JSON.parse(decodedPayload).email
    if (!email) {
      throw new Error('The payload does not contain a valid email.')
    }
    return email
  }
}
