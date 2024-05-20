<script setup lang="ts">
//Vue imports
import { onBeforeMount, ref } from 'vue'

//Vue Router imports

//Stores imports

//Models imports
import Package from '@/models/package'
import PackageCard from '@/components/packages/PackageCard.vue'
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'

//Views imports

//Services imports
import { packageService } from '@/services/packages'

// Variable to store the current page
const page = ref(1)

// Variable to store the total pages
const totalPages = ref(0)

// Variable to store the packages, after they are loaded
const packages = ref<Package[]>([])

// Variable to store if the page is loading
const loading = ref(true)

/**
 * Function to get the packages
 *
 * This function calls the service to get the packages
 * and stores the packages in the variable packages
 * and the total pages in the variable totalPages
 *
 * @returns void
 */
const getPackages = async () => {
  loading.value = true
  try {
    // Call the service to get the packages
    const reponse = await packageService.getPackageList(page.value)
    packages.value = reponse.list
    totalPages.value = reponse.pages
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

/**
 * Function to go to the previous page
 *
 * This function decreases the page variable by one
 * and calls the getPackages function
 */
const lessPage = () => {
  if (page.value > 1) {
    page.value--
    getPackages()
  }
}

/**
 * Function to go to the next page
 *
 * This function increases the page variable by one
 * and calls the getPackages function
 */
const addPage = () => {
  if (page.value < totalPages.value) {
    page.value++
    getPackages()
  }
}

/**
 * Function to get the packages
 *
 * This function calls the service to get the packages
 * and stores the packages in the variable packages
 * and the total pages in the variable totalPages
 */
onBeforeMount(async () => {
  await getPackages()
})
</script>
<template>
  <div class="container mx-auto pt-5">
    <div class="home mb-3">
      <!-- Link to redirect to the home page -->
      <router-link to="/">
        <i class="bi bi-house-fill"></i>
        Inicio
      </router-link>
    </div>
    <!-- Title of the page -->
    <h1>Tus paquetes</h1>
    <div class="packages flex flex-wrap gap-5 my-5" v-if="!loading">
      <!-- Component to show the package -->
      <PackageCard
        v-for="pkg in packages"
        :key="pkg.id"
        :id="pkg.id"
        :description="pkg.description"
        :createdAt="pkg.created"
        :startNodeName="pkg.startNodeName"
        :endNodeName="pkg.endNodeName"
      />
      <!-- Message to show if the user does not have packages -->
      <p v-if="packages.length === 0">Aun no tienes ningún paquete</p>
    </div>

    <!-- Section to show the loading message -->
    <div v-else>
      <p>Cargando...</p>
    </div>
    <div class="pages flex my-5 gap-5 flex-wrap">
      <!-- Button to go to the previous page -->
      <PrimaryButton @click="lessPage" text="Anterior" />

      <!-- Button to go to the next page -->
      <PrimaryButton @click="addPage" text="Siguiente" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
}
.home {
  font-size: 1.6rem;
}
</style>
