<script setup lang="ts">
/**
 * This component is used to show card for
 * track packages in the home page
 */
</script>

<template>
  <!-- Image of card -->
  <img
    src="/package.png"
    alt="image with a packages"
    class="aspect-auto drop-shadow-xl"
    width="220"
  />
  <!-- Text of card -->
  <div class="min-h-full py-10 px-20 rounded-3xl bg-ochret flex flex-col justify-center">
    <div class="title">
      <h2 class="text-ochre font-bold">Ubica tus paquetes</h2>
      <p class="text-black mt-5">Con tu número de guía puedes conocer la ruta de tus paquetes</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 4rem;
  line-height: 6rem;
}
p {
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>
