<script setup lang="ts">
/**
 * In this file, you will find the logic for the NewPackageView component.
 * This component is responsible for creating a new package.
 *
 * @requires packageService
 * This service is used to interact with the API to create a new package.
 *
 * @requieres validateField
 * This function is used to validate the fields of the form.
 *
 * @requires onBeforeMount
 * This Hook is used to call the getNodes function before the component is mounted.
 */

//Vue imports
import { onBeforeMount, reactive, ref } from 'vue'

//Vue Router imports

//Stores imports

//Models imports
import type NodeValley from '@/models/node'

//Views imports
import PrimaryInput from '@/components/utilities/PrimaryInput.vue'
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'
import ErrorAlert from '@/components/alert/ErrorAlert.vue'
import SuccessAlert from '@/components/alert/SuccessAlert.vue'

//Services imports
import { packageService } from '@/services/packages'
import validateField from '@/services/validation/validateField'

// Variable to show if the page is loading
const loading = ref(true)

// Variable to store the all nodes
const nodes = ref<NodeValley[]>([])

// Variable to store the new package data
const newPackage = reactive<{ [key: string]: string }>({
  description: ''
})

// Variable to store the errors in the form
const errors = reactive<{ [key: string]: boolean }>({
  description: false
})

// Variable to store the messages of the errors
const messages = reactive<{ [key: string]: string }>({
  description: ''
})

// Variable to store the fields that have been changed
const fieldChange = reactive<{ [key: string]: boolean }>({
  description: false
})

// Variable to store the nodes selected
const nodeSelected = ref({
  // This node represent point of from where the package is going to be sent
  nodeFrom: '',
  // This node represent point of destination of the package
  nodeTo: ''
})

// Variable to store the alert message
const messageAlert = ref('')

// Variable to store the success message
const messageSuccess = ref('')

// Variable to store if the request is loading
const loadingRequest = ref(false)

/**
 * This function is used to validate the new package fields
 *
 * @param {string} field
 * The field to validate
 *
 */
const validateNewPackage = (field: string) => {
  // If the field is all, validate all the fields
  if (field === 'all') {
    Object.keys(fieldChange).forEach((key) => {
      fieldChange[key] = true
    })
  }

  fieldChange[field] = true
  Object.keys(newPackage).forEach((key) => {
    if (fieldChange[key]) {
      // Call the validateField function to validate the field,
      // for the newpackage scope
      const message = validateField('newpackage', key, newPackage[key])
      if (message !== '') {
        errors[key] = true
        messages[key] = message
      } else {
        errors[key] = false
        messages[key] = ''
      }
    }
  })
}

/**
 * This function is used to validate if the request can be sent
 *
 * @returns {boolean}
 * True if the request can be sent, false otherwise
 */
const validateSerndRequest = () => {
  // Check if there are errors in the form
  const hasErrors = Object.values(errors).filter((error) => {
    return error === true
  }).length

  // If there are errors, return false
  if (hasErrors > 0) {
    return false
  } else {
    return true
  }
}

/**
 * This function is used to send the request to create a new package
 */
const onSubmit = async () => {
  loadingRequest.value = true
  validateNewPackage('all')

  if (!validateSerndRequest()) {
    loadingRequest.value = false
    return
  }

  // Check if the nodes are selected and are different
  if (nodeSelected.value.nodeFrom === '' || nodeSelected.value.nodeTo === '') {
    loadingRequest.value = false
    messageAlert.value = 'Selecciona un nodo de origen y destino'
    return
  } else if (nodeSelected.value.nodeFrom === nodeSelected.value.nodeTo) {
    loadingRequest.value = false
    messageAlert.value = 'El nodo de origen y destino no pueden ser iguales'
    return
  }

  // Build the data to send
  const data = {
    description: newPackage.description,
    start_node_id: nodeSelected.value.nodeFrom,
    end_node_id: nodeSelected.value.nodeTo
  }

  // Send the request to create the package
  try {
    await packageService.createPackage(data)
    messageSuccess.value = 'Paquete creado correctamente'
    newPackage.description = ''
    nodeSelected.value.nodeFrom = ''
    nodeSelected.value.nodeTo = ''
  } catch (error) {
    // Set the error message
    messageAlert.value = 'Error al crear el paquete'
  } finally {
    // Set the loading to false, for show form to create a new package
    loadingRequest.value = false
  }
}

/**
 * This function is used to get the nodes list
 */
const getNodes = async () => {
  try {
    nodes.value = await packageService.getNodesList()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

// Call the getNodes function before the component is mounted
onBeforeMount(async () => {
  await getNodes()
})
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
    <h1>Crea un nuevo paquete</h1>
    <div class="packages flex flex-wrap gap-5 my-5" v-if="!loading">
      <div class="new-package">
        <!-- Field for the description of the package -->
        <PrimaryInput
          label="Descripción"
          id="description"
          type="text"
          placeholder=""
          v-model="newPackage.description"
          :error="errors.description && fieldChange.description"
          :errorMessage="messages.description"
          @lossFocus="validateNewPackage('description')"
        />

        <!-- Field for the node of origin -->
        <p class="mt-3 mb-1">Node de origen</p>
        <select
          name="nodeFrom"
          id="node-from"
          v-model="nodeSelected.nodeFrom"
          class="form-select border border-gray-300"
        >
          <option value="" disabled selected>Selecciona un nodo de origen</option>
          <option v-for="node in nodes" :key="node.id" :value="node.id">{{ node.name }}</option>
        </select>

        <!-- Field for the node of destination -->
        <p class="mt-3 mb-1">Node de destino</p>
        <select
          name="nodeFrom"
          id="node-from"
          v-model="nodeSelected.nodeTo"
          class="form-select border border-gray-300"
        >
          <option value="" disabled selected>Selecciona un nodo de origen</option>
          <option v-for="node in nodes" :key="node.id" :value="node.id">{{ node.name }}</option>
        </select>
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
    <!-- Image of the checkpoints -->
    <h2 class="mt-3">Puntos de control</h2>
    <p class="mb-5 mt-1">Estas son las rutas con las que cuenta la empresa</p>
    <img src="/valley_route_graph.png" alt="Checkpoints" />
    <p class="text-base mt-1">A partir de Google Earth</p>

    <div class="pages flex my-5 gap-5 flex-wrap">
      <!-- Button to create a new package -->
      <PrimaryButton text="Crear paquete" @click="onSubmit" :loading="loadingRequest" />
    </div>
  </div>

  <!-- Component to show error messages -->
  <ErrorAlert
    v-if="messageAlert && messageSuccess === ''"
    :show="messageAlert !== ''"
    :message="messageAlert"
    @close="messageAlert = ''"
  />

  <!-- Component to show success messages -->
  <SuccessAlert
    v-if="messageSuccess"
    :show="messageSuccess !== ''"
    :message="messageSuccess"
    @close="messageSuccess = ''"
  />
</template>

<style scoped>
h1 {
  font-weight: 600;
}

img {
  width: 100%;
  aspect-ratio: attr(width) / attr(height);
}
.new-package {
  select {
    font-size: 1.6rem;
    border-radius: 5px;
    padding: 1rem;
  }
}

.home {
  font-size: 1.6rem;
}
</style>
