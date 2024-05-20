/**
 * In this file, we define the store for managing user state.
 *
 * @requires ref
 * This is used to create a reactive reference for user data.
 *
 * @requires computed
 * This is used to create computed properties for the user store.
 *
 * @requires defineStore
 * This is used to define the user store with Pinia.
 *
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Pinia store for managing user state.
 */
export const useStoreUser = defineStore('user-store', () => {
  /**
   * Reactive reference for user data.
   */
  const state = ref<{
    firstName: string
    lastName: string
    token: string
    email: string
  }>({
    firstName: '',
    lastName: '',
    token: '',
    email: ''
  })

  /**
   * Computed property for the full name of the user.
   */
  const fullName = computed(() => `${state.value.firstName} ${state.value.lastName}`)

  /**
   * Computed property to check if the user is authenticated.
   */
  const isAuthenticated = computed(() => state.value.token !== '')

  /**
   * Function to log out the user by resetting user data.
   */
  const logout = () => {
    state.value = {
      firstName: '',
      lastName: '',
      token: '',
      email: ''
    }
  }

  return { state, fullName, isAuthenticated, logout }
})
