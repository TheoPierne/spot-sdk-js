# bosdyn-client/gps/ntrip_client

An NTRIP client: it downloads the GPS corrections of an NTRIP caster and forwards them to the GPS device.

```js
const { NtripClient, NtripClientParams, SERVER_RECONNECT_DELAY, ... } = require('spot-sdk-js').gps;
```

| Export | Kind | Description |
|---|---|---|
| [`NtripClient`](#ntripclient) | Class | Client used to connect to an NTRIP server to download GPS corrections. |
| [`NtripClientParams`](#ntripclientparams) | Class | Class for storing parameters for connecting an NTRIP client to an NTRIP server. |
| [`SERVER_RECONNECT_DELAY`](#constants) | Constant |  |
| [`SOCKET_TIMEOUT`](#constants) | Constant |  |
| [`SOCKET_MAX_RECV_TIMEOUTS`](#constants) | Constant |  |
| [`DEFAULT_NTRIP_SERVER`](#constants) | Constant |  |
| [`DEFAULT_NTRIP_PORT`](#constants) | Constant |  |
| [`DEFAULT_NTRIP_TLS_PORT`](#constants) | Constant |  |

## NtripClient

```ts
class NtripClient
```

Client used to connect to an NTRIP server to download GPS corrections. These corrections are then forwarded on to the
GPS device using the given stream.

### new NtripClient

```ts
constructor(device: any, params: any, logger: any)
```

| Parameter | Type | Description |
|---|---|---|
| `device` | `any` |  |
| `params` | `any` |  |
| `logger` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `device` | `any` |  |
| `host` | `any` |  |
| `port` | `any` |  |
| `user` | `any` |  |
| `password` | `any` |  |
| `mountPoint` | `any` |  |
| `tls` | `any` |  |
| `reconnectSecs` | `any` |  |
| `streaming` | `boolean` |  |
| `sock` | `import("node:net").Socket \| null` | The socket connected to the NTRIP server, available for sending GGA. |
| `logger` | `any` |  |

### makeRequest

```ts
makeRequest(): Buffer
```

Make a connection request to an NTRIP server.

**Returns** `Buffer`

### startStream

```ts
startStream(): void
```

Start streaming data from an NTRIP server to a GPS receiver.

**Returns** `void`

### stopStream

```ts
stopStream(): Promise<void>
```

Stop streaming NTRIP data.

**Returns** `Promise<void>`: Resolves once the worker has ended, like Python's join().

### isStreaming

```ts
isStreaming(): boolean
```

Determine if we are streaming NTRIP data.

**Returns** `boolean`

### sendGGA

```ts
sendGGA(gga: string): boolean
```

Given a GPGGA message, send it to the NTRIP server. This helps the NTRIP server send corrections that are
applicable to the area in which the receiver is operating.

| Parameter | Type | Description |
|---|---|---|
| `gga` | `string` | The GGA sentence. |

**Returns** `boolean`: False if not connected.

### createIcySession

```ts
createIcySession(stopEvent?: Event): Promise<boolean>
```

NTRIP Rev1 uses Shoutcast (ICY). Create an ICY session to stream RTCM data.

| Parameter | Type | Description |
|---|---|---|
| `stopEvent` | `Event` | Set to stop the session. (*Optional*) |

**Returns** `Promise<boolean>`: True if the session was created: this.sock can send GGA sentences.

### streamData

```ts
streamData(stopEvent?: Event): Promise<void>
```

Stream NTRIP data from a connected server and send it to a GPS receiver.

| Parameter | Type | Description |
|---|---|---|
| `stopEvent` | `Event` | Set to stop streaming. (*Optional*) |

**Returns** `Promise<void>`: Resolves once the connection has ended.

### handleNtripData

```ts
handleNtripData(data: any): void
```

Callback for handling NTRIP data.

| Parameter | Type | Description |
|---|---|---|
| `data` | `any` |  |

### handleNmeaGga

```ts
handleNmeaGga(sentence: any): void
```

Process an NMEA-GGA sentence passed in as a string.

| Parameter | Type | Description |
|---|---|---|
| `sentence` | `any` |  |

## NtripClientParams

```ts
class NtripClientParams
```

Class for storing parameters for connecting an NTRIP client to an NTRIP server.

### new NtripClientParams

```ts
constructor(server?: string, port?: number, user?: string, password?: string, mountPoint?: string, useTls?: boolean, reconnectSecs?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `server` | `string` | (*Optional*) |
| `port` | `number` | (*Optional*) |
| `user` | `string` | (*Optional*) |
| `password` | `string` | (*Optional*) |
| `mountPoint` | `string` | (*Optional*) |
| `useTls` | `boolean` | (*Optional*) |
| `reconnectSecs` | `number` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `server` | `string` |  |
| `port` | `number` |  |
| `user` | `string` |  |
| `password` | `string` |  |
| `mountPoint` | `string` |  |
| `tls` | `boolean` |  |
| `reconnectSecs` | `number` |  |

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `SERVER_RECONNECT_DELAY` | `60` |  |
| `SOCKET_TIMEOUT` | `10` |  |
| `SOCKET_MAX_RECV_TIMEOUTS` | `12` |  |
| `DEFAULT_NTRIP_SERVER` | `''` |  |
| `DEFAULT_NTRIP_PORT` | `2101` |  |
| `DEFAULT_NTRIP_TLS_PORT` | `2102` |  |
