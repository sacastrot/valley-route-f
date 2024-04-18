<script setup lang="ts">
import HomeCard from '@/components/page/home/HomeCard.vue'
import SectionCard from '@/components/page/home/SectionCard.vue'
import TheWelcome from '@/components/page/home/TheWelcome.vue'
import { useStoreUser } from '@/stores/user'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useStoreUser()

onBeforeMount(() => {
  if (!userStore.isAuthenticated) {
    const userData = localStorage.getItem('userData')
    if (userData) {
      const userSession = JSON.parse(atob(userData))
      userStore.user.token = userSession.token
      userStore.user.email = userSession.email
    }
  }

  if (userStore.isAuthenticated) {
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <main>
    <TheWelcome />
    <SectionCard class="my-20">
      <HomeCard />
    </SectionCard>
    <SectionCard class="my-20 utils">
      <div class="title">
        <h2 class="font-bold">También puedes</h2>
      </div>
      <div class="content-utils">
        <div class="item">
          <i class="bi bi-map-fill"></i>
          <p>Visuliza la ubicación en un mapa</p>
        </div>
        <div class="item">
          <i class="bi bi-pencil-square"></i>
          <p>Registra nuevos paquetes</p>
        </div>
        <div class="item">
          <i class="bi bi-graph-up"></i>
          <p>Ver estadísticas de los paquetes</p>
        </div>
      </div>
    </SectionCard>
  </main>
</template>

<style scoped>
.utils {
  display: grid;
  grid-template-columns: 1fr;
  .title {
    width: 100%;
    text-align: center;
  }
  .content-utils {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2rem;
    gap: 2rem;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      gap: 1rem;
      padding: 2rem;
      border: 1px solid theme('colors.ochre');
      border-radius: 1rem;
      p {
        max-width: 15rem;
        text-align: center;
      }
    }
  }
}
</style>
