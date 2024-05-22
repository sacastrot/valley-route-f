import type ValidationRules from './validateRule'

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_.&$])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/

// Regular expression generator for min and max length validation
const minMaxRegex = (min: number, max: number) => new RegExp(`^.{${min},${max}}$`)

/**
 * Validation rules for different entities and fields.
 */
const validationRules: ValidationRules = {
  // Validation rules for login fields
  login: {
    email: {
      regex: emailRegex,
      message: 'Por foavor, ingrese un correo electrónico válido.'
    },
    password: {
      regex: passwordRegex,
      message: 'Por favor, ingrese una contraseña válida.'
    }
  },
  // Validation rules for reset password fields
  reset: {
    email: {
      regex: emailRegex,
      message: 'Por foavor, ingrese un correo electrónico válido.'
    },
    new_password: {
      regex: passwordRegex,
      message: 'Por favor, ingrese una contraseña válida.'
    }
  },
  // Validation rules for user fields
  user: {
    email: {
      regex: emailRegex,
      message: 'Por foavor, ingrese un correo electrónico válido.'
    },
    password: {
      regex: passwordRegex,
      message: 'Por favor, ingrese una contraseña válida.'
    },
    firstName: {
      regex: minMaxRegex(2, 30),
      message: 'El nombre debe tener entre 2 y 30 caracteres.'
    },
    lastName: {
      regex: minMaxRegex(0, 30),
      message: 'El apellido debe tener entre 0 y 30 caracteres.'
    }
  },
  // Validation rules for new package fields
  newpackage: {
    description: {
      regex: minMaxRegex(2, 50),
      message: 'La descripción debe tener entre 2 y 50 caracteres.'
    }
  }
}

/**
 * Function to validate a field based on entity and field name.
 * @param entity - The entity for which validation is being performed.
 * @param field - The field name to be validated.
 * @param value - The value to be validated.
 * @returns An error message if validation fails, otherwise an empty string.
 */
export default function validateField(entity: string, field: string, value: string): string {
  const rules = validationRules[entity]
  if (!rules) return ''

  const rule = rules[field]
  if (!rule) return ''

  const valid = rule.regex?.test(value)

  if (!valid) {
    return rule.message
  } else {
    return ''
  }
}
