import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreUser = defineStore('user', () => {
  const user = ref<{
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

  const fullName = computed(() => `${user.value.firstName} ${user.value.lastName}`)

  const isAuthenticated = computed(() => user.value.token !== '')

  const logout = () => {
    user.value = {
      firstName: '',
      lastName: '',
      token: '',
      email: ''
    }
  }

  return { user, fullName, isAuthenticated, logout }
})
