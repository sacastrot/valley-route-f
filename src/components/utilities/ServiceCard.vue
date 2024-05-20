<script setup lang="ts">
/**
 * This component is used to show the service card
 * in the application
 *
 * @prop data
 * (ServiceCardI) This prop is used to show the data of the service card
 * from interface ServiceCardI (/src/interface/serviceCards.ts)
 *
 * @requires useRouter
 * This is used to get the router instance for
 * navigation in the application
 */

//Vue imports

//Vue Router imports
import { useRouter } from 'vue-router'

//Stores imports

//Models imports
import type { ServiceCardI } from '@/interface/serviceCards'

//Views imports

//Services imports

const router = useRouter()

/**
 * This function is used to redirect to the route
 * of the service card
 */
const redirectTo = () => {
  router.push({ name: data.route })
}

const data = defineProps<ServiceCardI>()
</script>
<template>
  <div class="card hover:shadow cursor-pointer" @click="redirectTo">
    <div class="icon">
      <i class="bi" :class="data.icon"></i>
    </div>
    <div class="title">
      <p class="font-bold">{{ data.title }}</p>
    </div>
    <div class="description">
      <p>{{ data.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  min-width: 20rem;
  .icon {
    font-size: 2rem;
  }
  .title {
    margin-top: 1rem;
    p {
      font-size: 1.8rem;
    }
  }
}
</style>
