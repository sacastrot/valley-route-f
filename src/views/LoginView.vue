<script setup lang="ts">
import PrimaryButton from '@/components/utilities/PrimaryButton.vue'
import ErrorAlert from '@/components/alert/ErrorAlert.vue'
import { UserNameValidator } from '@/validator'
import { reactive, ref } from 'vue'
import { usePost } from '@/composables/fetch'
import { useStoreUser } from '@/stores/user'
import router from '@/router'

const userStore = useStoreUser()

const user = reactive({
  email: '',
  password: ''
})

const validation = reactive({
  username: {
    isValid: true,
    message: ''
  }
})

const messageAlert = ref('')

const validUsername = () => {
  if (!username.validate(user.email)) {
    validation.username.isValid = false
    validation.username.message = username.invalidMessage()
  } else {
    validation.username.isValid = true
    validation.username.message = ''
  }
}

const username = new UserNameValidator()

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

const requestLogin = async () => {
  if (user.email === '' || user.password === '') {
    messageAlert.value = 'Por favor, rellene todos los campos'
    return
  }
  const formData = new FormData()
  formData.append('username', user.email)
  formData.append('password', user.password)
  formData.append('grant_type', '')
  formData.append('client_id', '')
  formData.append('client_secret', '')
  formData.append('scope', '')
  const { data, error } = await usePost('/auth/token', formData)

  console.log('Data from login', data.value)
  console.log('Error from login', error.value)

  if (error.value !== '') {
    messageAlert.value = error.value
    return
  } else {
    messageAlert.value = ''
  }
  // @ts-ignore
  if (data.value.access_token) {
    messageAlert.value = 'Usuario o contraseña incorrectos'
    // @ts-ignore
    const token = data.value.access_token
    const payload = decodeToken(token)
    userStore.user.email = payload.email
    userStore.user.token = token

    window.localStorage.setItem(
      'userData',
      btoa(JSON.stringify({ token: token, email: payload.email }))
    )
    router.push({ name: 'home' })
    return
  }
  // @ts-ignore
}

function decodeToken(token: string) {
  const payload = token.split('.')[1]
  const decodedPayload = atob(payload)
  return JSON.parse(decodedPayload)
}
</script>
<template>
  <div class="w-100 container-form">
    <form @submit.prevent="">
      <div class="container mx-auto">
        <div class="flex items-center justify-center h-full">
          <div class="w-[30rem]">
            <h3 class="text-center">Iniciar sesión</h3>
            <div class="flex flex-col gap-3 mt-5">
              <input
                type="email"
                class="border border-gray-300 rounded px-5 py-3"
                placeholder="Correo electrónico"
                v-model="user.email"
                :class="{ 'border-red-200': !validation.username.isValid }"
                @focusout="validUsername"
              />
              <p v-if="validation.username.message" class="text-red-200">
                {{ validation.username.message }}
              </p>
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
              <div class="h-[1rem]"></div>
              <PrimaryButton text="Iniciar sesión" @click="requestLogin" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <ErrorAlert
    v-if="messageAlert"
    :show="messageAlert !== ''"
    :message="messageAlert"
    @close="messageAlert = ''"
  />
</template>

<style scoped>
.container-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - (6.3rem + 15rem));

  form {
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
}
</style>
