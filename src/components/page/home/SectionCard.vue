<script setup lang="ts">
/**
 * This component is used to show card functionalities
 * in the home page
 *
 * @slot
 * This slot is used to show the content of the card
 */
</script>
<template>
  <div
    class="container mx-auto w-[120rem] rounded-3xl flex justify-between bg-ochret shadow-lg p-20 justify-center hover:scale-105 transition-transform duration-200 ease-in-out"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
