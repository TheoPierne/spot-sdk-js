'use strict';

const argparse = require('argparse');

const util = require('../../bosdyn-client/util');
const client = require('../../index');
const {LeaseClient, LeaseKeepAlive} = require('../../bosdyn-client/lease');
const {RobotCommandClient, blocking_stand} = require('../../bosdyn-client/robot_command');
const {blocking_dock_robot} = require('../../bosdyn-client/docking');

async function run_docking(config){
    const sdk = client.sdk.create_standard_sdk('DockingClient');
    const robot = sdk.create_robot(config.hostname);
    await robot.authenticate(config.username, config.password);

    await (await robot.time_sync).wait_for_sync();

    const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
    const lease = await lease_client.acquire();

    const command_client = await robot.ensure_client(RobotCommandClient.default_service_name);
    try{
        const leaseKeepAlive = new LeaseKeepAlive(lease_client);
        await robot.power_on();
        await blocking_stand(command_client);
        await blocking_dock_robot(robot, config.dock_id);
        console.log("[DOCK MY ROBOT] Docking Success !");
    }catch(e){
    	console.error(e);
    }finally{
        await lease_client.return_lease(lease);
    }
}


async function main(args = null){
    const parser = argparse.ArgumentParser();
    util.add_common_arguments(parser);
    parser.add_argument('--dock-id', {required: true, type: 'int', help: 'Docking station ID to dock at'});

    const options = (args == null) ? parser.parse_args() : parser.parse_args(args);
    await run_docking(options);
}

if(require.main === module){
    main();
}else{
    module.exports = main;
}