<script setup lang="ts">
/**
 * This component is used to show the password input
 * in the application
 *
 * @prop data
 * (InputI) This prop is used to show the data of the input
 * from interface InputI (/src/interface/InputI.ts)
 *
 * @emits update:modelValue
 * This event is used to update the model value
 *
 * @emits lossFocus
 * This event is used to loss the focus of the input
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

/**
 * This function is used to toggle the password
 */
const togglePassword = () => {
  // get password input html element
  const passwordInput = document.getElementById(data.id) as HTMLInputElement

  // get icon html element
  const iconPassword = document.getElementById('iconReset') as HTMLElement

  // check if the password is visible
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
    iconPassword.classList.remove('bi-eye-fill')
    iconPassword.classList.add('bi-eye-slash-fill')
  } else {
    passwordInput.type = 'password'
    iconPassword.classList.remove('bi-eye-slash-fill')
    iconPassword.classList.add('bi-eye-fill')
  }
}

const data = defineProps<InputI>()
</script>
<template>
  <label :for="data.id" class="mt-2">{{ data.label }}</label>
  <div class="password">
    <input
      :id="data.id"
      type="password"
      :placeholder="data.placeholder"
      :value="data.modelValue"
      class="border border-gray-300 rounded px-3 py-3"
      @input="emitValue(($event.target as HTMLTextAreaElement).value)"
      @blur="emitFocus"
    />
    <!-- This tag is used to show the button to toggle the password -->
    <div class="btn-password" @click="togglePassword">
      <i id="iconReset" class="bi bi-eye-fill"></i>
    </div>
  </div>
  <div class="text-red-200" v-if="data.error">
    <!-- This is message error for incorrect password -->
    <p>La contraseña debe tener por tu seguridad:</p>
    <ul>
      <li>Debe tener al menos 8 caracteres</li>
      <li>Debe tener al menos una letra mayúscula</li>
      <li>Debe tener al menos un número</li>
      <li>Debe tener al menos un caracter especial (@_.&$)</li>
    </ul>
  </div>
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

ul {
  font-size: 1.6rem;
  & li {
    font-size: 1.5rem;
  }
}

.password {
  input {
    width: 100%;
  }
  position: relative;
  .btn-password {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    i {
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>
