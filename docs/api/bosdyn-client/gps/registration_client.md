# bosdyn-client/gps/registration_client

Client for the GPS registration service: the registration of the GPS in the frame of the robot.

```js
const { RegistrationClient } = require('spot-sdk-js').gps;
```

| Export | Kind | Description |
|---|---|---|
| [`RegistrationClient`](#registrationclient) | Class | Client for the GPS Registration service. |

## RegistrationClient

```ts
class RegistrationClient extends BaseClient<RegistrationServiceClient>
```

Client for the GPS Registration service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'gps-registration'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.gps.RegistrationService'`. |

### getLocation

```ts
getLocation(args?: Object): Promise<registrationPb.GetLocationResponse>
```

Get location

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Options to provide for gRPC request. (*Optional*) |

**Returns** `Promise<registrationPb.GetLocationResponse>`

### resetRegistration

```ts
resetRegistration(args?: Object): Promise<registrationPb.ResetRegistrationResponse>
```

Reset GPS registration

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Options to provide for gRPC request. (*Optional*) |

**Returns** `Promise<registrationPb.ResetRegistrationResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `registrationPb` | `spot-sdk-js/src/bosdyn/api/gps/registration_pb` |
