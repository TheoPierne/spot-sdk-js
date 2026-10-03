# bosdyn-core/image_util

Displays and saves images with the image viewers of the system.

```js
const { Viewer, show, save, ... } = require('spot-sdk-js').imageUtil;
```

| Export | Kind | Description |
|---|---|---|
| [`Viewer`](#viewer) | Class |  |
| [`show`](#show-1) | Function | Display image with default image viewer. |
| [`save`](#save) | Function | Save image to path. |
| [`register`](#register) | Function | Register an image viewer. |

## Viewer

```ts
class Viewer
```

### Properties

| Property | Type | Description |
|---|---|---|
| `format` | `null` |  |
| `options` | `{}` |  |

### show

```ts
show(image: any, options: any): Promise<boolean>
```

| Parameter | Type | Description |
|---|---|---|
| `image` | `any` |  |
| `options` | `any` |  |

**Returns** `Promise<boolean>`

### get_format

```ts
get_format(): null
```

**Returns** `null`

### get_command

```ts
get_command(): void
```

### show_image

```ts
show_image(image: any, options: any): Promise<boolean>
```

| Parameter | Type | Description |
|---|---|---|
| `image` | `any` |  |
| `options` | `any` |  |

**Returns** `Promise<boolean>`

### save_image

```ts
save_image(image: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `image` | `any` |  |

**Returns** `Promise<any>`

### show_file

```ts
show_file(file: any, options?: {}): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `file` | `any` |  |
| `options` | `{}` | (*Optional*) |

**Returns** `boolean`

## show

```ts
export function show(image: Buffer | any[] | string, options?: {
    title: string;
}): Promise<boolean>
```

Display image with default image viewer.

| Parameter | Type | Description |
|---|---|---|
| `image` | `Buffer \| any[] \| string` | The data of the image. |
| `options` | `{ title: string; }` | The options of the image. (*Optional*) |
| `options.title` | `string` | The title of the image. |

**Returns** `Promise<boolean>`

## save

```ts
export function save(image: Buffer | any[] | string, name: string): Promise<import("sharp").OutputInfo>
```

Save image to path. (Convert any type of image into .png | .jpg | ...)

| Parameter | Type | Description |
|---|---|---|
| `image` | `Buffer \| any[] \| string` | The data of the image. |
| `name` | `string` | The name of the image. |

**Returns** `Promise<import("sharp").OutputInfo>`

## register

```ts
export function register(viewer: typeof Viewer | Viewer, order?: number): void
```

Register an image viewer. If order &lt; 0 the viewer is used in first place.

| Parameter | Type | Description |
|---|---|---|
| `viewer` | `typeof Viewer \| Viewer` | A viewer, or its class. |
| `order` | `number` | The order to put the viewer. (*Optional*, default `1`) |

**Returns** `void`
