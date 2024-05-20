<script setup lang="ts">
import HomeCard from '@/components/page/home/HomeCard.vue'
import SectionCard from '@/components/page/home/SectionCard.vue'
import TheWelcome from '@/components/page/home/TheWelcome.vue'
import { autService } from '@/services/user/login'
import { useStoreUser } from '@/stores/user'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useStoreUser()
const user = userStore.user

const redirectTo = (route: string) => {
  router.push({ name: route })
}

onBeforeMount(async () => {
  console.log('HomeView -> welcome')
  const encryptedUser = window.localStorage.getItem('userData')
  if (encryptedUser) {
    const userData = JSON.parse(atob(encryptedUser))
    user.token = userData.token
    router.push({ name: 'userhome' })
  }
})
</script>

<template>
  <main>
    <TheWelcome />
    <SectionCard class="my-20 cursor-pointer" @click="redirectTo('track-package')">
      <HomeCard />
    </SectionCard>
    <SectionCard class="my-20 cursor-pointer" @click="redirectTo('statistics')">
      <div class="flex items-center justify-around gap-5 w-full">
        <div class="image">
          <img src="/analytics.png" alt="statistics icon" class="aspect-auto drop-shadow-xl" />
        </div>
        <div class="text min-h-full py-10 px-20 rounded-3xl bg-ochret flex flex-col justify-center">
          <div class="title text-ochre mb-5">
            <h2 class="font-bold">Estadísticas de nodo</h2>
          </div>
          <div class="description">
            <p>Observa las estadísticas de los nodos</p>
          </div>
        </div>
      </div>
    </SectionCard>
    <SectionCard class="my-20 utils">
      <div class="title">
        <h2 class="font-bold">También puedes</h2>
      </div>
      <div class="content-utils">
        <div class="item">
          <i class="bi bi-person-add"></i>
          <p>Crear una nueva cuenta</p>
        </div>
        <div class="item">
          <i class="bi bi-pencil-square"></i>
          <p>Registra nuevos paquetes</p>
        </div>
        <div class="item">
          <i class="bi bi-list-ul"></i>
          <p>Ver todos tus paquetes</p>
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

.image {
  img {
    width: 100px;
  }
}
.text {
  .title {
    h2 {
      font-size: 4rem;
    }
  }
  .description {
    p {
      font-size: 2rem;
    }
  }
}
</style>
