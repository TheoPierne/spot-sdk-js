# bosdyn-client/graph_nav_upload

Upload a graph and all of its snapshots from the standard file layout to a robot, like
bosdyn.client.graph_nav_upload of the Python SDK 5.2.0. Command line: node graph_nav_upload.js ROBOT DIRECTORY

```js
const { uploadFromDisk } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { main } = require('spot-sdk-js/src/bosdyn-client/graph_nav_upload');
```

| Export | Kind | Description |
|---|---|---|
| [`uploadFromDisk`](#uploadfromdisk) | Function | Helper function to upload a graph and all snapshots to a robot. |
| [`main`](#main) | Function | Command-line interface: upload a graph and all snapshots to a robot. |

## uploadFromDisk

```ts
export function uploadFromDisk(client: GraphNavClient, graphDirectory: string, graphFile?: string | null): Promise<void>
```

Helper function to upload a graph and all snapshots to a robot. Only supports robots running 5.1.0 or later.

This function does not provide much customization. If you need more complicated control of timeouts, async calls,
or anything else, please copy the details out and modify them for your use case.

| Parameter | Type | Description |
|---|---|---|
| `client` | `GraphNavClient` | GraphNavClient to use for the upload. |
| `graphDirectory` | `string` | Path to the directory containing the graph and snapshots. Follows the standard file structure and naming conventions. |
| `graphFile` | `string \| null` | Optional path to the graph file. If the path is not absolute, it will be interpreted as relative to the graphDirectory. (*Optional*, default `null`) |

**Returns** `Promise<void>`

## main

```ts
export function main(args?: string[] | null): Promise<number>
```

Command-line interface: upload a graph and all snapshots to a robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `string[] \| null` | The arguments (those of the process if null). (*Optional*, default `null`) |

**Returns** `Promise<number>`: The exit code.
