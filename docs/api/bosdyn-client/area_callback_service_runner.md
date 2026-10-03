# bosdyn-client/area_callback_service_runner

Runs an area callback service: a gRPC server for the servicer, registered in the directory of the robot and
kept registered, like bosdyn.client.area_callback_service_runner in Python.

```js
const { runService } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`runService`](#runservice) | Function | Helper function to start AreaCallback service and register it with directory keep alive. |

## runService

```ts
export function runService(robot: Robot, service: AreaCallbackServiceServicer, port: number, hostIp: string): Promise<[GrpcServiceRunner, DirectoryRegistrationKeepAlive]>
```

Helper function to start AreaCallback service and register it with directory keep alive.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | Robot object to use for directory registration. |
| `service` | `AreaCallbackServiceServicer` | The AreaCallbackService implementation. |
| `port` | `number` | Port the AreaCallback service should connect to (0 for an ephemeral port). |
| `hostIp` | `string` | The IP address of the computer hosting this endpoint. |

**Returns** `Promise<[GrpcServiceRunner, DirectoryRegistrationKeepAlive]>`: Once the service is started and its registration kept alive.
