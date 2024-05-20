<script setup lang="ts">
/**
 * This component is used to show the hero image
 * in the home page
 *
 * @component HeroImage
 * This component is used to show the hero image
 */

// Instance of the HeroImage component
import HeroImage from '@/components/icons/HeroImage.vue'
</script>
<template>
  <div class="container hero h-[50rem] min-w-full px-5 overflow-hidden">
    <!-- Insert the HeroImage component here -->
    <HeroImage class="mt-40" />
    <!-- Hero text -->
    <div class="text">
      <h1 class="text-white sm:text-black">Valley Route</h1>
      <p class="text-white sm:text-black mt-10">
        Gestiona y conoce sobre el estado que tienen tus paquetes
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: #cfe4e6;
  .text {
    position: absolute;
    max-width: 40rem;
    top: 50%;
    left: 60%;
    text-align: center;
    transform: translate(-50%, -50%);
    h1 {
      font-family: 'Anton', sans-serif;
    }
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
    }
    i {
      font-size: 3.5rem;
    }
  }
}
</style>
