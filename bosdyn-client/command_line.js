const nj = require('numjs');
const argparse = require('argparse');
const path = require('node:path');
const {writeFileSync, readFileSync, mkdirSync} = require('fs');

const { setTimeout: sleep } = require('node:timers/promises');

const {InvalidLoginError} = require('./auth');
const {get_self_ip} = require('./common');
const {InvalidAppTokenError, ProxyConnectionError, InvalidRequestError} = require('./exceptions');
const {DataAcquisitionClient} = require('./data_acquisition');
const {acquire_and_process_request} = require('./data_acquisition_helpers');
const {DataBufferClient} = require('./data_buffer');
const {DataServiceClient} = require('./data_service');
const {DirectoryClient, NonexistentServiceError} = require('./directory');
const {DirectoryRegistrationClient, DirectoryRegistrationResponseError} = require('./directory_registration');
const {EstopClient, EstopEndpoint, EstopKeepAlive} = require('./estop');
const {ImageClient, UnknownImageSourceError, ImageResponseError, build_image_request, save_images_as_files} = require('./image');
const {LeaseClient} = require('./lease');
const {LicenseClient} = require('./license');
const {LocalGridClient} = require('./local_grid');
const {
    PowerClient, 
    power_off_robot, 
    power_cycle_robot, 
    power_on_payload_ports,
    power_off_payload_ports, 
    power_on_wifi_radio, 
    power_off_wifi_radio
} = require('./power');
const {PayloadClient} = require('./payload');
const {PayloadRegistrationClient, PayloadAlreadyExistsError} = require('./payload_registration');
const {RobotIdClient} = require('./robot_id');
const {RobotStateClient} = require('./robot_state');
const {SdkError, create_standard_sdk} = require('./sdk');
const {TimeSyncClient, TimeSyncEndpoint, TimeSyncError, timespec_to_robot_timespan} = require('./time_sync');
const {add_common_arguments} = require('./util');

const {TextMessage} = require('../bosdyn/api/data_buffer_pb');
const {EventsCommentsSpec} = require('../bosdyn/api/data_index_pb');
const data_acquisition_pb = require('../bosdyn/api/data_acquisition_pb');
const directory_registration_pb = require('../bosdyn/api/directory_registration_pb');
const payload_pb = require('../bosdyn/api/payload_pb');
const {duration_str, timestamp_to_datetime} = require('../bosdyn-core/util');

class Command {

	constructor(subparsers, command_dict, NAME = null, NEED_AUTHENTICATION = true){
        this.NAME = NAME;
        this.NEED_AUTHENTICATION = NEED_AUTHENTICATION;
        command_dict[this.NAME] = this;
        this._parser = subparsers.add_parser(this.NAME);
    }

    run(robot, options){
    	try{
    		if(this.NEED_AUTHENTICATION){
                robot.authenticate(options.username, options.password);
                robot.sync_with_directory();
            }
            return this._run(robot, options);
        }catch(e){
            if(e instanceof ProxyConnectionError){
                console.error(`Could not contact robot with hostname "${options.hostname}".`);
            }else if(e instanceof InvalidAppTokenError){
                console.error(`The provided app token "${options.app_token}" is invalid.`);
            }else if(e instanceof InvalidLoginError){
                console.error(`Username "${options.username}" and/or password are invalid.`);
            }else{
                console.error(e);
            }
        }
    }

    _run(robot, options){

    }

};

class Subcommands extends Command {

    constructor(subparsers, command_dict, NAME, subcommands){
        super(subparsers, command_dict, NAME);
        this.NAME = NAME;
        this._subcommands = {};
        const cmd_subparsers = this._parser.add_subparsers({dest: `${this.NAME}_command`});
        cmd_subparsers.required = true;
        for(const subcommand of subcommands){
            new subcommand(cmd_subparsers, this._subcommands);
        }
    }

    _run(robot, options){
        const command_dest = `${this.NAME}_command`;
        const subcommand = options[command_dest];
        return this._subcommands[subcommand].run(robot, options);
    }

};

function _format_dir_entry(name, service_type, authority, tokens, name_width = 23, type_width = 31, authority_width = 27){
    console.log(`${name.padEnd(name_width, ' ')} | ${service_type.padEnd(type_width, ' ')} | ${authority.padEnd(authority_width, ' ')} | ${tokens}`);
}

function  _token_req_str(entry){
    const required = [];
    if(entry.getUserTokenRequired()){
        required.push('user');
    }
    if(required.length == 0){
        return '';
    }
    return required.join(', ');
}

