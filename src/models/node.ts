/**
 * This class represents a checkpoint in the map.
 */
export default class NodeValley {
  /**
   * Unique identifier of the checkpoint.
   */
  id: number

  /**
   * Latitude of the checkpoint.
   */
  lat: number

  /**
   * Longitude of the checkpoint.
   */
  lng: number

  /**
   * Name or label of the checkpoint.
   */
  name: string

  /**
   * Creates an instance of NodeValley.
   * @param id Unique identifier of the checkpoint.
   * @param lat Latitude of the checkpoint.
   * @param lng Longitude of the checkpoint.
   * @param name Name or label of the checkpoint.
   */
  constructor(id: number, lat: number, lng: number, name: string) {
    this.id = id
    this.lat = lat
    this.lng = lng
    this.name = name
  }
}
