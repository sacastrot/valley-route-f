var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { g as baseRequest, u as useStoreUser } from "./index-DxEj1PVZ.js";
class UserToken {
  /**
   * Creates a new instance of UserToken.
   *
   * @param {string} access_token - The access token.
   * @param {string} token_type - The type of the token.
   */
  constructor(access_token, token_type) {
    __publicField(this, "access_token");
    __publicField(this, "token_type");
    this.access_token = access_token;
    this.token_type = token_type;
  }
  /**
   * Gets the access token.
   *
   * @returns {string} The access token.
   */
  get token() {
    return this.access_token;
  }
  /**
   * Gets the type of the token.
   *
   * @returns {string} The token type.
   */
  get type() {
    return this.token_type;
  }
  /**
   * Gets the user's email from the token's payload.
   *
   * @returns {string} The user's email.
   * @throws {Error} If the payload does not contain a valid email.
   */
  get email() {
    const payload = this.access_token.split(".")[1];
    const decodedPayload = atob(payload);
    const email = JSON.parse(decodedPayload).email;
    if (!email) {
      throw new Error("The payload does not contain a valid email.");
    }
    return email;
  }
}
const autService = {
  login,
  getUser
};
async function login(body) {
  try {
    const { data } = await baseRequest.post(`/auth/token`, body);
    const userToken = new UserToken(data.access_token, data.token_type);
    return userToken;
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
}
async function getUser() {
  const userStore = useStoreUser();
  const user = userStore.state;
  try {
    const { data } = await baseRequest.get("/");
    user.email = data.email;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
  } catch (error) {
    throw new Error("Error al obtener los datos del usuario");
  }
}
export {
  autService as a
};
//# sourceMappingURL=login-BKUyY4fl.js.map
