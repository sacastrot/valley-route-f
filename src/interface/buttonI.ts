/**
 * Interface for button component,
 *
 * This is the text that will be displayed on the button
 * @param text: string
 * This is the icon that will be displayed on the button
 * @param icon?: string
 * This is the icon that will be displayed on the left side of the button
 * @param leadIcon?: boolean
 * This is the icon that will be displayed on the right side of the button
 * @param tailIcon?: boolean
 * This will make the text bold
 * @param bold?: boolean
 * This will make the button outlined
 * @param outlined?: boolean
 * This will make the button loading
 * @param loading?: boolean
 */
export interface ButtonI {
  text: string
  icon?: string
  leadIcon?: boolean
  tailIcon?: boolean
  bold?: boolean
  outlined?: boolean
  loading?: boolean
}
