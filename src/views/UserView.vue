<script setup lang="ts">
import { useGet } from '@/composables/fetch'
import { useStoreUser } from '@/stores/user'
import { onBeforeMount, ref } from 'vue'

const userStore = useStoreUser()

const loadData = ref('')
const loadError = ref('')

const loadUser = async () => {
  const { data, error } = await useGet('/')

  loadError.value = error.value

  if (data.value) {
    loadData.value = data.value
    userStore.user.email = data.value.email
    userStore.user.firstName = data.value.firstName
    userStore.user.lastName = data.value.lastName
  }
}

onBeforeMount(async () => {
  loadUser()
})
</script>
<template>
  <div v-if="loadData !== ''">
    <div class="container mx-auto pt-5">
      <div class="header">
        <h1 class="font-bold">Hola, {{ userStore.user.firstName }}</h1>
        <p class="">Tu correo es: {{ userStore.user.email }}</p>
      </div>
      <div class="spacer h-[5rem]"></div>
      <div class="content flex items-center justify-center gap-20">
        <div class="image">
          <img src="/build.png" width="500" alt="" />
        </div>
        <div class="text max-w-[50rem]">
          <h2 class="font-bold">Estamos trabajando en las funcionalidades de la página</h2>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="loadError !== ''"></div>
  <div v-else>Cargando ...</div>
</template>

<style scoped></style>
