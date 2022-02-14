'use strict';

const argparse = require('argparse');

const util = require('../../bosdyn-client/util');
const client = require('../../index');
const {TimeSyncEndpoint, TimeSyncClient} = require('../../bosdyn-client/time_sync');

async function main(args = null){
	const parser = argparse.ArgumentParser();
	util.add_common_arguments(parser);

	const options = (args == null) ? parser.parse_args() : parser.parse_args(args);

	const sdk = client.sdk.create_standard_sdk('TimeSyncClient');
    const robot = sdk.create_robot(options.hostname);
    await robot.authenticate(options.username, options.password);
    const time_sync_client = await robot.ensure_client(TimeSyncClient.default_service_name);

    const time_sync_endpoint = new TimeSyncEndpoint(time_sync_client);

    const did_establish = await time_sync_endpoint.establish_timesync(10, false);

    console.log(`Did establish timesync: ${did_establish}`);
    console.log(`Client ID: ${time_sync_endpoint.clock_identifier}`);
    console.log(`Clock skew seconds: ${time_sync_endpoint.clock_skew.getSeconds()} nanos: ${time_sync_endpoint.clock_skew.getNanos()}`);
    console.log(`Round trip time seconds: ${time_sync_endpoint.round_trip_time.getSeconds()} nanos: ${time_sync_endpoint.round_trip_time.getNanos()}`);
    return did_establish;
}

if(require.main === module){
	main();
}else{
	module.exports = main;
}