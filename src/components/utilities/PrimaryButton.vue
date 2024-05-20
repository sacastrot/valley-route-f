<script setup lang="ts">
/**
 * This component is used to show the primary button
 * in the application
 *
 * @prop data
 * (ButtonI) This prop is used to show the data of the button
 * from interface ButtonI (/src/interface/ButtonI.ts)
 *
 * @emits click
 * This event is used to click the button
 *
 * @requires ref
 * This is used to create a reactive reference
 */

//Vue imports

//Vue Router imports

//Stores imports

//Models imports
import type { ButtonI } from '@/interface'

//Views imports

//Services imports

const emit = defineEmits(['click'])

/**
 * This function is used to emit the click event
 */
const onClick = () => {
  emit('click')
}

const data = defineProps<ButtonI>()
</script>
<template>
  <button
    class="bg-ochre px-4 py-2 rounded hover:drop-shadow flex items-center justify-center"
    v-if="!data.outlined"
    @click="onClick"
  >
    <svg
      class="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      v-if="data.loading"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <p class="text-white" :class="data.bold ? 'font-bold' : ''">
      {{ data.text }}
    </p>
  </button>
  <button
    class="bg-white px-4 py-2 rounded border border-ochre hover:drop-shadow"
    v-if="data.outlined"
    @click="onClick"
  >
    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" v-if="data.loading"></svg>
    <p class="text-ochre" :class="data.bold ? 'font-bold' : ''">
      {{ data.text }}
    </p>
  </button>
</template>

<style scoped></style>
