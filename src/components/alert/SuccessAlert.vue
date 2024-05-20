<script setup lang="ts">
/**
 * This component is used to show a success message
 *
 * @emits close
 * This event is emitted when the alert is closed
 *
 * @prop message
 * The message to show in the alert
 */

//Vue imports
import { onMounted } from 'vue'

//Vue Router imports

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
 */
onMounted(() => {
  setTimeout(() => {
    emit('close')
  }, 5000)
})
</script>
<template>
  <div
    class="alert bg-green-500 text-black p-4 px-[3rem] rounded absolute top-20 right-0 mt-4 mr-4 sm:w-[40rem] sm:fixed sm:z-50"
    role="alert"
    :class="{ show: show }"
  >
    <p class="font-bold">Todo salió bien!</p>
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
  animation: opacity 0.5s ease-in-out;
}
</style>
