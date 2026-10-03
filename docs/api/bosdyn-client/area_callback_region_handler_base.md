# bosdyn-client/area_callback_region_handler_base

The base class of the handlers of an area callback service: a handler runs the callback of one region, from
BeginCallback to EndCallback.

```js
const { RouteChangedResult, AreaCallbackRegionHandlerBase, PathBlocked, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`RouteChangedResult`](#routechangedresult) | Class | Options for how the helper class should respond to a route change. |
| [`AreaCallbackRegionHandlerBase`](#areacallbackregionhandlerbase) | Class | Base class for implementing an AreaCallbackRegionHandler. |
| [`PathBlocked`](#pathblocked) | Class | The callback reports the that path/area it's trying to traverse is blocked and the robot should take another route or action. |
| [`IncorrectUsage`](#incorrectusage) | Class | Error thrown by calling a helper function incorrectly. |
| [`HandlerError`](#handlererror) | Class | Error base class for errors thrown from the internals of the AreaCallbackRegionHandlerBase. |
| [`CallbackEnded`](#callbackended) | Class | The callback has already been stopped, via an EndCallback call. |
| [`CallbackTimedOutError`](#callbacktimedouterror) | Class | The callback has already been stopped, via passing the end time. |

## PathBlocked

```ts
class PathBlocked extends Error
```

The callback reports the that path/area it's trying to traverse is blocked and the robot should take another route or
action.

### new PathBlocked

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## IncorrectUsage

```ts
class IncorrectUsage extends Error
```

Error thrown by calling a helper function incorrectly.

Thrown when a call would block forever or has otherwise been used in an incorrect manner. This error is not intended
to be caught, but indicates a programming error.

### new IncorrectUsage

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## HandlerError

```ts
class HandlerError extends Error
```

Error base class for errors thrown from the internals of the AreaCallbackRegionHandlerBase.

This error is thrown when the shutdown event is set, or can be thrown by the user to signal an error. A wrapper
around the run implementation catches this error and reports back to a client an UpdateCallbackResponse error.

### new HandlerError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## CallbackEnded

```ts
class CallbackEnded extends HandlerError
```

The callback has already been stopped, via an EndCallback call.

## CallbackTimedOutError

```ts
class CallbackTimedOutError extends HandlerError
```

The callback has already been stopped, via passing the end time. If caught, it should be rethrown to make sure the
response is set correctly.

## RouteChangedResult

```ts
class RouteChangedResult
```

Options for how the helper class should respond to a route change.

### Properties

| Property | Type | Description |
|---|---|---|
| `rerunIfStopped` | `boolean` |  |

## AreaCallbackRegionHandlerBase

```ts
class AreaCallbackRegionHandlerBase
```

Base class for implementing an AreaCallbackRegionHandler.

An AreaCallbackRegionHandler is an object responsible for running a single instance of an AreaCallback. The
AreaCallbackServiceServicer constructs an AreaCallbackRegionHandler object each time GraphNav starts an Area Callback
region. The servicer runs its run() method as an asynchronous task and reads its updateResponse to send status back
to the client. After EndCallback, this object is discarded and a new AreaCallbackRegionHandlerBase is constructed to
handle the next region.

### new AreaCallbackRegionHandlerBase

```ts
constructor(config: any, robot: any)
```

| Parameter | Type | Description |
|---|---|---|
| `config` | `any` |  |
| `robot` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `robot` | `import("./robot").Robot` |  |
| `areaCallbackInformation` | `any` | Get areaCallbackPb.AreaCallbackInformation. Read-only. |
| `config` | `any` | Get AreaCallbackServiceConfig Read-only. |
| `stage` | `number` | Check the current stage of traversal in a non-blocking way. Read-only. |
| `updateResponse` | `UpdateCallbackResponse` | Get current UpdateCallbackResponse. Read-only. |

### begin

```ts
begin(request: import("spot-sdk-js/src/bosdyn/api/graph_nav/area_callback_pb").BeginCallbackRequest): number | Promise<number>
```

Validates that configuration passed to BeginCallback is valid.

| Parameter | Type | Description |
|---|---|---|
| `request` | `import("spot-sdk-js/src/bosdyn/api/graph_nav/area_callback_pb").BeginCallbackRequest` | The request of BeginCallback, with the configuration of the region. |

**Returns** `number \| Promise<number>`: The status of the BeginCallbackResponse (STATUS_OK to accept the region).

### run

```ts
run(): void | Promise<void>
```

Runs the callback, as an asynchronous task, after BeginCallback is called.

**Returns** `void \| Promise<void>`

### end

```ts
end(): void | Promise<void>
```

This function is called after run() has finished and the client calls EndCallback.

**Returns** `void \| Promise<void>`

### routeChanged

```ts
routeChanged(request: import("spot-sdk-js/src/bosdyn/api/graph_nav/area_callback_pb").RouteChangeRequest): RouteChangedResult
```

This function is called when Graph Nav re-routes inside the callback region.
In most cases, the callback does not need to do anything for this case and can leave the
default implementation.

| Parameter | Type | Description |
|---|---|---|
| `request` | `import("spot-sdk-js/src/bosdyn/api/graph_nav/area_callback_pb").RouteChangeRequest` | The request. |

**Returns** `RouteChangedResult`

### stopAtStart

```ts
stopAtStart(): void
```

Tell graph nav that it should wait at the start of the region.

### continuePastStart

```ts
continuePastStart(): void
```

Tell graph nav that it should continue on past the start of the region.

### controlAtStart

```ts
controlAtStart(): void
```

Tell graph nav that it transfer control at the start of the region.

### stopAtEnd

```ts
stopAtEnd(): void
```

Tell graph nav that it should wait at the end of the region.

### continuePastEnd

```ts
continuePastEnd(): void
```

Tell graph nav that it should continue on past the ends of the region.

### controlAtEnd

```ts
controlAtEnd(): void
```

Tell graph nav that it should transfer control at the end of the region.

### setComplete

```ts
setComplete(): void
```

### setLocalizationAtEnd

```ts
setLocalizationAtEnd(): void
```

Set the localization hint to the end of the callback region, indicating that graph nav
that navigation should continue from this point.
Robot control is required to set this. It should be called after walking to the end of
the region, but before ceding control.

### blockUntilControl

```ts
blockUntilControl(): Promise<void>
```

Block waiting for the robot to pass the sublease to this callback.

**Returns** `Promise<void>`

### hasControl

```ts
hasControl(): boolean
```

Check in a non-blocking way if the callback has been given a sublease.

**Returns** `boolean`

### blockUntilArrivedAtStart

```ts
blockUntilArrivedAtStart(): Promise<boolean>
```

Block until the robot arrives at the start of the area callback.
If the robot is already past the start, this will return immediately.

**Returns** `Promise<boolean>`

### blockUntilArrivedAtEnd

```ts
blockUntilArrivedAtEnd(): Promise<void>
```

Block until the robot arrives at the end of the area callback.

**Returns** `Promise<void>`

### safeSleep

```ts
safeSleep(sleepTimeMsecs: number): Promise<void>
```

Run impl should use this sleep function to make sure thread does not hang.

| Parameter | Type | Description |
|---|---|---|
| `sleepTimeMsecs` | `number` | Time to sleep, in mseconds. |

**Returns** `Promise<void>`

### check

```ts
check(): Promise<void>
```

Check if callback shutdown has been requested via client call to EndCallback or passing
the end time.

**Returns** `Promise<void>`

### willGetControl

```ts
willGetControl(): boolean
```

Determine if the current policy and stage mean that the callback will eventually be
given control without any further action on its part

**Returns** `boolean`

### internalBeginComplete

```ts
internalBeginComplete(): void
```

The handler finished BeginCallback and is ready to start run().
Blocking calls may now be used.

### internalSetStage

```ts
internalSetStage(stage: number): void
```

Update the stage via an incoming UpdateCallbackRequest.

| Parameter | Type | Description |
|---|---|---|
| `stage` | `number` | The new stage |

### internalSetEndTime

```ts
internalSetEndTime(endTime: number): void
```

Update the end time from an incoming request.

| Parameter | Type | Description |
|---|---|---|
| `endTime` | `number` | The new end time |

### internalGiveControl

```ts
internalGiveControl(): void
```

Set Event indicating region handler has been given control. Lease is available in wallet.

### internalRunWrapper

```ts
internalRunWrapper(shutdownEvent: Event): Promise<void>
```

Wrapper around the run function which catches exceptions and set update response.

| Parameter | Type | Description |
|---|---|---|
| `shutdownEvent` | `Event` | Event that signals the run thread to shutdown. |

**Returns** `Promise<void>`: Resolves once run() has ended.

**Throws**

- `IncorrectUsage` run() used the helper functions incorrectly.
