<script setup lang="ts">
import { onMounted } from 'vue'

const { message, show } = defineProps(['message', 'show'])

const emit = defineEmits(['close'])

onMounted(() => {
  setTimeout(() => {
    emit('close')
  }, 5000)
})
</script>
<template>
  <div
    class="alert bg-red-100/20 text-black p-4 px-[3rem] rounded absolute top-20 right-0 mt-4 mr-4 sm:w-[40rem] sm:fixed sm:z-50"
    role="alert"
    :class="{ show: show }"
  >
    <p class="font-bold">Error!</p>
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
