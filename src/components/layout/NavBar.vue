<script setup lang="ts">
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'
import { useStoreUser } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useStoreUser()

const router = useRouter()

const goToLogin = () => {
  router.push({ name: 'login' })
}

const goToSignup = () => {
  router.push({ name: 'signup' })
}

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
        <router-link to="/">
          <div class="flex items-center brand">
            <h2 class="valley">Valley</h2>
            <h2 class="route">Route</h2>
          </div>
        </router-link>
        <div class="flex items-center gap-3" v-if="!userStore.isAuthenticated">
          <PrimaryButton text="Iniciar sesión" outlined @click="goToLogin" />
          <PrimaryButton text="Registrarse" @click="goToSignup" />
        </div>
        <div class="flex items-center gap-3" v-else>
          <PrimaryButton text="Cerrar sesión" @click="logout" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.brand {
  h2 {
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
