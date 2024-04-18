<script setup lang="ts">
//NProgress imports

//Vue imports

//Vue Router imports
import { RouterView } from 'vue-router'

//Types imports

//Models imports

//Models Errors imports

//Stores imports

//Services imports

//Utilities imports

//Components imports
import NavBar from '@/components/layout/NavBar.vue'
import PrimaryFooter from '@/components/page/PrimaryFooter.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="content">
    <RouterView />
  </div>
  <PrimaryFooter />
</template>

<style scoped>
.content {
  min-height: calc(100vh - (150px + 63px));
}
</style>
