<script setup lang="ts">
import type { ButtonI } from '@/interface'

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}

const data = defineProps<ButtonI>()
</script>
<template>
  <button
    class="bg-ochre px-4 py-2 rounded shadow hover:drop-shadow"
    v-if="!data.outlined"
    @click="onClick"
  >
    <p class="text-white" :class="data.bold ? 'font-bold' : ''">
      {{ data.text }}
    </p>
  </button>
  <button
    class="bg-white px-4 py-2 rounded border border-ochre hover:drop-shadow"
    v-if="data.outlined"
    @click="onClick"
  >
    <p class="text-ochre" :class="data.bold ? 'font-bold' : ''">
      {{ data.text }}
    </p>
  </button>
</template>

<style scoped></style>
