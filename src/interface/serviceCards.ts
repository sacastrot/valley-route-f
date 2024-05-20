/**
 * Interface for Service Cards
 *
 * This is the title of the service card (required)
 * @param title: string
 * This is the description of the service card (required)
 * @param description: string
 * This is the icon of the service card (required)
 * @param icon: string
 * This is the route of the service card (required)
 * @param route: string
 */
export interface ServiceCardI {
  title: string
  description: string
  icon: string
  route: string
}
