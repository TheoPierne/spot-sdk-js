'use strict';

/**
 * Helper for managing hierarchy of lease resources.
 */
class ResourceHierarchy {
  constructor(resourceTreeProto) {
    /** @type {leasePb.ListLeasesResponse} */
    this._resourceTree = resourceTreeProto;

    /**
     * Map tracking sub hierarchies with the key: resource (string),
     * and value = ResourceHierarchy obj rooted at the key's resource.
     * @type {Object<string, ResourceHierarchy>}
     */
    this._subHierarchies = {};

    /**
     * Set of the lease resources (strings) in this hierarchy.
     * @type {Set<string>}
     */
    this._leafResources = new Set();

    if (this._resourceTree.getSubResourcesList().length === 0) {
      this._leafResources.add(this._resourceTree.getResource());
      return;
    }

    for (const subTree of this._resourceTree.getSubResourcesList()) {
      const newSubHierarchy = new ResourceHierarchy(subTree);
      this._subHierarchies[subTree.getResource()] = newSubHierarchy;

      for (const resc in newSubHierarchy._subHierarchies) {
        this._subHierarchies[resc] = newSubHierarchy._subHierarchies[resc];
      }
      for (const leaf of newSubHierarchy._leafResources) {
        this._leafResources.add(leaf);
      }
    }
  }

  /**
   * Return a boolean indicating if the resource is in this hierarchy.
   * @param {string} resource The resource to verify
   * @returns {boolean}
   */
  hasResource(resource) {
    return resource === this._resourceTree.getResource() || resource in this._subHierarchies;
  }

  /**
   * Return a boolean indicating whether this hierarchy has sub-trees.
   * @returns {boolean}
   */
  hasSubResources() {
    return Object.keys(this._subHierarchies).length > 0;
  }

  /**
   * Get the root resource string for this hierarchy.
   * @returns {string}
   */
  getResource() {
    return this._resourceTree.getResource();
  }

  /**
   * Get the resource tree protobuf message corresponding with this hierarchy.
   * @returns {leasePb.ResourceTree}
   */
  getResourceTree() {
    return this._resourceTree;
  }

  /**
   * Get a set of all leaf resources in this tree.
   * @returns {Set<string>}
   */
  leafResources() {
    return this._leafResources;
  }

  /**
   * Get the sub-tree corresponding to the specified resource.
   * @param {string} resource The root resource for the hierarchy.
   * @returns {ResourceHierarchy|null}
   */
  getHierarchy(resource) {
    if (resource === this.getResource()) {
      return this;
    }
    if (resource in this._subHierarchies) {
      return this._subHierarchies[resource];
    }
    return null;
  }

  /**
   * Compare to another ResourceHierarchy object
   * @param {ResourceHierarchy} other The ResourceHierarchy object to compare
   * @returns {boolean}
   */
  equals(other) {
    return JSON.stringify(this) === JSON.stringify(other);
  }
}

module.exports = {
  ResourceHierarchy,
};
