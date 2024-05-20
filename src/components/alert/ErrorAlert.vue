<script setup lang="ts">
/**
 * This component is used to show an error message
 *
 * @emits close
 * This event is emitted when the alert is closed
 *
 * @prop message
 * The message to show in the alert
 */

//Vue imports

//Vue Router imports
import { onMounted } from 'vue'

//Stores imports

//Models imports

//Views imports

//Services imports

const { message, show } = defineProps(['message', 'show'])

const emit = defineEmits(['close'])

/**
 * This function is executed when the component is mounted,
 * it closes the alert after 5 seconds the component is mounted
 *
 * @param {void}
 * @returns {void}
 */
onMounted(() => {
  setTimeout(() => {
    emit('close')
  }, 5000)
})
</script>
<template>
  <div
    class="alert bg-red-900 text-white p-4 px-[3rem] rounded absolute top-20 right-0 mt-4 mr-4 sm:w-[40rem] sm:fixed sm:z-50"
    role="alert"
    :class="{ show: show }"
  >
    <p class="font-bold">Error!</p>

    <!-- Set the message prop to show the error message -->
    <p class="block sm:inline">{{ message }}</p>
  </div>
</template>

<style scoped>
.alert {
  opacity: 0;
}

.show {
  opacity: 1;
  transform: translateX(0);
  /* Set the animation to show the alert */
  animation: opacity 0.5s ease-in-out;
}
</style>
