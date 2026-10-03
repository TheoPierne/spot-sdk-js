# bosdyn-choreography-client/animation_file_conversion_helpers

A set helpers which convert specific lines from an animation
file into the animation-specific protobuf messages.
NOTE: All of these helpers are to convert specific values read from a `cha`
file into fields within the choreographySequencePb.Animation protobuf
message. They are used by the animation_file_to_proto.js file.

```js
const { startTimeHandler, flAnglesHandler, frAnglesHandler, ... } = require('spot-sdk-js/src/bosdyn-choreography-client/animation_file_conversion_helpers');
```

| Export | Kind | Description |
|---|---|---|
| [`startTimeHandler`](#starttimehandler) | Function |  |
| [`flAnglesHandler`](#flangleshandler) | Function |  |
| [`frAnglesHandler`](#frangleshandler) | Function |  |
| [`hlAnglesHandler`](#hlangleshandler) | Function |  |
| [`hrAnglesHandler`](#hrangleshandler) | Function |  |
| [`flPosHandler`](#flposhandler) | Function |  |
| [`frPosHandler`](#frposhandler) | Function |  |
| [`hlPosHandler`](#hlposhandler) | Function |  |
| [`hrPosHandler`](#hrposhandler) | Function |  |
| [`gripperHandler`](#gripperhandler) | Function |  |
| [`flContactHandler`](#flcontacthandler) | Function |  |
| [`frContactHandler`](#frcontacthandler) | Function |  |
| [`hlContactHandler`](#hlcontacthandler) | Function |  |
| [`hrContactHandler`](#hrcontacthandler) | Function |  |
| [`sh0Handler`](#sh0handler) | Function |  |
| [`sh1Handler`](#sh1handler) | Function |  |
| [`el0Handler`](#el0handler) | Function |  |
| [`el1Handler`](#el1handler) | Function |  |
| [`wr0Handler`](#wr0handler) | Function |  |
| [`wr1Handler`](#wr1handler) | Function |  |
| [`flHxHandler`](#flhxhandler) | Function |  |
| [`flHyHandler`](#flhyhandler) | Function |  |
| [`flKnHandler`](#flknhandler) | Function |  |
| [`frHxHandler`](#frhxhandler) | Function |  |
| [`frHyHandler`](#frhyhandler) | Function |  |
| [`frKnHandler`](#frknhandler) | Function |  |
| [`hlHxHandler`](#hlhxhandler) | Function |  |
| [`hlHyHandler`](#hlhyhandler) | Function |  |
| [`hlKnHandler`](#hlknhandler) | Function |  |
| [`hrHxHandler`](#hrhxhandler) | Function |  |
| [`hrHyHandler`](#hrhyhandler) | Function |  |
| [`hrKnHandler`](#hrknhandler) | Function |  |
| [`flXHandler`](#flxhandler) | Function |  |
| [`flYHandler`](#flyhandler) | Function |  |
| [`flZHandler`](#flzhandler) | Function |  |
| [`frXHandler`](#frxhandler) | Function |  |
| [`frYHandler`](#fryhandler) | Function |  |
| [`frZHandler`](#frzhandler) | Function |  |
| [`hlXHandler`](#hlxhandler) | Function |  |
| [`hlYHandler`](#hlyhandler) | Function |  |
| [`hlZHandler`](#hlzhandler) | Function |  |
| [`hrXHandler`](#hrxhandler) | Function |  |
| [`hrYHandler`](#hryhandler) | Function |  |
| [`hrZHandler`](#hrzhandler) | Function |  |
| [`bodyXHandler`](#bodyxhandler) | Function |  |
| [`bodyYHandler`](#bodyyhandler) | Function |  |
| [`bodyZHandler`](#bodyzhandler) | Function |  |
| [`comXHandler`](#comxhandler) | Function |  |
| [`comYHandler`](#comyhandler) | Function |  |
| [`comZHandler`](#comzhandler) | Function |  |
| [`bodyQuatXHandler`](#bodyquatxhandler) | Function |  |
| [`bodyQuatYHandler`](#bodyquatyhandler) | Function |  |
| [`bodyQuatZHandler`](#bodyquatzhandler) | Function |  |
| [`bodyQuatWHandler`](#bodyquatwhandler) | Function |  |
| [`bodyRollHandler`](#bodyrollhandler) | Function |  |
| [`bodyPitchHandler`](#bodypitchhandler) | Function |  |
| [`bodyYawHandler`](#bodyyawhandler) | Function |  |
| [`bodyPosHandler`](#bodyposhandler) | Function |  |
| [`comPosHandler`](#composhandler) | Function |  |
| [`bodyEulerRpyAnglesHandler`](#bodyeulerrpyangleshandler) | Function |  |
| [`bodyQuaternionXyzwHandler`](#bodyquaternionxyzwhandler) | Function |  |
| [`bodyQuaternionWxyzHandler`](#bodyquaternionwxyzhandler) | Function |  |
| [`legAnglesHandler`](#legangleshandler) | Function |  |
| [`footPosHandler`](#footposhandler) | Function |  |
| [`contactHandler`](#contacthandler) | Function |  |
| [`armJointsHandler`](#armjointshandler) | Function |  |
| [`handXHandler`](#handxhandler) | Function |  |
| [`handYHandler`](#handyhandler) | Function |  |
| [`handZHandler`](#handzhandler) | Function |  |
| [`handQuatXHandler`](#handquatxhandler) | Function |  |
| [`handQuatYHandler`](#handquatyhandler) | Function |  |
| [`handQuatZHandler`](#handquatzhandler) | Function |  |
| [`handQuatWHandler`](#handquatwhandler) | Function |  |
| [`handRollHandler`](#handrollhandler) | Function |  |
| [`handPitchHandler`](#handpitchhandler) | Function |  |
| [`handYawHandler`](#handyawhandler) | Function |  |
| [`handPosHandler`](#handposhandler) | Function |  |
| [`handEulerRpyAnglesHandler`](#handeulerrpyangleshandler) | Function |  |
| [`handQuaternionXyzwHandler`](#handquaternionxyzwhandler) | Function |  |
| [`handQuaternionWxyzHandler`](#handquaternionwxyzhandler) | Function |  |
| [`controlsOption`](#controlsoption) | Function |  |
| [`bpmOption`](#bpmoption) | Function |  |
| [`extendableOption`](#extendableoption) | Function |  |
| [`truncatableOption`](#truncatableoption) | Function |  |
| [`neutralStartOption`](#neutralstartoption) | Function |  |
| [`preciseStepsOption`](#precisestepsoption) | Function |  |
| [`preciseTimingOption`](#precisetimingoption) | Function |  |
| [`timingAdjustabilityOption`](#timingadjustabilityoption) | Function |  |
| [`noLoopingOption`](#noloopingoption) | Function |  |
| [`armRequiredOption`](#armrequiredoption) | Function |  |
| [`armProhibitedOption`](#armprohibitedoption) | Function |  |
| [`startsSittingOption`](#startssittingoption) | Function |  |
| [`trackSwingTrajectoriesOption`](#trackswingtrajectoriesoption) | Function |  |
| [`assumeZeroRollAndPitchOption`](#assumezerorollandpitchoption) | Function |  |
| [`armPlaybackOption`](#armplaybackoption) | Function |  |
| [`displayRgbOption`](#displayrgboption) | Function |  |
| [`frequencyOption`](#frequencyoption) | Function |  |
| [`retimeToIntegerSlicesOption`](#retimetointegerslicesoption) | Function |  |
| [`descriptionOption`](#descriptionoption) | Function |  |
| [`customGaitCycleOption`](#customgaitcycleoption) | Function |  |
| [`parseFloatStrict`](#parsefloatstrict) | Function | A number of the file, read like Python's float(): the whole text must be a number (parseFloat('1.5abc') is 1.5). |
| [`parseIntStrict`](#parseintstrict) | Function | An integer of the file, read like Python's int(). |
| [`bodyQuaternionWxyzwHandler`](#aliases) | Alias | Alias of `bodyQuaternionWxyzHandler`. |

## startTimeHandler

```ts
export function startTimeHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flAnglesHandler

```ts
export function flAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frAnglesHandler

```ts
export function frAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlAnglesHandler

```ts
export function hlAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrAnglesHandler

```ts
export function hrAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flPosHandler

```ts
export function flPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frPosHandler

```ts
export function frPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlPosHandler

```ts
export function hlPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrPosHandler

```ts
export function hrPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## gripperHandler

```ts
export function gripperHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flContactHandler

```ts
export function flContactHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frContactHandler

```ts
export function frContactHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlContactHandler

```ts
export function hlContactHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrContactHandler

```ts
export function hrContactHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## sh0Handler

```ts
export function sh0Handler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## sh1Handler

```ts
export function sh1Handler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## el0Handler

```ts
export function el0Handler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## el1Handler

```ts
export function el1Handler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## wr0Handler

```ts
export function wr0Handler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## wr1Handler

```ts
export function wr1Handler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flHxHandler

```ts
export function flHxHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flHyHandler

```ts
export function flHyHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flKnHandler

```ts
export function flKnHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frHxHandler

```ts
export function frHxHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frHyHandler

```ts
export function frHyHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frKnHandler

```ts
export function frKnHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlHxHandler

```ts
export function hlHxHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlHyHandler

```ts
export function hlHyHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlKnHandler

```ts
export function hlKnHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrHxHandler

```ts
export function hrHxHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrHyHandler

```ts
export function hrHyHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrKnHandler

```ts
export function hrKnHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flXHandler

```ts
export function flXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flYHandler

```ts
export function flYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## flZHandler

```ts
export function flZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frXHandler

```ts
export function frXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frYHandler

```ts
export function frYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## frZHandler

```ts
export function frZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlXHandler

```ts
export function hlXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlYHandler

```ts
export function hlYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hlZHandler

```ts
export function hlZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrXHandler

```ts
export function hrXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrYHandler

```ts
export function hrYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## hrZHandler

```ts
export function hrZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyXHandler

```ts
export function bodyXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyYHandler

```ts
export function bodyYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyZHandler

```ts
export function bodyZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## comXHandler

```ts
export function comXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## comYHandler

```ts
export function comYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## comZHandler

```ts
export function comZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyQuatXHandler

```ts
export function bodyQuatXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyQuatYHandler

```ts
export function bodyQuatYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyQuatZHandler

```ts
export function bodyQuatZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyQuatWHandler

```ts
export function bodyQuatWHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyRollHandler

```ts
export function bodyRollHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyPitchHandler

```ts
export function bodyPitchHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyYawHandler

```ts
export function bodyYawHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyPosHandler

```ts
export function bodyPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## comPosHandler

```ts
export function comPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyEulerRpyAnglesHandler

```ts
export function bodyEulerRpyAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyQuaternionXyzwHandler

```ts
export function bodyQuaternionXyzwHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## bodyQuaternionWxyzHandler

```ts
export function bodyQuaternionWxyzHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## legAnglesHandler

```ts
export function legAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## footPosHandler

```ts
export function footPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## contactHandler

```ts
export function contactHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## armJointsHandler

```ts
export function armJointsHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handXHandler

```ts
export function handXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handYHandler

```ts
export function handYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handZHandler

```ts
export function handZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handQuatXHandler

```ts
export function handQuatXHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handQuatYHandler

```ts
export function handQuatYHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handQuatZHandler

```ts
export function handQuatZHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handQuatWHandler

```ts
export function handQuatWHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handRollHandler

```ts
export function handRollHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handPitchHandler

```ts
export function handPitchHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handYawHandler

```ts
export function handYawHandler(val: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handPosHandler

```ts
export function handPosHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handEulerRpyAnglesHandler

```ts
export function handEulerRpyAnglesHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handQuaternionXyzwHandler

```ts
export function handQuaternionXyzwHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## handQuaternionWxyzHandler

```ts
export function handQuaternionWxyzHandler(vals: any, animationFrame: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `vals` | `any` |  |
| `animationFrame` | `any` |  |

**Returns** `any`

## controlsOption

```ts
export function controlsOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## bpmOption

```ts
export function bpmOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## extendableOption

```ts
export function extendableOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## truncatableOption

```ts
export function truncatableOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## neutralStartOption

```ts
export function neutralStartOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## preciseStepsOption

```ts
export function preciseStepsOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## preciseTimingOption

```ts
export function preciseTimingOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## timingAdjustabilityOption

```ts
export function timingAdjustabilityOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## noLoopingOption

```ts
export function noLoopingOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## armRequiredOption

```ts
export function armRequiredOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## armProhibitedOption

```ts
export function armProhibitedOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## startsSittingOption

```ts
export function startsSittingOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## trackSwingTrajectoriesOption

```ts
export function trackSwingTrajectoriesOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## assumeZeroRollAndPitchOption

```ts
export function assumeZeroRollAndPitchOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## armPlaybackOption

```ts
export function armPlaybackOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## displayRgbOption

```ts
export function displayRgbOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## frequencyOption

```ts
export function frequencyOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## retimeToIntegerSlicesOption

```ts
export function retimeToIntegerSlicesOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## descriptionOption

```ts
export function descriptionOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## customGaitCycleOption

```ts
export function customGaitCycleOption(fileLineSplit: any, animation: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `fileLineSplit` | `any` |  |
| `animation` | `any` |  |

**Returns** `any`

## parseFloatStrict

```ts
export function parseFloatStrict(text: string): number
```

A number of the file, read like Python's float(): the whole text must be a number (parseFloat('1.5abc') is 1.5).

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` |  |

**Returns** `number`

**Throws**

- `Error` The text is not a number.

## parseIntStrict

```ts
export function parseIntStrict(text: string): number
```

An integer of the file, read like Python's int().

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` |  |

**Returns** `number`

**Throws**

- `Error` The text is not an integer.

## Aliases

| Alias | Of |
|---|---|
| `bodyQuaternionWxyzwHandler` | [`bodyQuaternionWxyzHandler`](#bodyquaternionwxyzhandler) |