async function _show_directory_list(robot, as_proto = false){

    const client = await robot.ensure_client(DirectoryClient.default_service_name);
    const entries = await client.list();

    if(!entries){
        console.log("No services found");
        return true;
    }

    if(as_proto){
        for(const entry of entries){
            console.log(entry.toObject());
        }
        return true;
    }


    const max_name_length = entries.length ? Math.max(...entries.map(e => e.getName().length)) : 0;
    const max_type_length = entries.length ? Math.max(...entries.map(e => e.getType().length)) : 0;
    const max_authority_length = entries.length ? Math.max(...entries.map(e => e.getAuthority().length)) : 0;

    _format_dir_entry('name', 'type', 'authority', 'tokens', max_name_length + 4, max_type_length + 4, max_authority_length + 4);
    console.log("-".repeat(20 + max_name_length + max_type_length + max_authority_length));
    for(const entry of entries){
        _format_dir_entry(entry.getName(), entry.getType(), entry.getAuthority(), _token_req_str(entry), max_name_length + 4, max_type_length + 4, max_authority_length + 4);
    }

    return true;
}

async function _show_directory_entry(robot, service, as_proto = false){
    const client = await robot.ensure_client(DirectoryClient.default_service_name);
    const entry = await client.get_entry(service);
    if(as_proto){
        console.log(entry);
    }else{
        _format_dir_entry('name', 'type', 'authority', 'tokens');
        console.log("-".repeat(90))
        _format_dir_entry(entry.getName(), entry.getType(), entry.getAuthority(), _token_req_str(entry));
    }
    return true;
}

class DirectoryCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'dir', [
            DirectoryListCommand, 
            DirectoryGetCommand, 
            DirectoryRegisterCommand, 
            DirectoryUnregisterCommand
            ]);
    }
};

class DirectoryListCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'list');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
    }

    _run(robot, options){
        _show_directory_list(robot, options.proto);
        return true;
    }
};

class DirectoryGetCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'get');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
        this._parser.add_argument('service', {help: 'service name to get entry for'});
    }

    _run(robot, options){
        try{
            _show_directory_entry(robot, options.service, options.proto);
        }catch(e){
            console.log(`The requested service name "${options.service}" does not exist.  Available services:`);
            _show_directory_list(robot, options.proto);
            return false;
        }
        return true;
    }

};

class DirectoryRegisterCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'register');
        this._parser.add_argument('--service-name', {required: true, help: 'unique name of the service'});
        this._parser.add_argument('--service-type', {required: true, help: 'Type of the service, e.g. bosdyn.api.RobotStateService'});
        this._parser.add_argument('--service-authority', {required: true, help: 'authority of the service'});
        this._parser.add_argument('--service-hostname', {required: true, help: 'hostname of the service computer'});
        this._parser.add_argument('--service-port', {required: true, type: 'int', help: 'port the service is running on'});
        this._parser.add_argument('--no-user-token',{action: 'store_true', required: false, help: 'disable requirement for user token'});
    }

    async _run(robot, options){
        const directory_registration_client = await robot.ensure_client(DirectoryRegistrationClient.default_service_name);

        try{
            await directory_registration_client.register(options.service_name, options.service_type, options.service_authority, options.service_hostname, options.service_port, !options.no_user_token);
        }catch(e){
            console.error(`Failed to register service ${options.service_name}.\nResponse Status: ${directory_registration_pb.RegisterServiceResponse.Status[e.response.getStatus()]}`);
            return false;
        }

        console.log(`Succesfully registered service ${options.service_name}`);
        return true;
    }
};

class DirectoryUnregisterCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'unregister');
        this._parser.add_argument('--service-name', {required: true, help: 'unique name of the service'});
    }

    async _run(robot, options){
        const directory_registration_client = await robot.ensure_client(DirectoryRegistrationClient.default_service_name);

        try{
            await directory_registration_client.unregister(options.service_name);
        }catch(e){
            console.error(`Failed to unregister service ${options.service_name}.\nResponse Status: ${directory_registration_pb.UnregisterServiceResponse.Status[e.response.getStatus()]}`);
            return false;
        }

        console.log(`Succesfully unregistered service ${options.service_name}`);
        return true;
    }
};

class PayloadCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'payload', [PayloadListCommand, PayloadRegisterCommand])
    }

};

async function _show_payload_list(robot, as_proto = false){
    const client = await robot.ensure_client(PayloadClient.default_service_name);
    const payload_protos = await client.list_payloads();
    if(!payload_protos){
        console.log("No payloads found");
        return true;
    }

    if(as_proto){
        for(const payload of payload_protos){
            console.log(payload);
        }
        return true;
    }

    const out = [];
    for(const payload of payload_protos){
        out.push({Name: payload.getName(), Description: payload.getDescription(), GUID: payload.getGUID()});
    }
    console.table(out);
    return true;
}

class PayloadListCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'list');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
    }

    _run(robot, options){
        _show_payload_list(robot, options.proto);
        return true;
    }

};

