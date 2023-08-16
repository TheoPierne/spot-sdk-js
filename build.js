'use strict';

const child_process = require('node:child_process');
const { join, resolve } = require('node:path');

const version = '3.3.0';

const paths = [
  `../spot-sdk-py/spot-sdk-${version}/protos`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/autowalk/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/auto_return/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/docking/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/graph_nav/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/keepalive/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/log_status/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/mission/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/spot/*.proto`,
  `../spot-sdk-py/spot-sdk-${version}/protos/bosdyn/api/spot_cam/*.proto`,
];

const output = './';

const options = [
  `--js_out=import_style=commonjs,binary:${output}`,
  `--grpc_out=grpc_js:${output}`,
  `--proto_path=${paths.map(e => resolve(join(e))).join(' ')}`,
];

const command = `grpc_tools_node_protoc ${options.join(' ')}`;

child_process.exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  if (stderr) console.log(stderr);
  console.log('BUILD COMPLETE!');
});
