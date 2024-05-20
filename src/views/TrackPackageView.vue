<script setup lang="ts">
/**
 * In this file, you will find the logic for the TrackPackageView component.
 *
 * This component is responsible for tracking a package.
 *
 * @requires ref
 * This function is used to create a reactive reference.
 *
 * @requires packageService
 * This service is used to interact with the API to get the package data.
 *
 */

//Vue imports
import { ref } from 'vue'

//Vue Router imports

//Stores imports

//Models imports
import ErrorAlert from '@/components/alert/ErrorAlert.vue'
import SuccessAlert from '@/components/alert/SuccessAlert.vue'

//Views imports
import PrimaryInput from '@/components/utilities/PrimaryInput.vue'
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'

//Services imports
import { packageService } from '@/services/packages'

// Variable to store if the page is loading
const loadingRequest = ref(false)

// Variable to store the alert message
const messageAlert = ref('')

// Variable to store the success message
const messageSuccess = ref('')

// Variable to store the package guide number to track
const guidenumber = ref('')

// Variable to store the package data, once it is loaded, with the packageService
const packageLoad = ref()

const trackPackage = async () => {
  // Validate if the guidenumber is empty
  if (!guidenumber.value) {
    messageAlert.value = 'Por favor, ingrese un número de guía'
    return
  }

  loadingRequest.value = true

  try {
    // Get the package data from the API, calling the packageService
    packageLoad.value = await packageService.getPackage(guidenumber.value)
  } catch (error) {
    if (error instanceof Error) {
      messageAlert.value = error.message
    } else {
      messageAlert.value = 'Ha ocurrido un error'
    }
  } finally {
    loadingRequest.value = false
  }
}
</script>
<template>
  <div class="container mx-auto pt-5">
    <div class="home mb-3">
      <router-link to="/">
        <i class="bi bi-house-fill"></i>
        Inicio
      </router-link>
    </div>
    <!-- Title of the page -->
    <h2>Consultar ruta</h2>
    <!-- Description of the page -->
    <p class="mb-5">Ingrese el número de guía del paquete, para conocer la ruta que va a seguir</p>
    <div class="input-container">
      <!-- Input for the guide number of the package -->
      <PrimaryInput
        id="guidenumber"
        type="number"
        placeholder="Ingrese el número de guía"
        v-model="guidenumber"
      ></PrimaryInput>
      <!-- Button to track the package -->
      <PrimaryButton text="Consultar" :loading="loadingRequest" @click="trackPackage" />
    </div>
    <div class="track-container mt-5 flex" v-if="packageLoad">
      <!-- Información básica del paquete -->
      <div class="package-card">
        <div class="section">
          <p class="head">Descripción</p>
          <p>{{ packageLoad.description }}</p>
        </div>
        <div class="section">
          <p class="head">Fecha de creación</p>
          <p>{{ packageLoad.created }}</p>
        </div>
        <div class="section">
          <p class="head">Nodo de origen</p>
          <p>{{ packageLoad.startName }}</p>
        </div>
        <div class="section">
          <p class="head">Nodo de destino</p>
          <p>{{ packageLoad.endName }}</p>
        </div>
        <div class="section">
          <p class="head">Distancia</p>
          <p>{{ packageLoad.distanceKm }} km</p>
        </div>
      </div>
      <div class="package-path">
        <!-- Ruta del paquete -->
        <h3>Ruta</h3>
        <ul class="flex flex-column pl-5">
          <div class="item flex gap-2" v-for="node in packageLoad.path" :key="node.id">
            <i class="bi bi-arrow-right"></i>
            <li>{{ node.name }}</li>
          </div>
        </ul>
      </div>
    </div>
    <h2 class="mt-3">Puntos de control</h2>
    <p class="mb-5 mt-1">Estas son las rutas con las que cuenta la empresa</p>
    <img src="/valley_route_graph.png" alt="Checkpoints" />
    <p class="text-base mb-5 mt-1">A partir de Google Earth</p>
  </div>

  <!-- Alert component to show error message -->
  <ErrorAlert
    v-if="messageAlert && messageSuccess === ''"
    :show="messageAlert !== ''"
    :message="messageAlert"
    @close="messageAlert = ''"
  />

  <!-- Alert component to show success message -->
  <SuccessAlert
    v-if="messageSuccess"
    :show="messageSuccess !== ''"
    :message="messageSuccess"
    @close="messageSuccess = ''"
  />
</template>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 50rem;
  gap: 1rem;
}

.track-container {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;

  /* Styles to show the package card */
  .package-card {
    display: flex;
    align-items: start;
    flex-direction: column;
    max-height: 45rem;
    overflow-y: auto;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 50rem;

    .section {
      width: 100%;
      padding: 1rem 0;

      .head {
        font-weight: bold;
      }
    }

    .section:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
  /* Styles to show the package path */
  .package-path {
    width: 100%;
    max-width: 50rem;
    max-height: 45rem;
    overflow-y: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;

    & h3 {
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .item:first-child {
      color: #2f7a2f;
      font-weight: bold;
    }

    .item:last-child {
      color: #9d1c1c;
      font-weight: bold;
    }

    .item {
      align-items: center;
      font-size: 1.8rem;

      & i {
        font-size: 3rem;
      }
    }
  }
}

.home {
  font-size: 1.6rem;
}
</style>
