var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { g as baseRequest, C as BadRequestError, N as NotFoundError } from "./index-DxEj1PVZ.js";
class Package {
  /**
   * Creates an instance of Package.
   * @param id Unique identifier of the package.
   * @param description Description of the package.
   * @param createdAt Date and time when the package was created.
   */
  constructor(id, description, createdAt) {
    /**
     * Unique identifier of the package.
     */
    __publicField(this, "id");
    /**
     * Description of the package.
     */
    __publicField(this, "description");
    /**
     * Date and time when the package was created.
     */
    __publicField(this, "createdAt");
    /**
     * Name of the starting node for the package's journey.
     */
    __publicField(this, "startNodeName", "");
    /**
     * Name of the ending node for the package's journey.
     */
    __publicField(this, "endNodeName", "");
    /**
     * Starting node for the package's journey.
     */
    __publicField(this, "startNode", null);
    /**
     * Ending node for the package's journey.
     */
    __publicField(this, "endNode", null);
    /**
     * Path of nodes the package will traverse.
     */
    __publicField(this, "path", []);
    /**
     * Distance of the package's journey in meters.
     */
    __publicField(this, "distance", 0);
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
  }
  /**
   * Gets the creation date of the package in a locale-specific string format.
   */
  get created() {
    return this.createdAt.toLocaleDateString();
  }
  /**
   * Gets the name of the starting node for the package's journey.
   */
  get startName() {
    var _a;
    return ((_a = this.startNode) == null ? void 0 : _a.name) || this.startNodeName;
  }
  /**
   * Gets the name of the ending node for the package's journey.
   */
  get endName() {
    var _a;
    return ((_a = this.endNode) == null ? void 0 : _a.name) || this.endNodeName;
  }
  /**
   * Gets the distance of the package's journey in kilometers.
   */
  get distanceKm() {
    const distKm = this.distance / 1e3;
    return distKm.toFixed(2);
  }
}
class NodeValley {
  /**
   * Creates an instance of NodeValley.
   * @param id Unique identifier of the checkpoint.
   * @param lat Latitude of the checkpoint.
   * @param lng Longitude of the checkpoint.
   * @param name Name or label of the checkpoint.
   */
  constructor(id, lat, lng, name) {
    /**
     * Unique identifier of the checkpoint.
     */
    __publicField(this, "id");
    /**
     * Latitude of the checkpoint.
     */
    __publicField(this, "lat");
    /**
     * Longitude of the checkpoint.
     */
    __publicField(this, "lng");
    /**
     * Name or label of the checkpoint.
     */
    __publicField(this, "name");
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.name = name;
  }
}
const packageService = {
  getPackageList,
  getNodesList,
  createPackage,
  getPackage
};
async function getPackageList(page) {
  try {
    const { data } = await baseRequest.get(`/packages?page=${page}`);
    const listPackages = data.data.map((pkg) => {
      const createdAt = new Date(pkg.created_at);
      const newPackage = new Package(pkg.id, pkg.description, createdAt);
      newPackage.startNodeName = pkg.start_node;
      newPackage.endNodeName = pkg.end_node;
      return newPackage;
    });
    return {
      list: listPackages,
      pages: data.total_pages
    };
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error("Intenta de nuevo más tarde");
    } else {
      throw new Error("Error al obtener la lista de paquetes");
    }
  }
}
async function getNodesList() {
  try {
    const { data } = await baseRequest.get("/node");
    const listNodes = data.map((node) => {
      return new NodeValley(node.id, node.lat, node.lng, node.name);
    });
    return listNodes;
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error("Intenta de nuevo más tarde");
    } else {
      throw new Error("Error al obtener la lista de nodos");
    }
  }
}
async function createPackage(data) {
  try {
    await baseRequest.post("/package", data);
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error("Intenta de nuevo más tarde");
    }
  }
}
async function getPackage(id) {
  try {
    const { data } = await baseRequest.get(`/package/${id}`);
    const createdAt = new Date(data.created_at);
    const newPackage = new Package(data.id, data.description, createdAt);
    const startNode = new NodeValley(
      data.start_node.id,
      data.start_node.lat,
      data.start_node.lng,
      data.start_node.name
    );
    const endNode = new NodeValley(
      data.end_node.id,
      data.end_node.lat,
      data.end_node.lng,
      data.end_node.name
    );
    const path = data.path.map((node) => {
      return new NodeValley(node.id, node.lat, node.lng, node.name);
    });
    newPackage.startNode = startNode;
    newPackage.endNode = endNode;
    newPackage.path = path;
    newPackage.distance = data.distance;
    return newPackage;
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw new Error("No se encontró el paquete solicitado");
    }
    throw new Error("Intenta de nuevo más tarde");
  }
}
export {
  packageService as p
};
//# sourceMappingURL=packages-CoO_FBBy.js.map
