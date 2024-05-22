<script setup lang="ts">
/**
 * In this file, you can see all that in needed to login a user
 *
 * @requires router
 * This is used to redirect the user to the home user view (userhome name path)
 *
 * @requires useStoreUser
 * This is used to store the user token in the store Pinia
 */
//Vue imports
import { reactive, ref } from 'vue'

//Vue Router imports
import router from '@/router'

//Stores imports
import { useStoreUser } from '@/stores/user'

//Models imports

//Views imports
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'
import PrimaryInput from '@/components/utilities/PrimaryInput.vue'
import ErrorAlert from '@/components/alert/ErrorAlert.vue'
import ModalBase from '@/components/utilities/ModalBase.vue'
import SuccessAlert from '@/components/alert/SuccessAlert.vue'

//Services imports
import validateField from '@/services/validation/validateField'
import resetPassword from '@/services/user/resetPassword'
import { autService } from '@/services/user/login'
import PasswordInput from '@/components/utilities/PasswordInput.vue'

//User store instance
const userStore = useStoreUser()

//Variable to show the loading spinner
const loadingRequest = ref(false)

//Variable to show the success message
const successChange = ref('')

//Variable to change the password with the resetPassword service
const reset = reactive<{ [key: string]: string }>({
  email: '',
  new_password: '',
  repeatPassword: ''
})

//Variable to show show errors in the reset password form
const resetChange = reactive<{ [key: string]: boolean }>({
  email: false,
  new_password: false
})

//Variable to show messages in the reset password form
const resetMessages = reactive<{ [key: string]: string }>({
  email: '',
  new_password: ''
})

//Variable to show errors in the reset password form
const resetErrors = reactive<{ [key: string]: boolean }>({
  email: false,
  new_password: false,
  repeatPassword: false
})

//Variable to login with the login service (autService)
const user = reactive({
  email: '',
  password: ''
})

//Variable to show changes in the login form
const fieldChange = reactive<{ [key: string]: boolean }>({
  email: false
})

//Variable to show messages in the login form
const messages = reactive<{ [key: string]: string }>({
  email: ''
})

//Variable to show errors in the login form
const errors = reactive<{ [key: string]: boolean }>({
  email: false
})

//Variable to show the error message in the login form
const messageAlert = ref('')

//Variable to show the reset password modal
const showResetPassword = ref(false)

/**
 * This function is used to toggle the password visibility in the login form
 */
