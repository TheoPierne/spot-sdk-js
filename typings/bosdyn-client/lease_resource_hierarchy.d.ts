export type ResourceTree = import("../../src/bosdyn/api/lease_pb").ResourceTree;
/**
 * @typedef {import('../../src/bosdyn/api/lease_pb').ResourceTree} ResourceTree
 */
/**
 * Helper for managing hierarchy of lease resources.
 */
export class ResourceHierarchy {
    constructor(resourceTreeProto: any);
    /** @type {ResourceTree} */
    _resourceTree: ResourceTree;
    /**
     * Map tracking sub hierarchies with the key: resource (string),
     * and value = ResourceHierarchy obj rooted at the key's resource.
     * @type {Object<string, ResourceHierarchy>}
     */
    _subHierarchies: {
        [x: string]: ResourceHierarchy;
    };
    /**
     * Set of the lease resources (strings) in this hierarchy.
     * @type {Set<string>}
     */
    _leafResources: Set<string>;
    /**
     * Return a boolean indicating if the resource is in this hierarchy.
     * @param {string} resource The resource to verify
     * @returns {boolean}
     */
    hasResource(resource: string): boolean;
    /**
     * Return a boolean indicating whether this hierarchy has sub-trees.
     * @returns {boolean}
     */
    hasSubResources(): boolean;
    /**
     * Get the root resource string for this hierarchy.
     * @returns {string}
     */
    getResource(): string;
    /**
     * Get the resource tree protobuf message corresponding with this hierarchy.
     * @returns {ResourceTree}
     */
    getResourceTree(): ResourceTree;
    /**
     * Get a set of all leaf resources in this tree.
     * @returns {Set<string>}
     */
    leafResources(): Set<string>;
    /**
     * Get the sub-tree corresponding to the specified resource.
     * @param {string} resource The root resource for the hierarchy.
     * @returns {ResourceHierarchy|null}
     */
    getHierarchy(resource: string): ResourceHierarchy | null;
    /**
     * Compare to another ResourceHierarchy object
     * @param {ResourceHierarchy} other The ResourceHierarchy object to compare
     * @returns {boolean}
     */
    equals(other: ResourceHierarchy): boolean;
}
