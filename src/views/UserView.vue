<script setup lang="ts">
/**
 * In this file, you will find the logic for the UserView component.
 *
 * This component is responsible for showing the user home.
 *
 * @requires onBeforeMount
 * This Hook is used to call the getUser function before the component is mounted.
 *
 * @requires ref
 * This function is used to create a reactive reference.
 *
 * @requires useRouter
 * This function is used to get the router instance,
 * to navigate to the welcome page if the user is not logged in.
 *
 * @requires useStoreUser
 * This function is used to get the user store.
 *
 * @requires autService
 * This service is used to interact with the API to get the user data.
 */

//Vue imports
import { onBeforeMount, ref } from 'vue'

//Vue Router imports
import { useRouter } from 'vue-router'

//Stores imports
import { useStoreUser } from '@/stores/user'

//Models imports

//Views imports
import ServiceCard from '@/components/utilities/ServiceCard.vue'

//Services imports
import { autService } from '@/services/user/login'

// Variable to store if the page is loading
const userStore = useStoreUser()

// Variable to store if the page is loading
const loadingView = ref(true)

// Variable to instance the router
const router = useRouter()

/**
 * Function to get the user data, if the user is not logged in, it will redirect to the welcome page
 *
 * This function calls the service to get the user data
 * and if the user is not logged in, it will redirect to the welcome page
 *
 */
onBeforeMount(async () => {
  try {
    await autService.getUser()
  } catch (error) {
    // If the user is not logged in, it will redirect to the welcome page
    window.localStorage.removeItem('userData')
    router.push({ name: 'welcome' })
  } finally {
    loadingView.value = false
  }
})
</script>
<template>
  <main class="container mx-auto pt-5">
    <div v-if="!loadingView">
      <div class="home mb-3">
        <!-- Link to redirect to the home page -->
        <router-link to="/">
          <i class="bi bi-house-fill"></i>
          Inicio
        </router-link>
      </div>
      <div class="header">
        <!-- Title of the page -->
        <h1 class="font-bold">Hola, {{ userStore.state.firstName }}</h1>
      </div>
      <div class="spacer h-[5rem]"></div>
      <!-- Services section -->
      <h2 class="mb-5">Servicios</h2>
      <div class="content flex flex-wrap items-center justify-start gap-20">
        <!-- Service for the user to see the packages -->
        <ServiceCard
          title="Paquetes"
          icon="bi-box2"
          description="Visualiza todos tus paquetes"
          route="packages"
        ></ServiceCard>
        <!-- Service for the user to create a new package -->
        <ServiceCard
          title="Nuevo Paquete"
          icon="bi-person"
          description="Crea un nuevo paquete"
          route="new-package"
        ></ServiceCard>
        <!-- Service for the user to see the statistics -->
        <ServiceCard
          title="Rastrear Paquete"
          icon="bi-person"
          description="Mira la ruta de tu paquete"
          route="track-package"
        ></ServiceCard>
      </div>
    </div>
    <!-- Section to show the loading message -->
    <div v-else>Cargando...</div>
  </main>
</template>

<style scoped>
.home {
  font-size: 1.6rem;
}
</style>
