const robot_state_service_grpc_pb = require('../../bosdyn/api/robot_state_service_grpc_pb');
const robot_state_pb = require('../../bosdyn/api/robot_state_pb');
const geometry_pb = require('../../bosdyn/api/geometry_pb');
const service_fault_pb = require('../../bosdyn/api/service_fault_pb');
const parameter_pb = require('../../bosdyn/api/parameter_pb');
const {populate_response_header} = require('../util');
const {now_timestamp} = require('../../bosdyn-core/util');

const wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');
const duration_pb = require('google-protobuf/google/protobuf/duration_pb');

function getRobotState(call, callback){
	console.log('Nouvelle requete [ROBOT STATE] /getRobotState !');
	let reply = new robot_state_pb.RobotStateResponse();
	populate_response_header(reply, call.request);

	const powerState = new robot_state_pb.PowerState()
	.setTimestamp()
	.setMotorPowerState(2)
	.setShorePowerState(1)
	.setRobotPowerState(1)
	.setPayloadPortsPowerState(2)
	.setWifiRadioPowerState(1)
	.setLocomotionChargePercentage(new wrappers_pb.DoubleValue().setValue(60))
	.setLocomotionEstimatedRuntime(new duration_pb.Duration().setSeconds(60).setNanos(0));

	const batteryState = new robot_state_pb.BatteryState()
	.setTimestamp(now_timestamp())
	.setIdentifier('BAT1')
	.setChargePercentage(new wrappers_pb.DoubleValue().setValue(60))
	.setEstimatedRuntime(new duration_pb.Duration().setSeconds(60).setNanos(0))
	.setCurrent(new wrappers_pb.DoubleValue().setValue(60))
	.setVoltage(new wrappers_pb.DoubleValue().setValue(20))
	.setTemperaturesList([43, 32, 50])
	.setStatus(1);

	const wifiState = new robot_state_pb.WiFiState()
	.setCurrentMode(1)
	.setEssid('ESSID_TEST');

	const commState1 = new robot_state_pb.CommsState()
	.setTimestamp(now_timestamp())
	.setWifiState(wifiState);

	const systemFaultState = new robot_state_pb.SystemFaultState()
	.setFaultsList([])
	.setHistoricalFaultsList([]);

	const estopState = new robot_state_pb.EStopState()
	.setTimestamp(now_timestamp())
	.setName('ESTOP_TEST')
	.setType(1)
	.setState(2)
	.setStateDescription('ESTOP_TEST_DESCRIPTION');

	const kinematicState = new robot_state_pb.KinematicState()
	.setJointStatesList([])
	.setAcquisitionTimestamp(now_timestamp())
	.setTransformsSnapshot()
	.setVelocityOfBodyInVision(new geometry_pb.SE3Velocity().setLinear(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)).setAngular(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)))
	.setVelocityOfBodyInOdom(new geometry_pb.SE3Velocity().setLinear(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)).setAngular(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)));

	const behaviorFault = new robot_state_pb.BehaviorFault()
	.setBehaviorFaultId(123)
	.setOnsetTimestamp(now_timestamp())
	.setCause(1)
	.setStatus(1);

	const behaviorFaultState = new robot_state_pb.BehaviorFaultState()
	.setFaultsList([behaviorFault]);

	const footState = new robot_state_pb.FootState()
	.setFootPositionRtBody(new geometry_pb.Vec3().setX(1).setY(1).setZ(1))
	.setContact(1)
	.setTerrain(new robot_state_pb.FootState.TerrainState()
		.setGroundMuEst(10)
		.setFrameName('FRAME_TEST')
		.setFootSlipDistanceRtFrame(new geometry_pb.Vec3().setX(1).setY(1).setZ(1))
		.setFootSlipVelocityRtFrame(new geometry_pb.Vec3().setX(1).setY(1).setZ(1))
		.setGroundContactNormalRtFrame(new geometry_pb.Vec3().setX(1).setY(1).setZ(1))
		.setVisualSurfaceGroundPenetrationMean(10)
		.setVisualSurfaceGroundPenetrationStd(10)
		);

	const manipulatorState = new robot_state_pb.ManipulatorState()
	.setGripperOpenPercentage(30)
	.setIsGripperHoldingItem(false)
	.setEstimatedEndEffectorForceInHand(new geometry_pb.Vec3().setX(1).setY(1).setZ(1))
	.setStowState(1)
	.setVelocityOfHandInVision(new geometry_pb.SE3Velocity().setLinear(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)).setAngular(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)))
	.setVelocityOfHandInOdom(new geometry_pb.SE3Velocity().setLinear(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)).setAngular(new geometry_pb.Vec3().setX(1).setY(1).setZ(1)))
	.setCarryState(3);

	const faultId = new service_fault_pb.ServiceFaultId()
	.setFaultName('FAULT_NAME_TEST')
	.setServiceName('ID')
	.setPayloadGuid('PAYLOAD_TEST');

	const fault = new service_fault_pb.ServiceFault()
	.setFaultId(faultId)
	.setErrorMessage('null')
	.setAttributesList(['test_1', 'test_2'])
	.setSeverity(1)
	.setOnsetTimestamp(now_timestamp())
	.setDuration(new duration_pb.Duration().setSeconds(60).setNanos(0))

	const serviceFault = new robot_state_pb.ServiceFaultState()
	.setFaultsList([fault])
	.setHistoricalFaultsList([fault]);

	const robotState = new robot_state_pb.RobotState()
	.setPowerState(powerState)
	.setBatteryStatesList(batteryState)
	.setCommsStatesList([commState1])
	.setSystemFaultState(systemFaultState)
	.setEstopStatesList([estopState])
	.setKinematicState(kinematicState)
	.setBehaviorFaultState(behaviorFaultState)
	.setFootStateList([footState])
	.setManipulatorState(manipulatorState)
	.setServiceFaultState(serviceFault);

	reply.setRobotState(robotState);

	callback(null, reply);
}

