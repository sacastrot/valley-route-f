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
      message: 'Please enter a valid email address.'
    },
    password: {
      regex: passwordRegex,
      message: 'Please enter a valid password.'
    }
  },
  // Validation rules for reset password fields
  reset: {
    email: {
      regex: emailRegex,
      message: 'Please enter a valid email address.'
    },
    new_password: {
      regex: passwordRegex,
      message: 'Please enter a valid password.'
    }
  },
  // Validation rules for user fields
  user: {
    email: {
      regex: emailRegex,
      message: 'Please enter a valid email address.'
    },
    password: {
      regex: passwordRegex,
      message: 'Please enter a valid password.'
    },
    firstName: {
      regex: minMaxRegex(2, 30),
      message: 'First name must be between 2 and 30 characters long.'
    },
    lastName: {
      regex: minMaxRegex(0, 30),
      message: 'Last name must be between 2 and 30 characters long.'
    }
  },
  // Validation rules for new package fields
  newpackage: {
    description: {
      regex: minMaxRegex(2, 50),
      message: 'Description must be between 2 and 50 characters long.'
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
