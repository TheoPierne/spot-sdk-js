['log', 'warn', 'error', 'debug'].forEach(function(method) {
   var old = console[method];
   console[method] = function() {
      var stack = (new Error()).stack.split(/\n/);
    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf('Error') === 0) {
       stack = stack.slice(1);
    }
    var args = [].slice.apply(arguments).concat([stack[1].trim()]);
    return old.apply(console, args);
 };
});

const {main} = require('./command_line');

if (require.main === module) {
   if(!main()){
      process.exit(1);
   }
}else{
   const {BaseClient} = require('./common');
   const {
      ResponseError,
      InvalidRequestError,
      LeaseUseError,
      LicenseError,
      ServerError,
      InternalServerError,
      UnsetStatusError,
      RpcError,
      ClientCancelledOperationError,
      InvalidAppTokenError,
      InvalidClientCertificateError,
      NonexistentAuthorityError,
      NotFoundError,
      ProxyConnectionError,
      ServiceUnavailableError,
      ServiceFailedDuringExecutionError,
      TimedOutError,
      UnableToConnectToRobotError,
      UnauthenticatedError,
      UnknownDnsNameError,
      UnimplementedError
   } = require('./exceptions');

   const {
      AuthClient, 
      ExpiredApplicationTokenError, 
      InvalidLoginError, 
      InvalidApplicationTokenError, 
      InvalidTokenError
   } = require('./auth');

   const {Robot} = require('./robot');

   const {Sdk, create_standard_sdk, BOSDYN_RESOURCE_ROOT} = require('./sdk');

   module.exports = {
   // common.js
   BaseClient,

   // exceptions.js
   ResponseError,
   InvalidRequestError,
   LeaseUseError,
   LicenseError,
   ServerError,
   InternalServerError,
   UnsetStatusError,
   RpcError,
   ClientCancelledOperationError,
   InvalidAppTokenError,
   InvalidClientCertificateError,
   NonexistentAuthorityError,
   NotFoundError,
   ProxyConnectionError,
   ServiceUnavailableError,
   ServiceFailedDuringExecutionError,
   TimedOutError,
   UnableToConnectToRobotError,
   UnauthenticatedError,
   UnknownDnsNameError,
   UnimplementedError,

   // auth.js
   AuthClient, 
   ExpiredApplicationTokenError, 
   InvalidLoginError, 
   InvalidApplicationTokenError, 
   InvalidTokenError,

   // robot.js
   Robot,

   // sdk.js
   Sdk, 
   create_standard_sdk, 
   BOSDYN_RESOURCE_ROOT,

   // command_line.js
   CommandHandler: main
};

}