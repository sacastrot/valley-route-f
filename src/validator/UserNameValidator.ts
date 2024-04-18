import { Validator } from '@/models/abstract'

export class UserNameValidator extends Validator {
  private static regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  validate(value: string): boolean {
    return UserNameValidator.regex.test(value)
  }

  validMessage(): string {
    return ''
  }

  invalidMessage(): string {
    return 'Ingresa un correo válido'
  }
}
