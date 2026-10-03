# bosdyn-client/lease_resource_hierarchy

Helper for managing hierarchy of lease resources.

```js
const { ResourceHierarchy } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ResourceHierarchy`](#resourcehierarchy) | Class | Helper for managing hierarchy of lease resources. |

## ResourceHierarchy

```ts
class ResourceHierarchy
```

Helper for managing hierarchy of lease resources.

### new ResourceHierarchy

```ts
constructor(resourceTreeProto: any)
```

| Parameter | Type | Description |
|---|---|---|
| `resourceTreeProto` | `any` |  |

### hasResource

```ts
hasResource(resource: string): boolean
```

Return a boolean indicating if the resource is in this hierarchy.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | The resource to verify |

**Returns** `boolean`

### hasSubResources

```ts
hasSubResources(): boolean
```

Return a boolean indicating whether this hierarchy has sub-trees.

**Returns** `boolean`

### getResource

```ts
getResource(): string
```

Get the root resource string for this hierarchy.

**Returns** `string`

### getResourceTree

```ts
getResourceTree(): ResourceTree
```

Get the resource tree protobuf message corresponding with this hierarchy.

**Returns** `ResourceTree`

### leafResources

```ts
leafResources(): Set<string>
```

Get a set of all leaf resources in this tree.

**Returns** `Set<string>`

### getHierarchy

```ts
getHierarchy(resource: string): ResourceHierarchy | null
```

Get the sub-tree corresponding to the specified resource.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | The root resource for the hierarchy. |

**Returns** `ResourceHierarchy \| null`

### equals

```ts
equals(other: ResourceHierarchy): boolean
```

Compare to another ResourceHierarchy object

| Parameter | Type | Description |
|---|---|---|
| `other` | `ResourceHierarchy` | The ResourceHierarchy object to compare |

**Returns** `boolean`
