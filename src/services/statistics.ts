/**
 * In this file define all services related to statistics.
 * These services are meant to be used to fetch statistics related to nodes.
 *
 * The services are defined as functions that make requests to the API to fetch the statistics.
 *
 * @requires baseRequest
 * his is the API service that is used to make requests to the API.
 */

// Axios instance for making requests to the API.
import baseRequest from '@/api/api.service'

// Error models for handling bad request, not found, and unknown errors.
import { BadRequestError, NotFoundError, UnknownError } from '@/models/errors'

/**
 * Service functions for retrieving statistics related to nodes.
 */
export const statisticsService = {
  getNodeStartStatistics,
  getNodeEndStatistics
}

/**
 * Retrieves statistics related to the starting nodes.
 * @returns A promise that resolves with the node start statistics.
 * @throws Error if there is an error while fetching the statistics.
 */
async function getNodeStartStatistics(): Promise<string> {
  try {
    const { data } = await baseRequest.get('/statistics/nodestart')
    return data
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error('Intenta de nuevo más tarde')
    } else if (error instanceof NotFoundError) {
      throw new Error('No hay datos disponibles')
    } else if (error instanceof UnknownError) {
      throw new Error('Ocurrió un error inesperado, intenta de nuevo más tarde')
    } else {
      throw new Error('Error al obtener las estadísticas de inicio de nodos')
    }
  }
}

/**
 * Retrieves statistics related to the ending nodes.
 * @returns A promise that resolves with the node end statistics.
 * @throws Error if there is an error while fetching the statistics.
 */
async function getNodeEndStatistics(): Promise<string> {
  try {
    const { data } = await baseRequest.get('/statistics/nodeend')
    return data
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error('Intenta de nuevo más tarde')
    } else if (error instanceof NotFoundError) {
      throw new Error('No hay datos disponibles')
    } else if (error instanceof UnknownError) {
      throw new Error('Ocurrió un error inesperado, intenta de nuevo más tarde')
    } else {
      throw new Error('Error al obtener las estadísticas de fin de nodos')
    }
  }
}
