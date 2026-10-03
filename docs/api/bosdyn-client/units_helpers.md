# bosdyn-client/units_helpers

Helpers for working with units.proto.

```js
const { unitsToString, TEMPERATURES_NAMES, PRESSURE_NAMES } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`unitsToString`](#unitstostring) | Function | Gets the units in string form to use for display. |
| [`TEMPERATURES_NAMES`](#constants) | Constant |  |
| [`PRESSURE_NAMES`](#constants) | Constant |  |

## unitsToString

```ts
export function unitsToString(units: Units): string
```

Gets the units in string form to use for display. Ex: TEMPERATURE_KELVIN = "K"

| Parameter | Type | Description |
|---|---|---|
| `units` | `Units` | Populate units message. |

**Returns** `string`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `TEMPERATURES_NAMES` | `{ 1: string; 2: string; 3: string; }` |  |
| `PRESSURE_NAMES` | `{ 1: string; 2: string; 3: string; }` |  |
