<script setup lang="ts">
import { UserNameValidator, NameValidator } from '@/validator'
import { reactive, ref } from 'vue'
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'
import ErrorAlert from '@/components/alert/ErrorAlert.vue'
import SuccessAlert from '@/components/alert/SuccessAlert.vue'
import { usePost } from '@/composables/fetch'
import { useRouter } from 'vue-router'

const messageAlert = ref('')
const messageSuccess = ref('')

const router = useRouter()

const onSubmit = async () => {
  if (user.email === '' || user.password === '' || user.firstName === '' || user.lastName === '') {
    messageAlert.value = 'Por favor, rellene todos los campos'
    return
  }
  const userData = {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName
  }

  const { data, error } = await usePost('/auth', userData)

  if (error.value !== '') {
    messageAlert.value = error.value
    return
  }

  if (data.value === null) {
    messageAlert.value = ''
    messageSuccess.value = 'Usuario registrado correctamente'

    user.email = ''
    user.password = ''
    user.firstName = ''
    user.lastName = ''

    setTimeout(() => {
      router.push({ name: 'login' })
    }, 2000)

    return
  }
}

const user = reactive({
  email: '',
  password: '',
  firstName: '',
  lastName: ''
})

const validation = reactive({
  username: {
    isValid: true,
    message: ''
  },
  name: {
    isValid: true,
    message: ''
  },
  lastName: {
    isValid: true,
    message: ''
  },
  password: {
    isValid: true,
    message: ''
  }
})

const username = new UserNameValidator()
const name = new NameValidator()

const validUsername = () => {
  if (!username.validate(user.email)) {
    validation.username.isValid = false
    validation.username.message = username.invalidMessage()
  } else {
    validation.username.isValid = true
    validation.username.message = ''
  }
}

const validName = () => {
  if (!name.validate(user.firstName)) {
    validation.name.isValid = false
    validation.name.message = name.invalidMessage()
  } else {
    validation.name.isValid = true
    validation.name.message = ''
  }
}

const validLastName = () => {
  if (!name.validate(user.lastName)) {
    validation.lastName.isValid = false
    validation.lastName.message = name.invalidMessage()
  } else {
    validation.lastName.isValid = true
    validation.lastName.message = ''
  }
}

const togglePassword = () => {
  const passwordInput = document.getElementById('password-input') as HTMLInputElement
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
</script>
<template>
  <div class="container mx-auto">
    <form @submit.prevent="" class="flex items-center justify-center">
      <div class="content-form w-[35rem]">
        <div class="title text-center">
          <h3>Registrarse</h3>
        </div>
        <div class="spacer h-[2rem]"></div>
        <div class="input flex flex-col">
          <label for="email">
            <p>Correo electrónico</p>
          </label>
          <input
            id="email"
            type="email"
            class="border border-gray-300 rounded px-5 py-3"
            placeholder="ejemplo@email.com"
            v-model="user.email"
            :class="{ 'border-red-200': !validation.username.isValid }"
            @focusout="validUsername"
          />
          <p v-if="validation.username.message" class="text-red-200">
            {{ validation.username.message }}
          </p>
          <label for="firstName">
            <p class="mt-4">Nombre</p>
          </label>
          <input
            id="firstName"
            type="text"
            class="border border-gray-300 rounded px-5 py-3"
            placeholder="Usuario"
            v-model="user.firstName"
            :class="{ 'border-red-200': !validation.name.isValid }"
            @focusout="validName"
          />
          <p v-if="validation.username.message" class="text-red-200">
            {{ validation.name.message }}
          </p>
          <label for="lastName">
            <p class="mt-4">Apellido</p>
          </label>
          <input
            id="lastName"
            type="text"
            class="border border-gray-300 rounded px-5 py-3"
            placeholder="Apellido"
            v-model="user.lastName"
            :class="{ 'border-red-200': !validation.lastName.isValid }"
            @focusout="validLastName"
          />
          <p v-if="validation.lastName.message" class="text-red-200">
            {{ validation.lastName.message }}
          </p>
          <label for="password">
            <p class="mt-4">Contraseña</p>
          </label>
          <div class="password">
            <input
              type="password"
              class="border border-gray-300 rounded px-5 py-3"
              placeholder="Contraseña"
              v-model="user.password"
              id="password-input"
            />
            <div class="btn-password" @click="togglePassword">
              <i id="iconPassword" class="bi bi-eye-fill"></i>
            </div>
          </div>
          <div class="h-[2rem]"></div>
          <PrimaryButton text="Registrarse" @click="onSubmit" />
        </div>
      </div>
    </form>
  </div>
  <ErrorAlert
    v-if="messageAlert && messageSuccess === ''"
    :show="messageAlert !== ''"
    :message="messageAlert"
    @close="messageAlert = ''"
  />
  <SuccessAlert
    v-if="messageSuccess"
    :show="messageSuccess !== ''"
    :message="messageSuccess"
    @close="messageSuccess = ''"
  />
</template>

<style scoped>
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
