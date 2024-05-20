/**
 * Represents a user signing up with their details.
 */
export default class SignupUser {
  private email: string
  private password: string
  private firstName: string
  private lastName: string = ''

  /**
   * Creates a new instance of SignupUser.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   */
  constructor(email: string, password: string, firstName: string, lastName: string) {
    this.email = email
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
  }

  /**
   * Gets the user details as an object.
   *
   * @returns {Object} The user details.
   */
  get body() {
    return {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }
  }
}
