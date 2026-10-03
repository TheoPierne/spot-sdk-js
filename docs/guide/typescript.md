# TypeScript and ES modules

## TypeScript

The package has typings (`typings/`), generated from the JSDoc of the SDK, for the package root and for each module,
and the protobuf messages have theirs. TypeScript finds them through the `exports` of the package: no `@types`
package is needed.

```ts
import { createStandardSdk, LeaseClient, LeaseKeepAlive, RobotStateClient, type Robot } from 'spot-sdk-js';
import { RobotState } from 'spot-sdk-js/src/bosdyn/api/robot_state_pb';

const sdk = createStandardSdk('MyApp');
const robot: Robot = sdk.createRobot('192.168.80.3');
await robot.authenticate('user', 'password');

// ensureClient() returns the client of any service: give it its type.
const stateClient: RobotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
const state: RobotState = await stateClient.getRobotState();
```

The namespaces of the root are namespaces for the types too: `spotCam.PtzClient`, `textFormat.ParseError`.

- Use `"moduleResolution": "node16"`, `"nodenext"` or `"bundler"` in `tsconfig.json`, so that TypeScript reads the
  `exports` of the package (the modules are imported by their path, `spot-sdk-js/src/...`).
- The typings come from JSDoc: the parameters without precise JSDoc types are `any`. The typings are checked in
  strict mode by the tests of the repository (`npm run test:typings`).

## ES modules

The SDK is a CommonJS package, and ES modules import it by name:

```js
import { createStandardSdk, RobotStateClient, spotCam } from 'spot-sdk-js';
import { NoTimeSyncError } from 'spot-sdk-js/src/bosdyn-client/graph_nav';
```

The generated protobuf modules are the exception: import them as a whole, with a default import.

```js
import robotStatePb from 'spot-sdk-js/src/bosdyn/api/robot_state_pb.js';

const request = new robotStatePb.RobotStateRequest();
```

The same applies to TypeScript compiled to ES modules: `import robotStatePb from '...'` works at run time, while
`import { RobotState } from '...'` of a protobuf module only works when TypeScript emits CommonJS.