async function _register_payload(robot, name, guid, secret){
    const payload_pb = require('../bosdyn/api/payload_pb');
    const payload_registration_client = await robot.ensure_client(PayloadRegistrationClient.default_service_name);
    const payload = new payload_pb.Payload().setName(name).setGuid(guid);
    let isCatch = false;
    try{
        await payload_registration_client.register_payload(payload, secret);
    }catch(e){
        isCatch = true;
        console.error('\nA payload with this GUID is already registered. Check the robot Admin Console.');
    }

    if(!isCatch){
        console.log('\nPayload successfully registered with the robot. \nBefore it can be used, the payload must be authorized in the Admin Console.');
    }
    return true;
}

class PayloadRegisterCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'register');
        this._parser.add_argument('--payload-name', {required: true, help: 'name of the payload'});
        this._parser.add_argument('--payload-guid', {required: true, help: 'guid of the payload'});
        this._parser.add_argument('--payload-secret', {required: true, help: 'secret for the payload'});
    }

    _run(robot, options){
        _register_payload(robot, options.payload_name, options.payload_guid, options.payload_secret);
    }
};

class FaultCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'fault', [FaultShowCommand, FaultWatchCommand]);
    }

};

async function _show_service_faults(robot){
    const robot_state_client = await robot.ensure_client(RobotStateClient.default_service_name);
    const service_fault_state = await robot_state_client.get_robot_state().getServiceFaultState();

    console.log('\n\n\n' + '-'.repeat(80))
    if(service_fault_state.getFaults().length == 0){
        console.log("No active service faults.")
        return;
    }

    for(const fault of service_fault_state.getFaults()){
        console.log(`${fault.getFaultId().getFaultName()} \nService Name: ${fault.getFaultId().getServiceName()} \nPayload GUID: ${fault.getFaultId().getPayloadGuid()} \nError Message: ${fault.getErrorMessage()} \nOnset Time: ${timestamp_to_datetime(fault.getOnsetTimestamp())}`);
    }
    return;
}

class FaultShowCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'show');
    }

    _run(robot, options){
        _show_service_faults(robot);
        return true;
    }

};

class FaultWatchCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'watch');
    }

    async _run(robot, options){
        print('Press Ctrl-C or send SIGINT to exit\n\n')
        while(true){
            _show_service_faults(robot);
            await sleep(1000);
        }

        return true;
    }

};

class RobotIdCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'id', false);
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
    }

    async _run(robot, options){
        const client = await robot.ensure_client(RobotIdClient.default_service_name);
        const response = await client.get_id();
        if(options.proto){
            console.log(response.toObject());
            return true;
        }
        let nickname = '';
        if(response.getNickname() && response.getNickname() != response.getSerialNumber()){
            nickname = response.getNickname();
        }
        const release = response.getSoftwareRelease();
        const version = release.getVersion();
        console.log(`\n${response.getSerialNumber().padEnd(20)} ${response.getComputerSerialNumber().padEnd(15)} ${nickname.padEnd(10)} ${response.getSpecies()} (${response.getVersion()})`);
        console.log(` Software: ${version.getMajorVersion()}.${version.getMinorVersion()}.${version.getPatchLevel()} (${release.getChangeset()} ${timestamp_to_datetime(release.getChangesetDate())})`);
        console.log(`  Installed: ${timestamp_to_datetime(release.getInstallDate())}`);
        return true;
    }

};

class DataBufferCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'log', [TextMsgCommand, OperatorCommentCommand])
    }

};

class TextMsgCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'textmsg');
        this._parser.add_argument('--timestamp', {action: 'store_true', help: 'achieve time-sync and send timestamp'});
        this._parser.add_argument('--tag', {help: 'Tag for message'});
        const parser_log_level = this._parser.add_mutually_exclusive_group();
        parser_log_level.add_argument('--debug', '-D', {action: 'store_true', help: 'Log at debug-level'});
        parser_log_level.add_argument('--info', '-I', {action: 'store_true', help: 'Log at info-level'});
        parser_log_level.add_argument('--warn', '-W', {action: 'store_true', help: 'Log at warn-level'});
        parser_log_level.add_argument('--error', '-E', {action: 'store_true', help: 'Log at error-level'});
        this._parser.add_argument('message', {help: 'Message to log'});
    }

    async _run(robot, options){
        let robot_timestamp = null;
        if(options.timestamp){
            try{
                robot_timestamp = robot.time_sync.robot_timestamp_from_local_secs(Date.now(), timesync_timeout_sec = 1.0);
            }catch(e){
                console.error("Failed to send message with timestamp: {}.".format(err))
                return false;
            }
        }

        const msg_proto = new TextMessage().setMessage(options.message).setTimestamp(robot_timestamp);

        if(options.debug){
            msg_proto.setLevel(TextMessage.Level.LEVEL_DEBUG);
        }else if(options.warn){
            msg_proto.setLevel(TextMessage.Level.LEVEL_WARN);
        }else if(options.error){
            msg_proto.setLevel(TextMessage.Level.LEVEL_ERROR);
        }else{
            msg_proto.setLevel(TextMessage.Level.LEVEL_INFO);
        }

        if(options.tag){
            msg_proto.setTag(options.tag);
        }

        const log_client = await robot.ensure_client(LogAnnotationClient.default_service_name);
        await log_client.add_text_messages([msg_proto]);

        return true;
    }
};

class OperatorCommentCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'comment');
        this._parser.add_argument('--timestamp', {action: 'store_true', help: 'achieve time-sync and send timestamp'});
        this._parser.add_argument('message', {help: 'operator comment text'});
    }

    _run(robot, options){
        let client_timestamp = null;
        if(options.timestamp){
            client_timestamp = Date.now();
            try{
                // robot.time_sync.wait_for_sync(1.0);
            }catch(e){
                console.error(`Failed to get timesync for setting comment timestamp: ${err}.`);
                return false;
            }
        }
        robot.operator_comment(options.message, client_timestamp);
        return true;
    }

};

class DataServiceCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'data', [GetDataBufferCommentsCommand, GetDataBufferEventsCommand, GetDataBufferStatusCommand]);
    }

};

class GetDataBufferEventsCommentsCommand extends Command {

    constructor(subparsers, command_dict, name = ''){
        super(subparsers, command_dict, name);
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print in proto format'});
        this._parser.add_argument('-T', '--timespan', {help: 'Time span (default all).  "1h" (last hour), "10m-5m" (from 10 to 5 minutes ago).'});
        this._parser.add_argument('-R', '--robot-time', {action: 'store_true', help: 'Specified timespan is in robot time'});
    }

    _run(robot, options){

    }

    pretty_print(values){

    }

    async _get_result(request_spec, robot, options, get_values_fn){
        const client = await robot.ensure_client(DataServiceClient.default_service_name)
        if(options.timespan){
            let time_sync_endpoint = null;
            if(!options.robot_time){
                const time_sync_client = await robot.ensure_client(TimeSyncClient.default_service_name);
                const time_sync_endpoint = new TimeSyncEndpoint(time_sync_client);
                if(!time_sync_endpoint.establish_timesync()){
                    console.log("Failed to get timesync for requesting comments.");
                    return false;
                }
            }
            const time_range = timespec_to_robot_timespan(options.timespan, time_sync_endpoint)
            request_spec.setTimeRange(time_range);
        }
        const values = get_values_fn(await client.get_events_comments(request_spec));
        if(options.proto){
            console.log(values);
        }else{
            this.pretty_print(values);
        }
        return true;
    }

};

class GetDataBufferCommentsCommand extends GetDataBufferEventsCommentsCommand {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'comments');
    }

    async _run(robot, options){
        const request_spec = new EventsCommentsSpec().setComments(true);

        function _get_comments(response){
            return response.getEventsComments().getOperatorComments();
        }

        return await this._get_result(request_spec, robot, options, _get_comments);
    }

    pretty_print(values){
        let last_date_shown = null;
        for(const comment of values){
            const dtm = new Date(comment.getTimestamp().getSeconds() + comment.getTimestamp().getSeconds() * 1e-9);
            if(dtm.getTime() != last_date_shown){
                console.log(`\n[${dtm.getTime()}]`);
                last_date_shown = dtm.getTime();
            }
            console.log(` ${dtm.getTime()}  ${comment.getMessage()}`);
        }
    }

};

class GetDataBufferEventsCommand extends GetDataBufferEventsCommentsCommand {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'events');
    }

    async _run(robot, options){
        const request_spec = new EventsCommentsSpec().addEvents();

        function _get_events(response){
            return response.getEventsComments().getEvents();
        }

        return await this._get_result(request_spec, robot, options, _get_events);
    }

    static _level_name(event){
        const prefix = 'LEVEL_';
        let name = event.Level[event.getLevel()]
        if(name.startswith(prefix)) return name.splice(prefix.length);
        return name;
    }

    pretty_print(values){
        let last_date_shown = null;
        for(const event of values){
            const start_secs = event.getStartTime().getSeconds() + event.getStartTime().getSeconds() * 1e-9;
            const start_dt = new Date(start_secs);
            if(start_dt.getTime() != last_date_shown){
                console.log(`\n[${start_dt.getTime()}]`);
                last_date_shown = start_dt.getTime();
            }
            if(event.getEndTime() && event.getEndTime() != event.getStartTime()){
                const end_secs = event.getEndTime().getSeconds() + event.getEndTime().getSeconds() * 1e-9;
                const end_dt = new Date(end_secs);
                console.log(` ${start_dt.getTime()}-${end_dt.getTime()} (END) (${end_secs - start_secs}) ${event.getType()}  ${GetDataBufferEventsCommand._level_name(event)} <${event.getSource()}> `);
            }else{
                const timing = event.getEndTime() ? '' : '(START)';
                console.log(` ${start_dt.getTime()} ${timing} ${event.getType()}  ${GetDataBufferEventsCommand._level_name(event)}  <${event.getSource()}> `);
            }
            if(event.getDescription()){
                console.log(`\t${event.getDescription()}`);
            }
        }
    }

};

class GetDataBufferStatusCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'status');
        this._parser.add_argument('--get-blob-specs', '-B', {action: 'store_true', help: 'get list of channel/msgtype/source combinations'});
    }

    async _run(robot, options){
        const client = await robot.ensure_client(DataServiceClient.default_service_name);
        const response = await client.get_data_buffer_status(options.get_blob_specs);
        console.log(response);
        return true;
    }

};

class RobotStateCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'state', [FullStateCommand, HardwareConfigurationCommand, MetricsCommand, RobotModel]);
    }

};

class FullStateCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'full');
    }

    async _run(robot, options){
        const client = await robot.ensure_client(RobotStateClient.default_service_name);
        const response = await client.get_robot_state();
        console.log(response);
        return true;
    }

};

class HardwareConfigurationCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'hardware');
    }

    async _run(robot, options){
        const client = await robot.ensure_client(RobotStateClient.default_service_name);
        const response = await client.get_robot_hardware_configuration();
        console.log(proto);
        return true;
    }

};

class RobotModel extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'model', false);
        this._parser.add_argument('--outdir', {default: 'Model_Files', help: 'directory into which to save the files'});
    }

    async _run(robot, options){
        const robot_state_client = await robot.ensure_client(RobotStateClient.default_service_name);
        const hardware = await robot_state_client.get_robot_hardware_configuration();

        const model_directory = options.outdir;

        try{
            mkdirSync(model_directory);
        }catch(e){

        }

        for(const link in hardware.getSkeleton().getLinks()){
            let obj_model_proto;
            try{
                obj_model_proto = await robot_state_client.get_robot_link_model(link.getName());
            }catch(e){
                console.error(e);
                console.error(" Name of link: " + link.getName());
                continue;
            }

            if(!obj_model_proto.getFileName()){
                continue;
            }

            const sub_path = `${obj_model_proto.getFileName().split('/').slice(0, -1)}`;
            const pathName = path.join(model_directory, sub_path);
            try{
                mkdirSync(pathName);
            }catch(e){

            }

            const path_and_name = path.join(pathName, obj_model_proto.getFileName().split('/').slice(-1));
            writeFileSync(path_and_name, obj_model_proto.getFileContents());
            console.log('Link file written to ' + path_and_name);
        }

        writeFileSync(path.join(model_directory, "model.urdf"), hardware.getSkeleton().getUrdf());
        console.log('URDF file written to ' + path.join(model_directory, "model.urdf"));

        return true;
    }

};

class MetricsCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'metrics');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print metrics in proto format'});
    }

    async _run(robot, options){
        const client = await robot.ensure_client(RobotStateClient.default_service_name);
        const response = await client.get_robot_metrics();
        if(options.proto){
            console.log(response.toObject())
            return true;
        }
        for(const metric of response.getMetricsList()){
            console.log(MetricsCommand._format_metric(metric));
        }
        return true;
    }

    static _secs_to_hms(seconds){
        const isecs = parseInt(seconds);
        seconds = isecs % 60;
        const minutes = (isecs / 60) % 60;
        const hours = isecs / 3600;
        return `${hours}:${minutes}:${seconds}`;
    }

    static _distance_str(meters){
        if(meters < 1000) return `${meters} m`;
        return `${parseFloat(meters) / 1000} km`;
    }

    static _format_metric(metric){
        if(metric.hasFloatValue()){
            if(metric.getUnits() == 'm'){
                return `${metric.getLabel()} ${MetricsCommand._distance_str(metric.getFloatValue())}`;
            }
            return `${metric.getLabel()} ${metric.getFloatValue()} ${metric.getUnits()}`;
        }else if(metric.hasIntValue()){
            return `${metric.getLabel()} ${metric.getIntValue()} ${metric.getUnits()}`;
        }else if(metric.hasBoolValue()){
            return `${metric.getLabel()} ${metric.getBoolValue()} ${metric.getUnits()}`;
        }else if(metric.hasDuration()){
            return `${metric.getLabel()} ${MetricsCommand._secs_to_hms(metric.getDuration().getSeconds())}`;
        }else if(metric.hasStringValue()){
            return `${metric.getLabel()} ${metric.getStringValue()}`;
        }
        return `${metric.getLabel()} ${metric.getValue()} ${metric.getUnits()}`;
    }

};

class TimeSyncCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'time-sync');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
    }

    async _run(robot, options){
        const endpoint = new TimeSyncEndpoint(await robot.ensure_client(TimeSyncClient.default_service_name));
        if (!endpoint.establish_timesync(break_on_success = true)){
            console.log("Failed to achieve time sync");
            return false;
        }

        if(options.proto){
            const response = await endpoint.response;
            console.log(response);
            return true;
        }

        console.log(`GRPC round-trip time: ${duration_str(endpoint.round_trip_time)}`);
        console.log(`Local time to robot time: ${duration_str(endpoint.clock_skew)}`);

        return true;
    }

};

class LicenseCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'license');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
        this._parser.add_argument(['-f', '--feature-codes'], {nargs: '+', help: 'Optional feature list for GetFeatureEnabled API.'});
    }

    async _run(robot, options){
        const license_client = await robot.ensure_client(LicenseClient.default_service_name);
        await this._get_license_info(license_client, options);
        await this._get_feature_enabled(license_client, options);
        return true;        
    }

    async _get_license_info(license_client, options){
        const license = await license_client.get_license_info();

        if(options.proto){
            console.log(license)
        }else{
            console.log(license.toObject());
        }
    }

    async _get_feature_enabled(license_client, options){
        if(!options.feature_codes || options.feature_codes.length == 0) return;

        const feature_enabled = await license_client.get_feature_enabled(options.feature_codes);

        for(const feature of feature_enabled){
            if(feature_enabled[feature]){
                console.log(`Feature ${feature} is enabled.`);
            }else{
                console.log(`Feature ${feature} is not enabled.`);
            }
        }
    }

};

class LeaseCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'lease', [LeaseListCommand]);
    }

};

class LeaseListCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'list');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
    }

    async _run(robot, options){
        const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
        const resources = await lease_client.list_leases();
        if(options.proto){
            console.log(resources)
            return true;
        }
        for(const resource of resources){
            console.log(LeaseListCommand._format_lease_resource(resource));
        }
        return true;
    }

    static _format_lease_resource(resource){
        return resource.hasOwnProperty('toString') ? resource.toString() : String(resource);
    }

};

class BecomeEstopCommand extends Command {

    _RPC_PRINT_CHOICES = ['timestamp', 'full'];

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'become-estop');
        this._parser.add_argument('--timeout', {type: 'float', help: 'EStop timeout (seconds)', default: 10});
        this._parser.add_argument('--rpc-print', {choices: this._RPC_PRINT_CHOICES, default: 'timestamp', help: 'How much of the request/response messages to print'});
    }

    async _run(robot, options){
        const client = await robot.ensure_client(EstopClient.default_service_name);

        function _timestamp_fmt_request(request){
            return `(request timestamp: ${request.getHeader().getRequestTimestamp().toDate().getTime()})`;
        }

        function _timestamp_fmt_response(response){
            return `(response timestamp: ${response.getHeader().getRequestTimestamp().toDate().getTime()})`;
        }

        if(options.rpc_print == 'timestamp'){
            client.request_trim_for_log = _timestamp_fmt_request;
            client.response_trim_for_log = _timestamp_fmt_response;
        }

        const endpoint = new EstopEndpoint(client, 'command-line', options.timeout);
        endpoint.force_simple_setup();

        // console.log('Press Ctrl-C or send SIGINT to exit');
        process.on('SIGINT', () => {
            // 
        });

        const keep_alive = new EstopKeepAlive(endpoint);

        // Solution temporaire le temps d'avoir un plugins pour executer des threads

        setTimeout(() => {
            keep_alive.stop();
        }, 10000);

        endpoint.deregister();

        return true;
    }

};

class ImageCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'image', [ListImageSourcesCommand, GetImageCommand]);
    }

};

async function _show_image_sources_list(robot, as_proto = false, service_name = null){
    service_name = service_name || ImageClient.default_service_name;
    const client = await robot.ensure_client(service_name);
    const response = await client.list_image_sources();
    if(as_proto){
        console.log(response.toObject());
    }else{
        for(const image_source of response){
            console.log(`${image_source.getName().padEnd(30, ' ')} (${image_source.getRows()}x${image_source.getCols()})`);
        }
    }
    return true;
}

class ListImageSourcesCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'list-sources');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
        this._parser.add_argument('--service-name', {default: ImageClient.default_service_name, help: 'Image service to query'});
    }

    _run(robot, options){
        _show_image_sources_list(robot, options.proto, options.service_name);
        return true;
    }

};

class GetImageCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'get-image');
        this._parser.add_argument('--outfile', {default: null, help: 'Filename into which to save the image'});
        this._parser.add_argument('--quality-percent', {type: 'int', default: 75, help: 'Percent image quality (0-100)'});
        this._parser.add_argument('source_name', {metavar: 'SRC', nargs: '+', help: 'Image source name'});
        this._parser.add_argument('--service-name', {help: 'Image service to query', default: ImageClient.default_service_name});
    }

    async _run(robot, options){
        const image_requests = options.source_name.map(x => build_image_request(x, options.quality_percent));
        const client = await robot.ensure_client(ImageClient.default_service_name);

        let response;
        try{
            response = await client.get_image(image_requests);
        }catch(e){
            if(e instanceof UnknownImageSourceError){
                console.error(`Requested image source "${options.source_name}" does not exist. Available image sources:`);
                _show_image_sources_list(robot, false, options.service_name);
                return false;
            }else if(e instanceof ImageResponseError){
                console.error(`Robot cannot generate the "${options.source_name}" at this time. Retry the command.`);
                return false;
            }
        }

        save_images_as_files(response);

        return true;
    }
};

class LocalGridCommands extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'local_grid', [ListLocalGridTypesCommand, GetLocalGridsCommand]);
    }

};

async function _show_local_grid_sources_list(robot, as_proto = false){
    const client = await robot.ensure_client(LocalGridClient.default_service_name);
    const response = await client.get_local_grid_types();
    if(as_proto){
        console.log(response.toObject());
    }else{
        for(const local_grid_type of response){
            console.log(local_grid_type.getName());
        }
    }
    return true;
}

class ListLocalGridTypesCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'types');
        this._parser.add_argument('--proto', {action: 'store_true', help: 'print listing in proto format'});
    }

    _run(robot, options){
        _show_local_grid_sources_list(robot, options.proto);
        return true;
    }

};

class GetLocalGridsCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'get');
        this._parser.add_argument('--outfile', {default: null, help: 'filename into which to save the image'});
        this._parser.add_argument('types', {metavar: 'SRC', nargs: '+', help: 'image types'});
    }

    async _run(robot, options){
        const client = await robot.ensure_client(LocalGridClient.default_service_name);
        const response = await client.get_local_grids(options.types);

        for(const local_grid_response of response){
            console.log(local_grid_response);
        }
        return true;
    }

};

class DataAcquisitionCommand extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'acquire', [DataAcquisitionServiceCommand, DataAcquisitionRequestCommand, DataAcquisitionStatusCommand]);
    }

};

class DataAcquisitionRequestCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'request');
        this._parser.add_argument('--image-source', {metavar: 'IMG_SRC', default: [], help: 'Image source name', action: 'append'});
        this._parser.add_argument('--image-service', {metavar: 'SERVICE_NAME', default: [], help: 'Image service name for the image source.', action: 'append'});
        this._parser.add_argument('--data-source', {metavar: 'DATA_SRC', default: [], help: 'Data source name', action: 'append'});
        this._parser.add_argument('--action-name', {help: 'The action name to save the data with.', default: "quick_captures"});
        this._parser.add_argument('--group-name', {help: 'The group name to save the data with.', default: "command_line"});
        this._parser.add_argument('--non-blocking-request', {help: 'Return after making the acquisition request, without monitoring the status for completion.', default: false, action: 'store_true'});
    }

    async _run(robot, options){
        if(!options.data_source && !(options.image_source && options.image_service)){
            this._parser.error('A request requires either a data source name or an image source+service name.');
        }
        if(options.image_source.length != options.image_service.length){
            this._parser.error('A request must have a 1:1 correspondence between image source and image service arguments.');
        }

        const captures = new data_acquisition_pb.AcquisitionRequestList();
        captures.setDataCapturesList(options.data_source.map(data_name => new data_acquisition_pb.DataCapture().setName(data_name)));

        const img_captures = [];
        for(const [i, src_name] of options.image_source.entries()){
            const img_service = options.image_service[i];
            img_captures.push(new data_acquisition_pb.ImageSourceCapture().setImageService(img_service).setImageSource(src_name));
        }
        captures.setImageCapturesList(img_captures);

        // robot.time_sync.wait_for_sync(1.0);
        const data_acquisition_client = await robot.ensure_client(DataAcquisitionClient.default_service_name);
        const success = await acquire_and_process_request(data_acquisition_client, captures, options.group_name, options.action_name, null, !options.non_blocking_request);
        return success;
    }

};

class DataAcquisitionServiceCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'info');
        this._data_type_width = 15;
        this._data_name_width = 35;
        this._service_name_width = 30;
    }

    async _run(robot, options){
        const client = await robot.ensure_client(DataAcquisitionClient.default_service_name);
        const response = await client.get_service_info();
        console.log("Data Acquisition Service's Available Capabilities\n")
        console.log("-".repeat(this._data_type_width + this._data_name_width + this._service_name_width))
        const out = [];
        for(const data_name of response.getDataSources()){
            out.push({Data_Type: "data", Data_Name: data_name.getName(), Service_Name: ""});
        }

        for(const img_service of response.getImageSourcesList()){
            for(const img of img_service.getImageSourceNamesList()){
                out.push({Data_Type: "image", Data_Name: img, Service_Name: img_service.getServiceName()});
            }
        }
        console.table(out);
        return true;

    }
};

class DataAcquisitionStatusCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'status');
        this._parser.add_argument('id', {type: 'int', help: 'Response id to get the status for'});
    }

    async _run(robot, options){
        const client = await robot.ensure_client(DataAcquisitionClient.default_service_name);
        const response = await client.get_status(options.id);
        console.log(response.toObject());
        return true;
    }

};

class HostComputerIPCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'self-ip', false);
    }

    _run(robot, options){
        console.log(`The IP address of the computer used to talk to the robot is: ${get_self_ip(robot._name)}`)
    }

};

class PowerCommand extends Subcommands {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'power', [PowerRobotCommand, PowerPayloadsCommand, PowerWifiRadioCommand]);
    }

};

class PowerRobotCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'robot');
        this._parser.add_argument('cmd', {choices: ['cycle', 'off']});
    }

    async _run(robot, options){
        // robot.time_sync.wait_for_sync(1.0);
        const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
        const lease = await lease_client.acquire();
        const power_client = await robot.ensure_client(PowerClient.default_service_name);
        if(options.cmd == 'cycle'){
            power_cycle_robot(power_client)
        }else if(options.cmd == 'off'){
            power_off_robot(power_client);
        }
    }

};

class PowerPayloadsCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'payload');
        this._parser.add_argument('on_off', {choices: ['on', 'off']});
    }

    async _run(self, robot, options){
        // robot.time_sync.wait_for_sync(1.0);
        const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
        const lease = await lease_client.acquire();
        const power_client = await robot.ensure_client(PowerClient.default_service_name);
        if(options.on_off == 'on'){
            power_on_payload_ports(power_client);
        }else if(options.on_off == 'off'){
            power_off_payload_ports(power_client);
        }
    }

};

class PowerWifiRadioCommand extends Command {

    constructor(subparsers, command_dict){
        super(subparsers, command_dict, 'wifi');
        this._parser.add_argument('on_off', {choices: ['on', 'off']});
    }

    async _run(self, robot, options){
        // robot.time_sync.wait_for_sync(1.0);
        const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
        const lease = await lease_client.acquire();
        const power_client = await robot.ensure_client(PowerClient.default_service_name);
        if(options.on_off == 'on'){
            power_on_wifi_radio(power_client);
        }else if(options.on_off == 'off'){
            power_off_wifi_radio(power_client);
        }
    }

};



function main(args = null){
    const parser = argparse.ArgumentParser({prog: 'bosdyn.client', description: 'Command-line interface for interacting with robot services.'});
    add_common_arguments(parser);

    const command_dict = {};
    const subparsers = parser.add_subparsers({title: 'commands', dest: 'command'});

    new DirectoryCommands(subparsers, command_dict);
    new PayloadCommands(subparsers, command_dict);
    new FaultCommands(subparsers, command_dict);
    new RobotIdCommand(subparsers, command_dict);
    new LicenseCommand(subparsers, command_dict);
    new RobotStateCommands(subparsers, command_dict);
    new DataBufferCommands(subparsers, command_dict);
    new DataServiceCommands(subparsers, command_dict);
    new TimeSyncCommand(subparsers, command_dict);
    new LeaseCommands(subparsers, command_dict);
    new BecomeEstopCommand(subparsers, command_dict);
    new ImageCommands(subparsers, command_dict);
    new LocalGridCommands(subparsers, command_dict);
    new DataAcquisitionCommand(subparsers, command_dict);
    new HostComputerIPCommand(subparsers, command_dict);
    new PowerCommand(subparsers, command_dict);

    const options = (args == null) ? parser.parse_args() : parser.parse_args(args);

    const sdk = create_standard_sdk('BosdynClient');
    const robot = sdk.create_robot(options.hostname);

    if(!options.command){
        console.debug('Need to specify a command');
        parser.print_help();
        return false;
    }

    if(!command_dict[options.command].run(robot, options)){
        return false;
    }

    return true;
}

module.exports = {
    main
};