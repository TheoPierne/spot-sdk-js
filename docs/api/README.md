# API reference <!-- {docsify-ignore-all} -->

The [package root](/api/index) exports the classes, functions and constants of all the modules:
`const { RobotStateClient, LeaseKeepAlive } = require('spot-sdk-js')`. The clients of the Spot CAM, of the GPS
and of Orbit, and the modules of generic names, are in its namespaces `spotCam`, `gps`, `orbit`, `textFormat`,
`jsonFormat`, `imageUtil` and `descriptorPool`, e.g. `require('spot-sdk-js').spotCam.PtzClient`. A few names are
exported by several modules with different values, like the `NoTimeSyncError` of GraphNav and of the robot
commands: they are required from their module, e.g. `require('spot-sdk-js/src/bosdyn-client/graph_nav')`, as the
page of the module shows.

The protobuf messages are the modules of `spot-sdk-js/src/bosdyn/api/`, generated from the protos of Boston
Dynamics (see their [reference](https://dev.bostondynamics.com/protos/bosdyn/api/proto_reference)).

This reference is generated from the JSDoc of the SDK by `npm run build:docs`: edit the JSDoc in `src/`, not
these pages.

## Client

| Module | Description |
|---|---|
| [access_controlled_door_util](/api/bosdyn-client/access_controlled_door_util) | Helpers to open and close access controlled doors: the API calls of the access control system of a door, described by a JSON configuration. |
| [area_callback](/api/bosdyn-client/area_callback) | Client for the area callback services: the services GraphNav calls when the robot crosses an area callback region of a map. |
| [area_callback_region_handler_base](/api/bosdyn-client/area_callback_region_handler_base) | The base class of the handlers of an area callback service: a handler runs the callback of one region, from BeginCallback to EndCallback. |
| [area_callback_service_runner](/api/bosdyn-client/area_callback_service_runner) | Runs an area callback service: a gRPC server for the servicer, registered in the directory of the robot and kept registered, like bosdyn.client.area_callback_service_runner in Python. |
| [area_callback_service_servicer](/api/bosdyn-client/area_callback_service_servicer) | The implementation of the area callback service: it answers the requests of GraphNav with a new region handler for each area callback region, like bosdyn.client.area_callback_service_servicer in Python. |
| [area_callback_service_utils](/api/bosdyn-client/area_callback_service_utils) | The configuration of an area callback service, and the service faults it triggers while the services it needs are unavailable, like bosdyn.client.area_callback_service_utils in Python. |
| [arm_surface_contact](/api/bosdyn-client/arm_surface_contact) | Client for the arm surface contact service: arm commands that press the hand on a surface. |
| [async_tasks](/api/bosdyn-client/async_tasks) | Utilities for managing periodic tasks consisting of asynchronous GRPC calls. |
| [audio_visual](/api/bosdyn-client/audio_visual) | Client for the audio visual service: the behaviors of the lights and of the sounds of the robot. |
| [audio_visual_helper](/api/bosdyn-client/audio_visual_helper) | Runs an audio visual behavior for a while, like the AudioVisualHelper context manager of Python. |
| [auth](/api/bosdyn-client/auth) | For clients to acquire a user token from the authentication service. |
| [auto_return](/api/bosdyn-client/auto_return) | Client implementation of the AutoReturn service. |
| [autowalk](/api/bosdyn-client/autowalk) | For clients to the Autowalk service. |
| [bddf_download](/api/bosdyn-client/bddf_download) | Code for downloading robot data in bddf format. |
| [channel](/api/bosdyn-client/channel) | The gRPC channels to the robot: secure channels with the certificate of the robot and the refreshed user token, the channel options, and the translation of the gRPC errors into the errors of the SDK. |
| [command_line](/api/bosdyn-client/command_line) | Command-line utility code for interacting with robot services. |
| [common](/api/bosdyn-client/common) | Contains elements common to all service clients. |
| [data_acquisition](/api/bosdyn-client/data_acquisition) | General client implementation for the main, on-robot data-acquisition service. |
| [data_acquisition_helpers](/api/bosdyn-client/data_acquisition_helpers) | Helpers for the data acquisition service: acquisition requests, their cancellation, and the download of the acquired data from the REST API of the robot. |
| [data_acquisition_plugin](/api/bosdyn-client/data_acquisition_plugin) | General client implementation for all data-acquisition plugin services. |
| [data_acquisition_plugin_service](/api/bosdyn-client/data_acquisition_plugin_service) | Helpers for implementing a data acquisition plugin service. |
| [data_acquisition_store](/api/bosdyn-client/data_acquisition_store) | Client implementation for data acquisition store service. |
| [data_buffer](/api/bosdyn-client/data_buffer) | Client for the data-buffer service. |
| [data_chunk](/api/bosdyn-client/data_chunk) | Splits serialized messages into DataChunk messages for the streaming RPCs, and assembles them back. |
| [data_service](/api/bosdyn-client/data_service) | Client for the data-service. |
| [directory](/api/bosdyn-client/directory) | Client for the directory service. |
| [directory_registration](/api/bosdyn-client/directory_registration) | Client for the directory registration service. |
| [docking](/api/bosdyn-client/docking) | A client for the docking service. |
| [door](/api/bosdyn-client/door) | For clients to the door service. |
| [error_callback_result](/api/bosdyn-client/error_callback_result) | The results of the error callbacks of the keep-alive helpers: what to do after an error. |
| [estop](/api/bosdyn-client/estop) | For clients to the emergency stop (estop) service. |
| [exceptions](/api/bosdyn-client/exceptions) | The errors of the SDK: BosdynError, the errors of the responses (ResponseError) and the errors of the RPCs (RpcError). |
| [fault](/api/bosdyn-client/fault) | For clients to use the fault service. |
| [frame_helpers](/api/bosdyn-client/frame_helpers) | Helpers for the frame trees of the robot state and of the images: the names of the frames, the transforms between two frames, and the validation of a FrameTreeSnapshot. |
| [graph_nav](/api/bosdyn-client/graph_nav) | For clients to the graphnav service. |
| [graph_nav_download](/api/bosdyn-client/graph_nav_download) | Download a graph and all of its snapshots from a robot into the standard file layout, like bosdyn.client.graph_nav_download of the Python SDK 5.2.0. |
| [graph_nav_upload](/api/bosdyn-client/graph_nav_upload) | Upload a graph and all of its snapshots from the standard file layout to a robot, like bosdyn.client.graph_nav_upload of the Python SDK 5.2.0. |
| [gripper_camera_param](/api/bosdyn-client/gripper_camera_param) | Client for the gripper camera parameter service: the settings of the camera of the gripper. |
| [hazard_avoidance](/api/bosdyn-client/hazard_avoidance) | For clients to use the hazard_avoidance service |
| [image](/api/bosdyn-client/image) | For clients to use the image service. |
| [image_service_helpers](/api/bosdyn-client/image_service_helpers) | Helpers for implementing an image service: image sources, capture of the images in the background, and a servicer for many image sources. |
| [index](/api/bosdyn-client/index) | Some commonly used classes and functions of the client library, exported together. |
| [inverse_kinematics](/api/bosdyn-client/inverse_kinematics) | A client for the inverse-kinematics service. |
| [ir_enable_disable](/api/bosdyn-client/ir_enable_disable) | A client for the ir-enable-disable service. |
| [keepalive](/api/bosdyn-client/keepalive) | Client implementation of the Keepalive service. |
| [lease](/api/bosdyn-client/lease) | Clients and helpers for the lease service: LeaseClient, the LeaseWallet, LeaseKeepAlive and the lease errors. |
| [lease_resource_hierarchy](/api/bosdyn-client/lease_resource_hierarchy) | Helper for managing hierarchy of lease resources. |
| [lease_validator](/api/bosdyn-client/lease_validator) | Lease validator tracks lease usage in intermediate services. |
| [license](/api/bosdyn-client/license) | Client for the license service. |
| [local_grid](/api/bosdyn-client/local_grid) | Client support for the LocalGridService. |
| [log_status](/api/bosdyn-client/log_status) | Client for the log-status service. |
| [logger_util](/api/bosdyn-client/logger_util) | The loggers of the SDK: winston loggers, which log to the standard error stream. |
| [manipulation_api_client](/api/bosdyn-client/manipulation_api_client) | For clients to the Manipulation API service. |
| [map_processing](/api/bosdyn-client/map_processing) | For clients of the graph_nav map processing service. |
| [math_helpers](/api/bosdyn-client/math_helpers) | Math helpers for the geometry of the robot: vectors, quaternions, SE(2) and SE(3) poses and velocities, and their conversions from and to the protobuf messages. |
| [metrics_logging](/api/bosdyn-client/metrics_logging) | Clients for the metrics logging service. |
| [network_compute_bridge_client](/api/bosdyn-client/network_compute_bridge_client) | For clients to the network compute bridge service. |
| [payload](/api/bosdyn-client/payload) | Client for the payload service. |
| [payload_registration](/api/bosdyn-client/payload_registration) | Client for the payload service. |
| [payload_software_update](/api/bosdyn-client/payload_software_update) | Payload software update service gRPC client. |
| [payload_software_update_initiation](/api/bosdyn-client/payload_software_update_initiation) | Payload software update initiation gRPC client. |
| [point_cloud](/api/bosdyn-client/point_cloud) | Client for the point cloud service. |
| [power](/api/bosdyn-client/power) | For clients to the power command service. |
| [processors](/api/bosdyn-client/processors) | Common message processors. |
| [ray_cast](/api/bosdyn-client/ray_cast) | Client implementation of the RayCast service. |
| [recording](/api/bosdyn-client/recording) | For clients to use the graph nav recording service |
| [robot](/api/bosdyn-client/robot) | Settings common to a user's access to one robot. |
| [robot_command](/api/bosdyn-client/robot_command) | For clients to the robot command service. |
| [robot_id](/api/bosdyn-client/robot_id) | For clients to the robot id service. |
| [robot_state](/api/bosdyn-client/robot_state) | For clients to use the robot state service. |
| [sdk](/api/bosdyn-client/sdk) | Sdk is a repository for settings typically common to a single developer and/or robot fleet. |
| [server_util](/api/bosdyn-client/server_util) | Helper functions and classes for creating and running a gRPC service. |
| [service_customization_helpers](/api/bosdyn-client/service_customization_helpers) | Helpers for the custom parameters of services: builders of specs and values, validation of the values against the specs, and conversions to plain objects. |
| [signals_helpers](/api/bosdyn-client/signals_helpers) | Helpers for working with DAQ plugins and signals.proto. |
| [spot_check](/api/bosdyn-client/spot_check) | Client for the SpotCheck service: the calibration checks of the robot and the calibration of its cameras. |
| [time_sync](/api/bosdyn-client/time_sync) | A client for the time-sync service. |
| [token_cache](/api/bosdyn-client/token_cache) | For clients to delegate saving of tokens: token storage separate from token management. |
| [token_manager](/api/bosdyn-client/token_manager) | For clients to automate token refresh. |
| [units_helpers](/api/bosdyn-client/units_helpers) | Helpers for working with units.proto. |
| [url_validation_util](/api/bosdyn-client/url_validation_util) | Validates the URLs of API calls (their host must be an IP address or resolve to one), and makes the calls while checking their redirects. |
| [util](/api/bosdyn-client/util) | Helper functions and classes for creating client applications. |
| [world_object](/api/bosdyn-client/world_object) | For clients to use the world object service |

## Spot CAM

| Module | Description |
|---|---|
| [audio](/api/bosdyn-client/spot_cam/audio) | For clients to the Spot CAM Audio service. |
| [compositor](/api/bosdyn-client/spot_cam/compositor) | For clients to the Spot CAM Compositor service. |
| [health](/api/bosdyn-client/spot_cam/health) | For clients to the Spot CAM Health service. |
| [index](/api/bosdyn-client/spot_cam/index) | The clients of the Spot CAM services, and registerAllServiceClients() to register them in a Robot. |
| [lighting](/api/bosdyn-client/spot_cam/lighting) | For clients to the Spot CAM Lighting service. |
| [lights_helper](/api/bosdyn-client/spot_cam/lights_helper) | Flashes the LEDs of the Spot CAM, like the LightsHelper context manager of Python. |
| [media_log](/api/bosdyn-client/spot_cam/media_log) | For clients to the Spot CAM MediaLog service. |
| [network](/api/bosdyn-client/spot_cam/network) | For clients to the Spot CAM Network service. |
| [power](/api/bosdyn-client/spot_cam/power) | For clients to the Spot CAM Power service. |
| [ptz](/api/bosdyn-client/spot_cam/ptz) | For clients to the Spot CAM Ptz service. |
| [streamquality](/api/bosdyn-client/spot_cam/streamquality) | For clients to the Spot CAM StreamQuality service. |
| [version](/api/bosdyn-client/spot_cam/version) | For clients to the Spot CAM Version service. |

## GPS

| Module | Description |
|---|---|
| [NMEAParser](/api/bosdyn-client/gps/NMEAParser) | Parses the NMEA sentences of a GPS device into GpsDataPoint messages. |
| [aggregator_client](/api/bosdyn-client/gps/aggregator_client) | For clients to use the Gps Aggregator service. |
| [gps_listener](/api/bosdyn-client/gps/gps_listener) | Reads GPS data from a tcp/udp stream, and sends to aggregator service. |
| [index](/api/bosdyn-client/gps/index) | The GPS: the clients of the GPS services, the listener of a GPS device and the NTRIP client, like the package bosdyn.client.gps of Python. |
| [ntrip_client](/api/bosdyn-client/gps/ntrip_client) | An NTRIP client: it downloads the GPS corrections of an NTRIP caster and forwards them to the GPS device. |
| [registration_client](/api/bosdyn-client/gps/registration_client) | Client for the GPS registration service: the registration of the GPS in the frame of the robot. |

## Missions

| Module | Description |
|---|---|
| [client](/api/bosdyn-mission/client) | For clients to the mission service. |
| [constants](/api/bosdyn-mission/constants) | Constants relevant to the missions service. |
| [exceptions](/api/bosdyn-mission/exceptions) | The errors of the compilation and of the validation of missions. |
| [remote_client](/api/bosdyn-mission/remote_client) | Client for the RemoteMission service. |
| [util](/api/bosdyn-mission/util) | Helpers for missions: conversions between protobuf values and JavaScript values, the Result constants, and string representations of the nodes. |

## Choreography

| Module | Description |
|---|---|
| [animation_file_conversion_helpers](/api/bosdyn-choreography-client/animation_file_conversion_helpers) | A set helpers which convert specific lines from an animation file into the animation-specific protobuf messages. |
| [animation_file_to_proto](/api/bosdyn-choreography-client/animation_file_to_proto) | A tool to convert animation files into protobuf messages which can be uploaded to the robot and used within choreography sequences. |
| [choreography](/api/bosdyn-choreography-client/choreography) | For clients to use the choreography service |

## Orbit

| Module | Description |
|---|---|
| [client](/api/bosdyn-orbit/client) | Client for the web API of Orbit: HTTPS requests to its REST endpoints. |
| [exceptions](/api/bosdyn-orbit/exceptions) | The errors of the Orbit client. |
| [index](/api/bosdyn-orbit/index) | Orbit: the client of its web API, its errors and its helpers, like the package bosdyn.orbit of Python. |
| [utils](/api/bosdyn-orbit/utils) | Utility functions for the Orbit client. |

## Core

| Module | Description |
|---|---|
| [descriptor_pool](/api/bosdyn-core/descriptor_pool) | The descriptors of the protobuf messages of the SDK (loaded from src/bosdyn/descriptor_set.pb), used by the text and JSON formats, and mergeFrom(), like MergeFrom() in Python. |
| [event](/api/bosdyn-core/event) | An event for the background tasks of the SDK, like threading.Event in Python. |
| [geometry](/api/bosdyn-core/geometry) | Euler angles in the yaw, roll, pitch (ZXY) order, and their conversions from and to quaternions. |
| [image_util](/api/bosdyn-core/image_util) | Displays and saves images with the image viewers of the system. |
| [json_format](/api/bosdyn-core/json_format) | Converts protobuf messages to JSON and to plain objects, like google.protobuf.json_format in Python. |
| [lock](/api/bosdyn-core/lock) | A lock for asynchronous code, like threading.Lock in Python. |
| [queue](/api/bosdyn-core/queue) | A FIFO queue, like queue.Queue in Python without the blocking calls. |
| [text_format](/api/bosdyn-core/text_format) | The text format of the protobuf messages, like google.protobuf.text_format in Python: printing and parsing. |
| [util](/api/bosdyn-core/util) | Common utilities: conversions of times, protobuf Timestamps and Durations, clocks, and formatting helpers. |

## BDDF

| Module | Description |
|---|---|
| [base_data_reader](/api/bosdyn-core/bddf/base_data_reader) | BaseDataReader is a shared parent class for DataReader and StreamedDataReader. |
| [block_writer](/api/bosdyn-core/bddf/block_writer) | BlockWriter writes basic data structures in the bddf file. |
| [bosdyn](/api/bosdyn-core/bddf/bosdyn) | Boston Dynamics conventions for bddf files |
| [common](/api/bosdyn-core/bddf/common) | Basic constants and structures for parsing/writing bddf. |
| [data_reader](/api/bosdyn-core/bddf/data_reader) | Class for reading data from a file-like object which is seekable. |
| [data_writer](/api/bosdyn-core/bddf/data_writer) | DataWriter is a class for writing data to a file. |
| [file_indexer](/api/bosdyn-core/bddf/file_indexer) | A FileIndexer is an object which keeps an index of series and blocks within series |
| [grpc_proto_reader](/api/bosdyn-core/bddf/grpc_proto_reader) | Reads a particular series of GRPC request or response messages from a bddf file. |
| [grpc_reader](/api/bosdyn-core/bddf/grpc_reader) | A class for reading GRPC data from a DataFile. |
| [grpc_service_reader](/api/bosdyn-core/bddf/grpc_service_reader) | A container for the GrpcProtoReaders associated with a given service in a bddf file. |
| [grpc_service_writer](/api/bosdyn-core/bddf/grpc_service_writer) | GrpcSeriesWriter is a class for registering a series which stores GRPC request/response pairs. |
| [index](/api/bosdyn-core/bddf/index) | Code for reading and writing 'bddf' data files. |
| [message_reader](/api/bosdyn-core/bddf/message_reader) | A class for reading message data from a DataFile. |
| [pod_series_reader](/api/bosdyn-core/bddf/pod_series_reader) | A class for reading a series of POD data from a DataFile. |
| [pod_series_writer](/api/bosdyn-core/bddf/pod_series_writer) | Assists with writing POD data values into a series, within a DataWriter. |
| [protobuf_channel_reader](/api/bosdyn-core/bddf/protobuf_channel_reader) | A class for reading a single channel of Protobuf data from a DataFile. |
| [protobuf_reader](/api/bosdyn-core/bddf/protobuf_reader) | A class for reading Protobuf data from a DataFile. |
| [protobuf_series_writer](/api/bosdyn-core/bddf/protobuf_series_writer) | Class for registering a series which stores protobuf messages in a message series. |
| [stream_data_reader](/api/bosdyn-core/bddf/stream_data_reader) | Data reader which reads the file format from a stream, without seeking. |
