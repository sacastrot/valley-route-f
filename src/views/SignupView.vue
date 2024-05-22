<script setup lang="ts">
/**
 * In this file, you will find the logic for the SignupView component.
 *
 * This component is responsible for registering a new user.
 *
 * @requires reactive
 * This function is used to create a reactive object.
 *
 * @requires ref
 * This function is used to create a reactive reference.
 *
 * @requires useRouter
 * This function is used to get the router instance,
 * to navigate to login page after the user is registered.
 *
 * @requires validateField
 * This function is used to validate the fields of the form.
 */

//Vue imports
import { reactive, ref } from 'vue'

//Vue Router imports
import { useRouter } from 'vue-router'

//Stores imports

//Models imports

//Views imports
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'
import ErrorAlert from '@/components/alert/ErrorAlert.vue'
import SuccessAlert from '@/components/alert/SuccessAlert.vue'
import PrimaryInput from '@/components/utilities/PrimaryInput.vue'
import PasswordInput from '@/components/utilities/PasswordInput.vue'

//Services imports
import validateField from '@/services/validation/validateField'
import PolicyStatement from '@/components/signup/PolicyStatement.vue'
import SignupUser from '@/models/user/signupModel'
import signup from '@/services/user/signup'

// Variable to store the alert message
const messageAlert = ref('')

// Variable to store the success message
const messageSuccess = ref('')

// Variable to store if the user has accepted the policy
const acceptPolicy = ref(false)

// Variable to store if the request is loading
const loadingRequest = ref(false)

// Variable to instance the router
const router = useRouter()

// Variable to store the user data for the form
const user = reactive<{ [key: string]: string }>({
  email: '',
  password: '',
  firstName: '',
  lastName: ''
})

const confirmPassword = reactive({
  password: '',
  error: false,
  errorMessage: 'Las contraseñas no coinciden'
})

// Variable to store the errors in the form
const errors = reactive<{ [key: string]: boolean }>({
  email: false,
  password: false,
  firstName: false,
  lastName: false
})

// Variable to store the messages of the errors
const messages = reactive<{ [key: string]: string }>({
  email: '',
  password: '',
  firstName: '',
  lastName: ''
})

// Variable to store the fields that have been changed to show the errors
const fieldChange = reactive<{ [key: string]: boolean }>({
  email: false,
  password: false,
  firstName: false,
  lastName: false
})

/**
 * Function to validate the fields of the form
 *
 * @param field
 * This parameter is used to validate a specific field of the form
 * If the field is 'all', all the fields are validated
 *
 */
const validateNewUser = (field: string) => {
  // If the field is all, validate all the fields
  if (field === 'all') {
    Object.keys(fieldChange).forEach((key) => {
      fieldChange[key] = true
    })
  }

  fieldChange[field] = true
  Object.keys(user).forEach((key) => {
    if (fieldChange[key]) {
      // Call the validateField function to validate the field
      const message = validateField('user', key, user[key])
      if (message !== '') {
        errors[key] = true
        messages[key] = message
      } else {
        errors[key] = false
        messages[key] = ''
      }
    }
  })
}

/**
 * Function to validate if the request can be sent
 */
const validateSerndRequest = () => {
  // Check if there are errors in the form
  const hasErrors = Object.values(errors).filter((error) => {
    return error === true
  }).length

  // If there are errors, return false
  if (hasErrors > 0) {
    return false
  } else {
    return true
  }
}

/**
 * This function is used to validate the confirm password in the reset
 * password form
 */
const validConfirmPassword = () => {
  if (user.password !== confirmPassword.password) {
    confirmPassword.error = true
  } else {
    confirmPassword.error = false
  }
}

/**
 * Function to submit the form, and
 * call the signup service to register the user
 */
const onSubmit = async () => {
  // Set the loading request to true
  loadingRequest.value = true

  // Validate the fields of the form
  validateNewUser('all')

  // Check if the user has accepted the policy
  if (!acceptPolicy.value) {
    messageAlert.value = 'Debes aceptar los términos y condiciones de uso'
    loadingRequest.value = false
    return
  }

  // Check if the request can be sent
  if (!validateSerndRequest()) {
    loadingRequest.value = false
    return
  }

  // Create a new instance of the SignupUser model to send the data, with the user data
  const userData = new SignupUser(user.email, user.password, user.firstName, user.lastName)

  try {
    // Call the signup service to register the user
    await signup(userData)
    messageSuccess.value = 'Usuario registrado correctamente'

    // Redirect to the login page after 2 seconds
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 1000)
  } catch (error) {
    if (error instanceof Error) {
      // Set the error message
      messageAlert.value = error.message
    }
  } finally {
    // Set the loading request to false
    loadingRequest.value = false
  }
}

