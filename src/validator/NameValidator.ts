import { Validator } from '@/models/abstract'

export class NameValidator extends Validator {
  private static regex = /^[a-zA-Z\s]*$/
  validate(value: string): boolean {
    return NameValidator.regex.test(value)
  }

  validMessage(): string {
    return ''
  }

  invalidMessage(): string {
    return 'El nombre debe contener solo letras y espacios, máximo 50 caracteres'
  }
}