function getRobotHardwareConfiguration(call, callback){
	console.log('Nouvelle requete [ROBOT STATE] /getRobotHardwareConfiguration !');
	let reply = new robot_state_pb.RobotHardwareConfigurationResponse();
	populate_response_header(reply, call.request);

	const objModel = new robot_state_pb.Skeleton.Link.ObjModel()
	.setFileName('FILENAME_TEST')
	.setFileContents('CONTENT_TEST');

	const link = new robot_state_pb.Skeleton.Link()
	.setName('LINK_TEST')
	.setObjModel(objModel);

	const skeleton = new robot_state_pb.Skeleton()
	.setLinksList([link])
	.setUrdf('URDF_TEST');

	const hardwareConfig = new robot_state_pb.HardwareConfiguration()
	.setSkeleton(skeleton)
	.setCanPowerCommandRequestOffRobot(true)
	.setCanPowerCommandRequestCycleRobot(true)
	.setCanPowerCommandRequestPayloadPorts(true)
	.setCanPowerCommandRequestWifiRadio(true);

	reply.setHardwareConfiguration(hardwareConfig);

	callback(null, reply);
}

function getRobotLinkModel(call, callback){
	console.log('Nouvelle requete [ROBOT STATE] /getRobotLinkModel !');
	let reply = new robot_state_pb.RobotLinkModelResponse();
	populate_response_header(reply, call.request);

	const objModel = new robot_state_pb.Skeleton.Link.ObjModel()
	.setFileName('FILENAME_TEST')
	.setFileContents('CONTENT_TEST');

	reply.setLinkModel(objModel);

	callback(null, reply);
}

function getRobotMetrics(call, callback){
	console.log('Nouvelle requete [ROBOT STATE] /getRobotMetrics !');
	let reply = new robot_state_pb.RobotMetricsResponse();
	populate_response_header(reply, call.request);

	const param = new parameter_pb.Parameter()
	.setLabel('TEST_LABEL')
	.setUnits('km')
	.setTimestamp(now_timestamp());

	const metric = new robot_state_pb.RobotMetrics()
	.setTimestamp(now_timestamp())
	.setMetricsList([param]);

	reply.setRobotMetrics(metric);

	callback(null, reply);
}

module.exports = {
	service: robot_state_service_grpc_pb.RobotStateServiceService,
	func: {
		getRobotState,
		getRobotHardwareConfiguration,
		getRobotLinkModel,
		getRobotMetrics
	}
};