const togglePassword = () => {
  // Get the password input element
  const passwordInput = document.getElementById('password-input') as HTMLInputElement
  // Get the icon element
  const iconPassword = document.getElementById('iconPassword') as HTMLElement
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

/**
 * This function is used to validate the user credentials in the login form
 *
 * @param {string} field
 * This is the field to validate, if the field is 'all' then all fields are validated
 */

const validateUserCredentials = (field: string) => {
  // If the field is 'all' then all fields are validated
  if (field === 'all') {
    Object.keys(fieldChange).forEach((key) => {
      fieldChange[key] = true
    })
  }

  fieldChange[field] = true

  // Validate the email field
  const message = validateField('login', 'email', user.email)
  if (message !== '') {
    messages[field] = message
    errors[field] = true
  } else {
    messages[field] = ''
    errors[field] = false
  }
}

/**
 * This function is used to validate the reset password form
 *
 * @param {string} field
 * This is the field to validate, if the field is 'all' then all fields are validated
 */

const validateResetPassword = (field: string) => {
  if (field === 'all') {
    Object.keys(resetChange).forEach((key) => {
      resetChange[key] = true
    })
  }
  resetChange[field] = true
  Object.keys(reset).forEach((key) => {
    const message = validateField('reset', key, reset[key])
    console.log('Message', message)
    if (message !== '') {
      resetMessages[key] = message
      resetErrors[key] = true
    } else {
      resetMessages[key] = ''
      resetErrors[key] = false
    }
  })
}

/**
 * This function is used to validate the confirm password in the reset
 * password form
 */
const validConfirmPassword = () => {
  if (reset.new_password !== reset.repeatPassword) {
    resetErrors.repeatPassword = true
  } else {
    resetErrors.repeatPassword = false
  }
}

/**
 * This function is used to validate the reset password form
 *
 * @returns {boolean}
 * This returns true if the request is valid, otherwise returns false
 */
const validRequest = () => {
  // Check if there are errors in the reset password form
  const hasErrors = Object.values(resetErrors).filter((value) => {
    return value === true
  }).length

  // If there are errors then return false
  if (hasErrors > 0) {
    return false
  } else {
    return true
  }
}

/**
 * This function is used to request the reset password service
 * First it validates the reset password form
 *
 * If the request is valid then the reset password service is called
 */

const requestResetPassword = async () => {
  loadingRequest.value = true
  validateResetPassword('all')

  if (!validRequest()) {
    loadingRequest.value = false
    return
  }

  validConfirmPassword()
  if (resetErrors.repeatPassword) {
    loadingRequest.value = false
    return
  }

  // Build the body to send to the reset password service
  const body = {
    email: reset.email,
    new_password: reset.new_password
  }

  try {
    await resetPassword(body)
    successChange.value = 'Contraseña cambiada correctamente'
    showResetPassword.value = false
    reset.email = ''
    reset.new_password = ''
  } catch (error) {
    if (error instanceof Error) {
      messageAlert.value = error.message
    }
  } finally {
    loadingRequest.value = false
  }
}

/**
 * This function is used to request the login service
 * First it validates the login form
 *
 * If the request is valid then the login service is called
 */
const requestLogin = async () => {
  loadingRequest.value = true
  if (user.email === '' || user.password === '') {
    messageAlert.value = 'Por favor, rellene todos los campos'
    loadingRequest.value = false
    return
  }

  // Build the body to send to the login service
  const formData = new FormData()
  formData.append('username', user.email)
  formData.append('password', user.password)
  formData.append('grant_type', '')
  formData.append('client_id', '')
  formData.append('client_secret', '')
  formData.append('scope', '')

  try {
    const response = await autService.login(formData)

    // Store the token in the user store
    userStore.state.token = response.token

    // Store the user data in the local storage
    window.localStorage.setItem(
      'userData',
      btoa(JSON.stringify({ token: response.token, type: response.type }))
    )
    // If the login is successful then redirect the user to the user home view
    router.push({ name: 'userhome' })
  } catch (error) {
    messageAlert.value = 'Usuario o contraseña incorrectos'
  } finally {
    loadingRequest.value = false
  }
}
</script>
<template>
  <div class="w-100 container-form">
    <div class="container mx-auto">
      <div class="flex items-center justify-center h-full">
        <div class="w-[30rem]">
          <h3 class="text-center">Iniciar sesión</h3>
          <div class="flex flex-col gap-3 mt-5">
            <PrimaryInput
              id="email"
              type="email"
              placeholder="Correo electrónico"
              v-model="user.email"
              @lossFocus="validateUserCredentials('email')"
              :error="errors.email"
              :errorMessage="messages.email"
            />
            <div class="password">
              <input
                type="password"
                class="border border-gray-300 rounded px-3 py-3"
                placeholder="Contraseña"
                v-model="user.password"
                id="password-input"
              />
              <div class="btn-password" @click="togglePassword">
                <i id="iconPassword" class="bi bi-eye-fill"></i>
              </div>
            </div>
            <div class="h-[1rem]"></div>
            <p class="text-center cursor-pointer" @click="showResetPassword = true">
              ¿Olvidaste tu contraseña?
            </p>
            <div class="h-[1rem]"></div>

            <PrimaryButton text="Iniciar sesión" :loading="loadingRequest" @click="requestLogin" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal to reset password in the login form -->
  <ModalBase :show="showResetPassword" @on-close="showResetPassword = false">
    <template #header>
      <div class="modal-title">
        <h2>Cambia tu contraseña</h2>
      </div>
    </template>
    <template #body>
      <div class="modal-body">
        <!-- Description of the valid password -->
        <p>La contraseña debe tener por tu seguridad:</p>
        <ul>
          <li>Debe tener al menos 8 caracteres</li>
          <li>Debe tener al menos una letra mayúscula</li>
          <li>Debe tener al menos un número</li>
          <li>Debe tener al menos un caracter especial (@_.&$)</li>
        </ul>

        <!-- Form to reset the password -->
        <div class="mt-5">
          <!-- Email for reset password -->
          <PrimaryInput
            id="emailreset"
            type="email"
            placeholder="Correo electrónico"
            v-model="reset.email"
            @lossFocus="validateResetPassword('email')"
            :error="resetErrors.email"
            :errorMessage="resetMessages.email"
          />
        </div>
        <!-- <div class="password mt-4">
          <input
            type="password"
            class="border border-gray-300 rounded px-3 py-3"
            placeholder="Contraseña"
            v-model="reset.new_password"
            id="reset-input"
            @blur="validateResetPassword('new_password')"
          />
          <div class="btn-password" @click="toggleResetPassword">
            <i id="iconReset" class="bi bi-eye-fill"></i>
          </div>
        </div> -->
        <PasswordInput
          id="resetpassword"
          type="password"
          placeholder="Nueva contraseña"
          v-model="reset.new_password"
          :error="resetErrors.new_password"
          errorMessage="Ingrese una contraseña válida"
          @lossFocus="validateResetPassword('new_password')"
        />

        <PasswordInput
          id="repeatpassword"
          type="password"
          placeholder="Confirmar contraseña"
          v-model="reset.repeatPassword"
          :error="resetErrors.repeatPassword"
          errorMessage="Las contraseñas no coinciden"
          @lossFocus="validConfirmPassword"
        />
      </div>
    </template>
    <template #footer>
      <!-- Button to request the reset password service -->
      <PrimaryButton
        text="Cambiar contraseña"
        @click="requestResetPassword"
        :loading="loadingRequest"
      />
    </template>
  </ModalBase>

  <!-- Alert to show the error message -->
  <ErrorAlert
    v-if="messageAlert"
    :show="messageAlert !== ''"
    :message="messageAlert"
    @close="messageAlert = ''"
  />

  <!-- Alert to show the success message -->
  <SuccessAlert
    v-if="successChange"
    :show="successChange !== ''"
    :message="successChange"
    @close="successChange = ''"
  />
</template>

<style scoped>
.container-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - (6.3rem + 15rem));

  input {
    font-size: 1.6rem;
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
}

.modal-title {
  & h2 {
    font-size: 2rem;
    font-weight: 700;
  }
}
.modal-body {
  & p {
    font-size: 1.6rem;
  }
  & ul {
    margin-top: 1rem;
    & li {
      font-size: 1.6rem;
      list-style: disc;
      margin-left: 2rem;
    }
  }
  input {
    font-size: 1.6rem;
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
}
</style>
