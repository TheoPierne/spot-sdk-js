# bosdyn-client/graph_nav_download

Download a graph and all of its snapshots from a robot into the standard file layout, like
bosdyn.client.graph_nav_download of the Python SDK 5.2.0. Command line: node graph_nav_download.js ROBOT DIRECTORY

```js
const { downloadToDisk } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { main } = require('spot-sdk-js/src/bosdyn-client/graph_nav_download');
```

| Export | Kind | Description |
|---|---|---|
| [`downloadToDisk`](#downloadtodisk) | Function | Helper function to download a graph and all snapshots from a robot into the standard file layout: the files `graph`, `waypoint_snapshots/<snapshot id>` and `edge_snapshots/<snapshot id>`. |
| [`main`](#main) | Function | Command-line interface: download a graph and all snapshots from a robot. |

## downloadToDisk

```ts
export function downloadToDisk(client: GraphNavClient, downloadDirectory: string, skipExistingSnapshots?: boolean): Promise<void>
```

Helper function to download a graph and all snapshots from a robot into the standard file layout: the files
`graph`, `waypoint_snapshots/<snapshot id>` and `edge_snapshots/<snapshot id>`.

This function does not provide much customization. If you need more complicated control of timeouts, async calls,
or anything else, please copy the details out and modify them for your use case.

| Parameter | Type | Description |
|---|---|---|
| `client` | `GraphNavClient` | GraphNavClient to use for the download. |
| `downloadDirectory` | `string` | Path to the directory in which to save the downloaded graph and snapshots. |
| `skipExistingSnapshots` | `boolean` | If true, will not redownload any files that already exist in the snapshot directories. (*Optional*, default `true`) |

**Returns** `Promise<void>`

## main

```ts
export function main(args?: string[] | null): Promise<number>
```

Command-line interface: download a graph and all snapshots from a robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `string[] \| null` | The arguments (those of the process if null). (*Optional*, default `null`) |

**Returns** `Promise<number>`: The exit code.
