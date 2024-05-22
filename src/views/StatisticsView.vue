<script setup lang="ts">
/**
 * In this file, you will find the logic for the StatisticsView component.
 *
 * This component is responsible for showing the statistics of the nodes.
 *
 * @requires statisticsService
 * This service is used to interact with the API to get the statistics of the nodes.
 *
 * @requires onBeforeMount
 * This Hook is used to call the getStatistics function before the component is mounted.
 *
 * @requires ref
 * This function is used to create a reactive reference.
 *
 * @requires getStatistics
 * This function is used to get the statistics of the nodes.
 *
 * @requires nodeStartStatistic
 * This variable is used to store the image of the statistics of the nodes at the start.
 *
 * @requires nodeEndStatistic
 * This variable is used to store the image of the statistics of the nodes at the end.
 */

//Vue imports
import { onBeforeMount, ref } from 'vue'

//Vue Router imports

//Stores imports

//Models imports

//Views imports

//Services imports
import { statisticsService } from '@/services/statistics'

// Variable to store the image of the statistics of the start node in base64
const nodeStartStatistic = ref('')

// Variable to store the image of the statistics of the end node in base64
const nodeEndStatistic = ref('')

// Variable to store if the page is loading
const loadingStatistics = ref(true)

/**
 * Function to get the statistics of the nodes
 *
 * This function calls the service to get the statistics of the nodes
 * and stores the images in the variables nodeStartStatistic and nodeEndStatistic
 *
 * @returns void
 */
const getStatistics = async () => {
  // Init the loading state to true of the page
  loadingStatistics.value = true
  try {
    // Call the service to get the statistics of the nodes
    const imageNodeStartUrl = await statisticsService.getNodeStartStatistics()
    nodeStartStatistic.value = `data:image/png;base64,${imageNodeStartUrl}`

    // Call the service to get the statistics of the nodes
    const imageNodeEndUrl = await statisticsService.getNodeEndStatistics()
    nodeEndStatistic.value = `data:image/png;base64,${imageNodeEndUrl}`
  } catch (error) {
    console.error(error)
  } finally {
    // Set the loading state to false
    loadingStatistics.value = false
  }
}

/**
 * Hook to call the getStatistics function before the component is mounted
 */
onBeforeMount(async () => {
  await getStatistics()
})
</script>
<template>
  <main class="container mx-auto pt-5">
    <div v-if="!loadingStatistics">
      <div class="home mb-3">
        <!-- Link to redirect to the home page -->
        <router-link to="/">
          <i class="bi bi-house-fill"></i>
          Inicio
        </router-link>
      </div>
      <!-- Title of the page -->
      <h1>Estadísticas</h1>
      <!-- Description of the page -->
      <p>
        En esta página puedes ver estadísticas del número de paquetes que salen y entran para cada
        uno de los nodos
      </p>
      <!-- Images of the statistics of the nodes -->
      <div class="flex flex-wrap gap-5 my-5 statistics">
        <img :src="nodeStartStatistic" alt="" />
        <img :src="nodeEndStatistic" alt="" />
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </main>
</template>

<style scoped>
.statistics img {
  width: 100%;
  aspect-ratio: attr(width) / attr(height);
}

.home {
  font-size: 1.6rem;
}
</style>
