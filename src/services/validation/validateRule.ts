/**
 * The shape of the validation rules.
 * This is used to define the validation rules for different entities and fields.
 * The rules are used to validate the fields of the entities.
 */
export default interface ValidationRules {
  [entity: string]: {
    [field: string]: {
      min?: number
      max?: number
      regex?: RegExp
      message: string
    }
  }
}
