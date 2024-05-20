<script setup lang="ts">
/**
 * This component is used to show the navigation bar
 * in the application, in this component the user can
 * navigate to the login and signup pages
 *
 * @requires useStoreUser
 * This function is used to access the user store
 * @requires useRouter
 * This function is used to access and navigate to the routes
 * according to the user's actions
 */

//Vue imports

//Vue Router imports
import { useRouter } from 'vue-router'

//Stores imports
import { useStoreUser } from '@/stores/user'

//Models imports

//Views imports
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'

//Services imports

// This instance is used to access the user store
const userStore = useStoreUser()

// This instance is used to access the router
const router = useRouter()

/**
 * This function is used to navigate to the login page
 * when the user clicks on the login button
 */
const goToLogin = () => {
  router.push({ name: 'login' })
}

/**
 * This function is used to navigate to the signup page
 * when the user clicks on the signup button
 */
const goToSignup = () => {
  router.push({ name: 'signup' })
}

/**
 * This function is used to logout the user
 * when the user clicks on the logout button
 */
const logout = () => {
  userStore.logout()
  window.localStorage.removeItem('userData')
  router.push({ name: 'welcome' })
}
</script>
<template>
  <nav class="w-100 py-3 bg-white-100 shadow-md relative z-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-full">
        <!-- This div is used to show the brand name and logo 
        and navigate to the home page when the user clicks on it
        -->
        <router-link to="/">
          <div class="flex items-center brand">
            <h2 class="valley">Valley</h2>
            <h2 class="route">Route</h2>
          </div>
        </router-link>
        <div class="flex items-center gap-3" v-if="!userStore.isAuthenticated">
          <!-- This button is used to navigate to the login page -->
          <PrimaryButton text="Iniciar sesión" outlined @click="goToLogin" />
          <!-- This button is used to navigate to the signup page -->
          <PrimaryButton text="Registrarse" @click="goToSignup" />
        </div>
        <div class="flex items-center gap-3" v-else>
          <!-- This button is used to logout the user -->
          <PrimaryButton text="Cerrar sesión" @click="logout" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.brand {
  h2 {
    /* Set the font family to 'Anton' for brand name */
    font-family: 'Anton', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .valley {
    color: theme('colors.ochre');
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
