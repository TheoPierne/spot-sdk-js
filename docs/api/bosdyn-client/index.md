# bosdyn-client/index

Some commonly used classes and functions of the client library, exported together.

```js
const { AuthClient, InvalidLoginError, InvalidTokenError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { CommandHandler } = require('spot-sdk-js/src/bosdyn-client/index');
```

## Exports of other modules

| Export | Module |
|---|---|
| [`AuthClient`](/api/bosdyn-client/auth?id=authclient) | [bosdyn-client/auth](/api/bosdyn-client/auth) |
| [`InvalidLoginError`](/api/bosdyn-client/auth?id=invalidloginerror) | [bosdyn-client/auth](/api/bosdyn-client/auth) |
| [`InvalidTokenError`](/api/bosdyn-client/auth?id=invalidtokenerror) | [bosdyn-client/auth](/api/bosdyn-client/auth) |
| [`BaseClient`](/api/bosdyn-client/common?id=baseclient) | [bosdyn-client/common](/api/bosdyn-client/common) |
| [`BosdynError`](/api/bosdyn-client/exceptions?id=bosdynerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`ClientCancelledOperationError`](/api/bosdyn-client/exceptions?id=clientcancelledoperationerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`CustomParamError`](/api/bosdyn-client/exceptions?id=customparamerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`InternalServerError`](/api/bosdyn-client/exceptions?id=internalservererror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`InvalidClientCertificateError`](/api/bosdyn-client/exceptions?id=invalidclientcertificateerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`InvalidRequestError`](/api/bosdyn-client/exceptions?id=invalidrequesterror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`LeaseUseError`](/api/bosdyn-client/exceptions?id=leaseuseerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`LicenseError`](/api/bosdyn-client/exceptions?id=licenseerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`NonexistentAuthorityError`](/api/bosdyn-client/exceptions?id=nonexistentauthorityerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`NotFoundError`](/api/bosdyn-client/exceptions?id=notfounderror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`PersistentRpcError`](/api/bosdyn-client/exceptions?id=persistentrpcerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`ProxyConnectionError`](/api/bosdyn-client/exceptions?id=proxyconnectionerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`ResponseError`](/api/bosdyn-client/exceptions?id=responseerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`RetryableRpcError`](/api/bosdyn-client/exceptions?id=retryablerpcerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`RetryableUnavailableError`](/api/bosdyn-client/exceptions?id=retryableunavailableerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`RpcError`](/api/bosdyn-client/exceptions?id=rpcerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`ServerError`](/api/bosdyn-client/exceptions?id=servererror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`ServiceFailedDuringExecutionError`](/api/bosdyn-client/exceptions?id=servicefailedduringexecutionerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`ServiceUnavailableError`](/api/bosdyn-client/exceptions?id=serviceunavailableerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`TimedOutError`](/api/bosdyn-client/exceptions?id=timedouterror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`TooManyRequestsError`](/api/bosdyn-client/exceptions?id=toomanyrequestserror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`UnableToConnectToRobotError`](/api/bosdyn-client/exceptions?id=unabletoconnecttoroboterror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`UnauthenticatedError`](/api/bosdyn-client/exceptions?id=unauthenticatederror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`UnimplementedError`](/api/bosdyn-client/exceptions?id=unimplementederror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`UnknownDnsNameError`](/api/bosdyn-client/exceptions?id=unknowndnsnameerror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`UnsetStatusError`](/api/bosdyn-client/exceptions?id=unsetstatuserror) | [bosdyn-client/exceptions](/api/bosdyn-client/exceptions) |
| [`Robot`](/api/bosdyn-client/robot?id=robot) | [bosdyn-client/robot](/api/bosdyn-client/robot) |
| [`BOSDYN_RESOURCE_ROOT`](/api/bosdyn-client/sdk?id=constants) | [bosdyn-client/sdk](/api/bosdyn-client/sdk) |
| [`Sdk`](/api/bosdyn-client/sdk?id=sdk) | [bosdyn-client/sdk](/api/bosdyn-client/sdk) |
| [`createStandardSdk`](/api/bosdyn-client/sdk?id=createstandardsdk) | [bosdyn-client/sdk](/api/bosdyn-client/sdk) |
| [`CommandHandler` (`main`)](/api/bosdyn-client/command_line?id=main) | [bosdyn-client/command_line](/api/bosdyn-client/command_line) |
