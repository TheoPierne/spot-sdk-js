'use strict';

const child_process = require('node:child_process');
const { join } = require('node:path');

const paths = [
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/*.proto',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/spot_cam/*.proto',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/spot/*.proto',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/mission/*.proto',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/graph_nav/*.proto',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/docking/*.proto',
'C:/Users/theop/Desktop/spot-sdk/spot-sdk-py/spot-sdk-3.1.2/protos/bosdyn/api/auto_return/*.proto',
];

const output = './';

const options = [
`--js_out=import_style=commonjs,binary:${output}`,
`--grpc_out=grpc_js:${output}`,
`--proto_path=${paths.map(e => join(e)).join(' ')}`,
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

