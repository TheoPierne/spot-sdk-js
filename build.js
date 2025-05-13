'use strict';

const { exec } = require('node:child_process');
const { join, resolve } = require('node:path');
const { emitWarning } = require('node:process');

const version = '5.0.0';

const paths = [
  `../spot-sdk-py/spot-sdk-${version}/protos`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/autowalk/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/auto_return/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/docking/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/gps/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/graph_nav/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/keepalive/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/log_status/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/metrics_logging/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/mission/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/spot/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/spot_cam/*.proto`,
];

const output = './src';

const jsBuildOptions = [
  `--js_out=import_style=commonjs,binary:${output}`,
  `--grpc_out=grpc_js:${output}`,
  `--proto_path=${paths.map(e => resolve(join(e))).join(' ')}`,
];

const dTsBuildOptions = [
  `--plugin=protoc-gen-ts=${resolve('./node_modules/.bin/protoc-gen-ts')}.cmd`,
  `--ts_out=grpc_js:${output}`,
  `--proto_path=${paths.map(e => resolve(join(e))).join(' ')}`,
];

function execCommand(command, endMessage) {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    if (stderr) console.log(stderr);
    console.log(endMessage);
  });
}

const jsBuildCommand = `grpc_tools_node_protoc ${jsBuildOptions.join(' ')}`;
const dTsBuildCommand = `grpc_tools_node_protoc ${dTsBuildOptions.join(' ')}`;

emitWarning(
  // eslint-disable-next-line max-len
  "Dont forget to add '[jstype = JS_STRING]' in estop.proto file at EstopCheckInRequest after 'uint64 response = 4' \nSee : https://github.com/grpc/grpc-node/issues/540#issuecomment-420467321",
);

execCommand(jsBuildCommand, '.JS BUILD COMPLETE!');
execCommand(dTsBuildCommand, '.D.TS BUILD COMPLETE!');