/**
 * Variable to store the current step of the form
 * First step: 1 In this step, the user enters the email, password, first name, and last name
 * Second step: 2 In this step, the user accepts the policy
 */
const currentStep = ref(1)

/**
 * Function to change the step of the form
 * to the next step, before the user accepts the policy,
 * the fields of the form are validated
 */
const nextStep = () => {
  // Validate the fields of the form
  validateNewUser('all')

  validConfirmPassword()

  if (confirmPassword.error) {
    return
  }

  // Check if the request can be sent
  if (!validateSerndRequest()) {
    return
  }

  // Change the step to the next step
  currentStep.value = 2
}
</script>
<template>
  <div class="container mx-auto">
    <form @submit.prevent="" class="flex items-center justify-center" v-if="currentStep == 1">
      <div class="content-form w-[35rem]">
        <div class="title text-center">
          <!-- Title of the page -->
          <h3>Registrarse</h3>
        </div>
        <div class="spacer h-[2rem]"></div>
        <div class="flex flex-col gap-2">
          <div class="h-[2rem]"></div>
          <!-- This field is for email input -->
          <PrimaryInput
            id="signupemail"
            type="email"
            placeholder="email@example.com"
            v-model="user.email"
            label="Correo electrónico"
            :error="errors.email && fieldChange.email"
            :errorMessage="messages.email"
            @lossFocus="validateNewUser('email')"
          />

          <!-- This field is for last name input -->
          <PrimaryInput
            id="signupname"
            type="text"
            placeholder="Nombre"
            label="Nombre"
            v-model="user.firstName"
            :error="errors.firstName && fieldChange.firstName"
            :errorMessage="messages.firstName"
            @lossFocus="validateNewUser('firstName')"
          />

          <!-- This field is for last name input -->
          <PasswordInput
            id="signuppassword"
            type="password"
            placeholder="********"
            v-model="user.password"
            label="Contraseña"
            :error="errors.password && fieldChange.password"
            :errorMessage="messages.password"
            @lossFocus="validateNewUser('password')"
          />
          <PasswordInput
            id="repeatpassword"
            type="password"
            placeholder="********"
            label="Confirmar contraseña"
            v-model="confirmPassword.password"
            :error="confirmPassword.error"
            :errorMessage="confirmPassword.errorMessage"
            @lossFocus="validConfirmPassword"
          />
          <div class="h-[1rem]"></div>

          <!-- This field is for last name input -->
          <PrimaryButton text="Siguiente" @click="nextStep" />
        </div>
      </div>
    </form>

    <!-- This is the second step of the form, where the user accepts the policy -->
    <div v-else-if="currentStep == 2">
      <!-- Component with the policy statement -->
      <PolicyStatement />

      <!-- Checkbox to accept the policy -->
      <div class="policy mb-3">
        <input type="checkbox" v-model="acceptPolicy" @click="acceptPolicy = !acceptPolicy" />
        <p>Acepto los términos y condiciones de uso</p>
      </div>

      <div class="actions flex gap-4">
        <!-- Button to go back to the first step -->
        <PrimaryButton text="Atrás" @click="currentStep = 1" />

        <!-- Button to submit the form -->
        <PrimaryButton text="Registrarse" @click="onSubmit" :loading="loadingRequest" />
      </div>
      <div class="spacer h-[4rem]"></div>
    </div>
  </div>

  <!-- Component to show error messages -->
  <ErrorAlert
    v-if="messageAlert && messageSuccess === ''"
    :show="messageAlert !== ''"
    :message="messageAlert"
    @close="messageAlert = ''"
  />

  <!-- Component to show success messages -->
  <SuccessAlert
    v-if="messageSuccess"
    :show="messageSuccess !== ''"
    :message="messageSuccess"
    @close="messageSuccess = ''"
  />
</template>

<style scoped>
.policy {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin-top: 5rem;
  & p {
    font-size: 1.6rem;
    font-weight: 700;
  }
  & input {
    width: fit-content;
  }
}
form {
  min-height: calc(100vh - (6.3rem + 15rem));

  input {
    font-size: 1.6rem;
    width: 100%;
  }

  .content-form {
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
    .actions {
      width: 100%;
      display: flex;
    }
  }
}
</style>
