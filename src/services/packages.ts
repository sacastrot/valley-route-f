/**
 * In this file, we define the service functions for manipulating company packages.
 *
 * These functions are used in the package controller to interact with the API.
 *
 * @requires baseRequest
 * This is the API service that is used to make requests to the API.
 */

// Axios instance for making requests to the API.
import baseRequest from '@/api/api.service'

// Error models for handling bad request and not found errors.
import { BadRequestError, NotFoundError } from '@/models/errors'

// Models for package and node data.
import NodeValley from '@/models/node'

// Package model for package data.
import Package from '@/models/package'

/**
 * Service functions for manipulating company packages.
 */
export const packageService = {
  getPackageList,
  getNodesList,
  createPackage,
  getPackage
}

/**
 * Retrieves a list of packages from the API.
 * @param page The page number for pagination.
 * @returns A promise that resolves with the list of packages and total pages.
 * @throws Error if there is an error while fetching the package list.
 */
async function getPackageList(page: number): Promise<{ list: Package[]; pages: number }> {
  try {
    const { data } = await baseRequest.get(`/packages?page=${page}`)

    const listPackages: Package[] = data.data.map((pkg: any) => {
      const createdAt = new Date(pkg.created_at)
      const newPackage = new Package(pkg.id, pkg.description, createdAt)
      newPackage.startNodeName = pkg.start_node
      newPackage.endNodeName = pkg.end_node
      return newPackage
    })

    return {
      list: listPackages,
      pages: data.total_pages
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error('Intenta de nuevo más tarde')
    }
  }
}

/**
 * Retrieves a list of nodes from the API.
 * @returns A promise that resolves with the list of nodes.
 * @throws Error if there is an error while fetching the node list.
 */
async function getNodesList(): Promise<NodeValley[]> {
  try {
    const { data } = await baseRequest.get('/node')

    const listNodes: NodeValley[] = data.map((node: any) => {
      return new NodeValley(node.id, node.lat, node.lng, node.name)
    })

    return listNodes
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error('Intenta de nuevo más tarde')
    }
  }
}

/**
 * Creates a new package via API request.
 * @param data An object containing package data including description, start node id, and end node id.
 * @throws Error if there is an error while creating the package.
 */
async function createPackage(data: {
  description: string
  start_node_id: string
  end_node_id: string
}): Promise<void> {
  try {
    await baseRequest.post('/package', data)
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error('Intenta de nuevo más tarde')
    }
  }
}

/**
 * Retrieves details of a package by its ID from the API.
 * @param id The ID of the package to retrieve.
 * @returns A promise that resolves with the package details.
 * @throws Error if the package is not found or there is an error while fetching the package details.
 */
async function getPackage(id: string): Promise<Package> {
  try {
    const { data } = await baseRequest.get(`/package/${id}`)

    const createdAt = new Date(data.created_at)
    const newPackage = new Package(data.id, data.description, createdAt)

    const startNode = new NodeValley(
      data.start_node.id,
      data.start_node.lat,
      data.start_node.lng,
      data.start_node.name
    )
    const endNode = new NodeValley(
      data.end_node.id,
      data.end_node.lat,
      data.end_node.lng,
      data.end_node.name
    )

    const path: NodeValley[] = data.path.map((node: any) => {
      return new NodeValley(node.id, node.lat, node.lng, node.name)
    })

    newPackage.startNode = startNode
    newPackage.endNode = endNode
    newPackage.path = path
    newPackage.distance = data.distance

    return newPackage
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw new Error('No se encontró el paquete solicitado')
    }
    throw new Error('Intenta de nuevo más tarde')
  }
}
