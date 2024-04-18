import baseRequest from '@/api/api.service'
import { BadRequestError, NotFoundError, UnauthorizedError, UnknownError } from '@/models/errors'
import { ref } from 'vue'

export async function useGet(url: string) {
  const data = ref<null | any>()
  const error = ref('')

  try {
    data.value = await baseRequest.get(url)
  } catch (err) {
    if (err instanceof NotFoundError) {
      error.value = 'Not found'
    } else if (err instanceof UnauthorizedError) {
      if (err.message.includes('Incorrect')) {
        error.value = 'Email o contraseña incorrectos'
      }
      error.value = err.message
    } else if (err instanceof UnknownError) {
      error.value = 'Unknown error'
    } else if (err instanceof BadRequestError) {
      error.value = 'Bad request'
    } else {
      error.value = 'Unknown error'
    }
  }

  return { data, error }
}

export async function usePost(url: string, body: any) {
  const data = ref('')
  const error = ref('')

  try {
    data.value = await baseRequest.post(url, body)
  } catch (err) {
    if (err instanceof NotFoundError) {
      error.value = 'Not found'
    } else if (err instanceof UnauthorizedError) {
      if (err.message.includes('Incorrect')) {
        error.value = 'Email o contraseña incorrectos'
      } else {
        error.value = err.message
      }
    } else if (err instanceof UnknownError) {
      error.value = 'Unknown error'
    } else if (err instanceof BadRequestError) {
      if (err.message.includes('already')) {
        error.value = 'Ya tienes una cuenta registrada con este email'
      }
    }
  }

  return { data, error }
}
