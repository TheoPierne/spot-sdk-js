const grpc = require('@grpc/grpc-js');
const fs = require('node:fs');

function main() {
	const server = new grpc.Server();

	fs.readdirSync('./server_services')
	.filter(file => file.endsWith('.js'))
	.forEach(e => {
		const file = require(`./server_services/${e}`);
		server.addService(file.service, file.func);
	});

	server.bindAsync('0.0.0.0:443', grpc.ServerCredentials.createInsecure(), () => {
		console.log(`Server started with ${server.handlers.size} services !`)
		server.start();
	});

	process.on('exit', exitHandler.bind(null, {cleanup:true}));
	process.on('SIGINT', exitHandler.bind(null, {exit:true}));

	function exitHandler(options) {
		if (options.cleanup){
			server.tryShutdown(() => {
				console.log('Server stopped !');
			});
		}

		if (options.exit){
			process.exit();
		}
	}
}

main();