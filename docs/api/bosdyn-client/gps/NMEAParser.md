# bosdyn-client/gps/NMEAParser

Parses the NMEA sentences of a GPS device into GpsDataPoint messages.

```js
const { NMEAParser } = require('spot-sdk-js').gps;
```

| Export | Kind | Description |
|---|---|---|
| [`NMEAParser`](#nmeaparser) | Class |  |

## NMEAParser

```ts
class NMEAParser
```

### new NMEAParser

```ts
constructor(logger?: Console)
```

| Parameter | Type | Description |
|---|---|---|
| `logger` | `Console` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `LOG_THROTTLE_TIME` | `number` | The amount of time (in seconds) to wait before logging another decode error. Static. Value: `2`. |
| `data` | `string` |  |
| `fullLines` | `Array<[Object, string, number]>` | The NMEA messages with a timestamp, not grouped yet: [packet, sentence, client timestamp in seconds]. |
| `logger` | `Console` |  |
| `groupingTimeout` | `number` |  |
| `lastFailedReadLogTime` | `number \| null` |  |
| `lastGGA` | `string \| null` |  |

### nmeaMessageGroupToGpsDataPoint

```ts
nmeaMessageGroupToGpsDataPoint(nmeaMessages: Array<[Object, string, number]>, timeConverter: RobotTimeConverter | null): gpsPb.GpsDataPoint
```

Convert a NMEA message group with the same UTC timestamp to a GpsDataPoint.

| Parameter | Type | Description |
|---|---|---|
| `nmeaMessages` | `Array<[Object, string, number]>` | The messages: [packet, sentence, client timestamp]. |
| `timeConverter` | `RobotTimeConverter \| null` | Converter to robot time, null if the clocks are synchronized. |

**Returns** `gpsPb.GpsDataPoint`

### parse

```ts
parse(newData: string, timeConverter: RobotTimeConverter | null, check?: boolean): gpsPb.GpsDataPoint[]
```

Parse NMEA data, and return the GPS data points of the message groups it completes.

| Parameter | Type | Description |
|---|---|---|
| `newData` | `string` | New NMEA data: lines, possibly with an incomplete last line kept for the next call. |
| `timeConverter` | `RobotTimeConverter \| null` | Converter to robot time, null if the clocks are synchronized. |
| `check` | `boolean` | Reject the sentences without checksum. A wrong checksum is always rejected. (*Optional*, default `true`) |

**Returns** `gpsPb.GpsDataPoint[]`

### getLatestGga

```ts
getLatestGga(): string | null
```

**Returns** `string \| null`: The last GGA sentence of the data points returned by parse().

### getLastGGA

```ts
getLastGGA(): string | null
```

**Returns** `string \| null`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `gpsPb` | `spot-sdk-js/src/bosdyn/api/gps/gps_pb` |
