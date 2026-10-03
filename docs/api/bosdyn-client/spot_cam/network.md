# bosdyn-client/spot_cam/network

For clients to the Spot CAM Network service.

```js
const { NetworkClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`NetworkClient`](#networkclient) | Class | A client calling Spot CAM Network services such as ICE Candidates, SSL certs / Keys etc. |

## NetworkClient

```ts
class NetworkClient extends BaseClient<NetworkServiceClient>
```

A client calling Spot CAM Network services such as ICE Candidates, SSL certs / Keys etc.

Note: Interactive Connectivity Establishment (ICE) is a protocol which lets two devices use
an intermediary to exchange offers and answers even if the two devices are separated
by Network Address Translation (NAT).

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-network'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.NetworkService'`. |

### getICEConfiguration

```ts
getICEConfiguration(args?: Object): Promise<networkPb.ICEServer[]>
```

Get ICE configuration from Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<networkPb.ICEServer[]>`

### setICEConfiguration

```ts
setICEConfiguration(iceServers: networkPb.ICEServer[], args?: Object): Promise<networkPb.SetICEConfigurationResponse>
```

Set ICE configuration on Spot CAM. This overrides all existing configured servers

| Parameter | Type | Description |
|---|---|---|
| `iceServers` | `networkPb.ICEServer[]` | New server list |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<networkPb.SetICEConfigurationResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `networkPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/network_pb` |
