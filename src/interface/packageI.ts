/**
 * Package Interface
 *
 * This is the id of the package (required)
 * @param id: number
 * This is the description of the package (required)
 * @param description: string
 * This is the createdAt of the package (required)
 * @param createdAt: string
 * This is the startNodeName of the package (required)
 * @param startNodeName: string
 * This is the endNodeName of the package (required)
 */
export interface PackageI {
  id: number
  description: string
  createdAt: string
  startNodeName: string
  endNodeName: string
}
