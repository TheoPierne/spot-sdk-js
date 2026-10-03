# bosdyn-client/bddf_download

Code for downloading robot data in bddf format.

```js
const { downloadData, DEFAULT_OUTPUT } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { main } = require('spot-sdk-js/src/bosdyn-client/bddf_download');
```

| Export | Kind | Description |
|---|---|---|
| [`downloadData`](#downloaddata) | Function | Download data from robot in bddf format. |
| [`main`](#main) | Function | Command-line interface. |
| [`DEFAULT_OUTPUT`](#constants) | Constant |  |

## downloadData

```ts
export function downloadData(robot: Robot, hostname: string, startNsec?: number | null, endNsec?: number | null, timespanSpec?: string | null, outputFilename?: string | null, robotTime?: boolean, channel?: string | null, messageType?: string | null, grpcService?: string | null, showProgress?: boolean): Promise<string | null>
```

Download data from robot in bddf format. Like Python, the certificate of the robot is not checked.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | API robot object, authenticated. |
| `hostname` | `string` | Hostname/ip-address of robot. |
| `startNsec` | `number \| null` | Start time of log. (*Optional*, default `null`) |
| `endNsec` | `number \| null` | End time of log. (*Optional*, default `null`) |
| `timespanSpec` | `string \| null` | If startNsec and endNsec are null, string representing the timespan to download. (*Optional*, default `null`) |
| `outputFilename` | `string \| null` | Name of the file to write, by default the name given by the robot. (*Optional*, default `null`) |
| `robotTime` | `boolean` | If true, timespan is in robot clock, if false, in host clock. (*Optional*, default `false`) |
| `channel` | `string \| null` | If set, limit data to download to a specific channel. (*Optional*, default `null`) |
| `messageType` | `string \| null` | If set, limit data by specified message-type. (*Optional*, default `null`) |
| `grpcService` | `string \| null` | If set, limit GRPC log data by name of service. (*Optional*, default `null`) |
| `showProgress` | `boolean` | Print a dot for each chunk of the download. (*Optional*, default `false`) |

**Returns** `Promise<string \| null>`: Output filename, or null on error.

**Throws**

- `NotEstablishedError` Time sync with the robot could not be established.
- `Error` The robot answered with an HTTP error (e.g. 401 for a bad token), or the download failed.

## main

```ts
export function main(): Promise<number>
```

Command-line interface.

**Returns** `Promise<number>`: The exit code.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `DEFAULT_OUTPUT` | `'./download.bddf'` |  |
