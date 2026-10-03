# bosdyn-core/bddf/bosdyn

Boston Dynamics conventions for bddf files

```js
const { MessageChannel, TypedMessageChannel, GrpcRequests, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`MessageChannel`](#messagechannel) | Class | Data series for named channels containing a list of messages. |
| [`TypedMessageChannel`](#typedmessagechannel) | Class | Data series for named channels containing a list of messages. |
| [`GrpcRequests`](#grpcrequests) | Class | Data series for request protobuf messages to a grpc service. |
| [`GrpcResponses`](#grpcresponses) | Class | Data series for response protobuf messages to a grpc service. |

## MessageChannel

```ts
class MessageChannel extends SeriesIdentifier
```

Data series for named channels containing a list of messages.

### Properties

| Property | Type | Description |
|---|---|---|
| `CHANNEL` | `string` | Static. Value: `'bosdyn:message-channel'`. |
| `KEYS` | `string[]` | Static. |

## TypedMessageChannel

```ts
class TypedMessageChannel extends SeriesIdentifier
```

Data series for named channels containing a list of messages.

### Properties

| Property | Type | Description |
|---|---|---|
| `CHANNEL` | `string` | Static. Value: `'bosdyn:channel'`. |
| `MESSAGE_TYPE` | `string` | Static. Value: `'bosdyn:message-type'`. |
| `KEYS` | `string[]` | Static. |

## GrpcRequests

```ts
class GrpcRequests extends SeriesIdentifier
```

Data series for request protobuf messages to a grpc service.

### Properties

| Property | Type | Description |
|---|---|---|
| `SERVICE_NAME` | `string` | Static. Value: `'bosdyn:grpc:service'`. |
| `MESSAGE_TYPE` | `string` | Static. Value: `'bosdyn:message-type'`. |
| `KEYS` | `string[]` | Static. |

## GrpcResponses

```ts
class GrpcResponses extends SeriesIdentifier
```

Data series for response protobuf messages to a grpc service.

### Properties

| Property | Type | Description |
|---|---|---|
| `SERVICE_NAME` | `string` | Static. Value: `'bosdyn:grpc:service'`. |
| `MESSAGE_TYPE` | `string` | Static. Value: `'bosdyn:message-type'`. |
| `KEYS` | `string[]` | Static. |
