<script setup lang="ts">
/**
 * This component is used to show the primary input
 * in the application
 *
 * @prop data
 * (InputI) This prop is used to show the data of the input
 * from interface InputI (/src/interface/InputI.ts)
 *
 * @emits update:modelValue
 * This event is used to update the model value
 */

//Vue imports

//Vue Router imports

//Stores imports

//Models imports
import type InputI from '@/interface/InputI'

//Views imports

//Services imports

const emit = defineEmits(['update:modelValue', 'lossFocus'])

/**
 * This function is used to emit the value of the input
 *
 * @param value
 * (String) This parameter is used to emit the value of the input
 */
const emitValue = (value: string) => {
  emit('update:modelValue', value)
}

/**
 * This function is used to emit the focus of the input
 */
const emitFocus = () => {
  emit('lossFocus')
}

const data = defineProps<InputI>()
</script>
<template>
  <label :for="data.id" class="mt-2">{{ data.label }}</label>
  <input
    :id="data.id"
    :type="data.type"
    :placeholder="data.placeholder"
    :value="data.modelValue"
    class="border border-gray-300 rounded px-3 py-3"
    @input="emitValue(($event.target as HTMLTextAreaElement).value)"
    @blur="emitFocus"
  />
  <!-- This section is used to show the error message -->
  <p v-if="data.error" class="text-red-200">{{ data.errorMessage }}</p>
</template>

<style scoped>
label {
  font-size: 1.6rem;
}
input {
  font-size: 1.6rem;
  width: 100%;
}
p {
  font-size: 1.5rem;
}
</style>
