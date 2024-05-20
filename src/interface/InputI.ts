/**
 * Interface for Input component
 *
 * This is the id of the input (required)
 * @param id: string
 * This is the type of the input (required)
 * @param type: string
 * This is the placeholder of the input (required)
 * @param placeholder: string
 * This is the value of the input (required)
 * @param modelValue: string
 * This is the label of the input
 * @param label?: string
 * This is the icon of the input
 * @param icon?: string
 * This will make the input readonly
 * @param readonly?: boolean
 * This will make the input disabled
 * @param disabled?: boolean
 * This is the rules of the input
 * @param rules?: string[]
 * This is the error message of the input
 * @param errorMessage?: string
 * This will make the input error
 * @param error?: boolean
 */
export default interface InputI {
  id: string
  type: string
  placeholder: string
  modelValue: string
  label?: string
  icon?: string
  readonly?: boolean
  disabled?: boolean
  rules?: string[]
  errorMessage?: string
  error?: boolean
}
