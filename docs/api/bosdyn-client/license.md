# bosdyn-client/license

Client for the license service.

```js
const { LicenseClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`LicenseClient`](#licenseclient) | Class | Client to acquire robot license. |

## LicenseClient

```ts
class LicenseClient extends BaseClient<LicenseServiceClient>
```

Client to acquire robot license.

### new LicenseClient

```ts
constructor(name?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'license'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.LicenseService'`. |

### getLicenseInfo

```ts
getLicenseInfo(args?: Object): Promise<licensePb.LicenseInfo>
```

Get the robot's installed license.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<licensePb.LicenseInfo>`

### getFeatureEnabled

```ts
getFeatureEnabled(featureList?: string[], args?: Object): Promise<JspbMap>
```

Check if the installed license allow a list of feature codes.

| Parameter | Type | Description |
|---|---|---|
| `featureList` | `string[]` | Features code. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<JspbMap>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `licensePb` | `spot-sdk-js/src/bosdyn/api/license_pb` |
