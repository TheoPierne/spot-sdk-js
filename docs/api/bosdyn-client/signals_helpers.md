# bosdyn-client/signals_helpers

Helpers for working with DAQ plugins and signals.proto.

```js
const { buildMaxAlertSpec, buildSimpleSignal, buildCapabilityLiveData, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`buildMaxAlertSpec`](#buildmaxalertspec) | Function | Build a max AlertConditionSpec |
| [`buildSimpleSignal`](#buildsimplesignal) | Function | Builds a simple signal with a float value, string units, and optional max alerts. |
| [`buildCapabilityLiveData`](#buildcapabilitylivedata) | Function | Takes an object of signals and copies them into a CapabilityLiveData message. |
| [`buildLiveDataResponse`](#buildlivedataresponse) | Function | Takes a list of CapabilityLiveData and adds them to a LiveDataResponse. |
| [`getData`](#getdata) | Function | Checks type of SignalData and returns the value. |

## buildMaxAlertSpec

```ts
export function buildMaxAlertSpec(value: number, severity: AlertData.SeverityLevel): AlertConditionSpec
```

Build a max AlertConditionSpec

| Parameter | Type | Description |
|---|---|---|
| `value` | `number` | Max threshold. |
| `severity` | `AlertData.SeverityLevel` | Severity of alert. |

**Returns** `AlertConditionSpec`

## buildSimpleSignal

```ts
export function buildSimpleSignal(name: string, value: number, units: string, maxWarnings: number, maxCritical: number): Signal
```

Builds a simple signal with a float value, string units, and optional max alerts.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | Name of the signal. |
| `value` | `number` | Signal data value. |
| `units` | `string` | Simple units. |
| `maxWarnings` | `number` | Max warning threshold. |
| `maxCritical` | `number` | Max critical threshold. |

**Returns** `Signal`

## buildCapabilityLiveData

```ts
export function buildCapabilityLiveData(signals: {
    [x: string]: Signal;
}, capabilityName: string): LiveDataResponse.CapabilityLiveData
```

Takes an object of signals and copies them into a CapabilityLiveData message.

| Parameter | Type | Description |
|---|---|---|
| `signals` | `{ [x: string]: Signal; }` | An array of signal id to Signal. |
| `capabilityName` | `string` | The capability name. |

**Returns** `LiveDataResponse.CapabilityLiveData`

## buildLiveDataResponse

```ts
export function buildLiveDataResponse(liveDataCapabilities: LiveDataResponse.CapabilityLiveData[]): LiveDataResponse
```

Takes a list of CapabilityLiveData and adds them to a LiveDataResponse.

| Parameter | Type | Description |
|---|---|---|
| `liveDataCapabilities` | `LiveDataResponse.CapabilityLiveData[]` | A list of CapabilityLiveData. |

**Returns** `LiveDataResponse`

## getData

```ts
export function getData(signalData: SignalData): any
```

Checks type of SignalData and returns the value.

| Parameter | Type | Description |
|---|---|---|
| `signalData` | `SignalData` | Signal data. |

**Returns** `any`: The value, or null without data or value (a TypeError: getValueNotSet() does not exist).
