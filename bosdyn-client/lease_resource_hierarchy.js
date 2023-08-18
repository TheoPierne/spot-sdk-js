'use strict';

class ResourceHierarchy {
  constructor(resource_tree_proto) {
    this._resource_tree = resource_tree_proto;
    this._sub_hierarchies = {};
    this._leaf_resources = new Set();

    if (this._resource_tree.getResourcesList().length === 0) {
      this._leaf_resources.add(this._resource_tree.getResourcesList());
    }

    for (const sub_tree of this._resource_tree.getResourcesList()) {
      const new_sub_hierarchy = new ResourceHierarchy(sub_tree);
      this._sub_hierarchies[sub_tree.getResource()] = new_sub_hierarchy;

      for (const resc in new_sub_hierarchy._sub_hierarchies) {
        this._sub_hierarchies[resc] = new_sub_hierarchy._sub_hierarchies[resc];
      }
      for (const leaf in new_sub_hierarchy._leaf_resources) {
        this._leaf_resources.add(leaf);
      }
    }
  }

  has_resources(resource) {
    return resource === this._resource_tree.getResource() || resource in this._sub_hierarchies;
  }

  has_sub_resources() {
    return Object.keys(this._sub_hierarchies).length > 0;
  }

  get_resource() {
    return this._resource_tree.getResource();
  }

  get_resource_tree() {
    return this._resource_tree;
  }

  leaf_resources() {
    return this._leaf_resources;
  }

  get_hierarchy(resource) {
    if (resource === this.getResource()) {
      return this;
    }
    if (resource in this._sub_hierarchies) {
      return this._sub_hierarchies[resource];
    }
    return null;
  }

  equals(other) {
    return JSON.stringify(this) === JSON.stringify(other);
  }
}

module.exports = {
  ResourceHierarchy,
};
