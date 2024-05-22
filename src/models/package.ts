import type NodeValley from './node'

/**
 * Represents a package to be shipped.
 */
export default class Package {
  /**
   * Unique identifier of the package.
   */
  id: number

  /**
   * Description of the package.
   */
  description: string

  /**
   * Date and time when the package was created.
   */
  createdAt: Date

  /**
   * Name of the starting node for the package's journey.
   */
  startNodeName: string = ''

  /**
   * Name of the ending node for the package's journey.
   */
  endNodeName: string = ''

  /**
   * Starting node for the package's journey.
   */
  startNode: NodeValley | null = null

  /**
   * Ending node for the package's journey.
   */
  endNode: NodeValley | null = null

  /**
   * Path of nodes the package will traverse.
   */
  path: NodeValley[] = []

  /**
   * Distance of the package's journey in meters.
   */
  distance: number = 0

  /**
   * Creates an instance of Package.
   * @param id Unique identifier of the package.
   * @param description Description of the package.
   * @param createdAt Date and time when the package was created.
   */
  constructor(id: number, description: string, createdAt: Date) {
    this.id = id
    this.description = description
    this.createdAt = createdAt
  }

  /**
   * Gets the creation date of the package in a locale-specific string format.
   */
  get created() {
    const mothNames: { [key: string]: string } = {
      0: 'Enero',
      1: 'Febrero',
      2: 'Marzo',
      3: 'Abril',
      4: 'Mayo',
      5: 'Junio',
      6: 'Julio',
      7: 'Agosto',
      8: 'Septiembre',
      9: 'Octubre',
      10: 'Noviembre',
      11: 'Diciembre'
    }
    const day = this.createdAt.getDate()
    const month = mothNames[this.createdAt.getMonth()]
    const year = this.createdAt.getFullYear()

    return `${day} de ${month} ${year}`
  }

  /**
   * Gets the name of the starting node for the package's journey.
   */
  get startName() {
    return this.startNode?.name || this.startNodeName
  }

  /**
   * Gets the name of the ending node for the package's journey.
   */
  get endName() {
    return this.endNode?.name || this.endNodeName
  }

  /**
   * Gets the distance of the package's journey in kilometers.
   */
  get distanceKm() {
    const distKm = this.distance / 1000
    return distKm.toFixed(2)
  }
}
