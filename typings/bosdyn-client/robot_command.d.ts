export type RpcError = import("./exceptions").RpcError;
export type Lease = import("./lease").Lease;
export type RobotTimeConverter = import("../bosdyn-core/util").RobotTimeConverter;
export type Timestamp = import("google-protobuf/google/protobuf/timestamp_pb").Timestamp;
export type Robot = import("./robot").Robot;
export type TimeSyncEndpoint = import("./time_sync").TimeSyncEndpoint;
export namespace EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME {
    namespace synchronizedCommand {
        let mobilityCommand: {
            '@command': {
                se2TrajectoryRequest: {
                    trajectory: {
                        referenceTime: null;
                    };
                };
            };
        };
        let gripperCommand: {
            '@command': {
                clawGripperCommand: {
                    trajectory: {
                        referenceTime: null;
                    };
                };
            };
        };
        let armCommand: {
            '@command': {
                armCartesianCommand: {
                    poseTrajectoryInTask: {
                        referenceTime: null;
                    };
                    wrenchTrajectoryInTask: {
                        referenceTime: null;
                    };
                };
                armJointMoveCommand: {
                    trajectory: {
                        referenceTime: null;
                    };
                };
                armGazeCommand: {
                    targetTrajectoryInFrame1: {
                        referenceTime: null;
                    };
                    toolTrajectoryInFrame2: {
                        referenceTime: null;
                    };
                };
                armImpedanceCommand: {
                    taskTformDesiredTool: {
                        referenceTime: null;
                    };
                };
            };
        };
    }
}
export namespace END_TIME_EDIT_TREE {
    export namespace synchronizedCommand_1 {
        let mobilityCommand_1: {
            '@command': {
                se2VelocityRequest: {
                    endTime: null;
                };
                se2TrajectoryRequest: {
                    endTime: null;
                };
                stanceRequest: {
                    endTime: null;
                };
            };
        };
        export { mobilityCommand_1 as mobilityCommand };
        let armCommand_1: {
            '@command': {
                armVelocityCommand: {
                    endTime: null;
                };
            };
        };
        export { armCommand_1 as armCommand };
    }
    export { synchronizedCommand_1 as synchronizedCommand };
}
/** General class of errors for RobotCommand service. */
export class RobotCommandResponseError extends ResponseError {
}
/** Client has not done timesync with robot. */
export class NoTimeSyncError extends RobotCommandResponseError {
}
/** The command was received after its max_duration had already passed. */
export class ExpiredError extends RobotCommandResponseError {
}
/** The command end time was too far in the future. */
export class TooDistantError extends RobotCommandResponseError {
}
/** The robot must be powered on to accept a command. */
export class NotPoweredOnError extends RobotCommandResponseError {
}
/** The robot may not be commanded with uncleared behavior faults. */
export class BehaviorFaultError extends RobotCommandResponseError {
}
/** The command cannot be executed while the robot is docked. */
export class DockedError extends RobotCommandResponseError {
}
/** Behavior fault could not be cleared. */
export class NotClearedError extends RobotCommandResponseError {
}
/** The API supports this request, but the system does not support this request. */
export class UnsupportedError extends RobotCommandResponseError {
}
/** Command indicated it failed in its feedback. */
export class CommandFailedError extends BosdynError {
}
/**
 * Command failed, and includes the feedback response (like Python's CommandFailedErrorWithFeedback).
 */
export class CommandFailedErrorWithFeedback extends CommandFailedError {
    /**
     * @param {string} message The error message.
     * @param {?robotCommandPb.RobotCommandFeedbackResponse} [feedback=null] The feedback response.
     */
    constructor(message: string, feedback?: robotCommandPb.RobotCommandFeedbackResponse | null);
    feedback: robotCommandPb.RobotCommandFeedbackResponse | null;
}
/** Timed out waiting for SUCCESS response from robot command. */
export class CommandTimedOutError extends BosdynError {
}
/** Robot does not know how to handle supplied frame. */
export class UnknownFrameError extends RobotCommandResponseError {
}
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 */
/**
 * Client for calling RobotCommand services.
 * @extends {BaseClient<RobotCommandServiceClient>}
 */
export class RobotCommandClient extends BaseClient<RobotCommandServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * Accessor for timesync-endpoint that was grabbed via 'updateFrom()'.
     * @type {TimeSyncEndpoint}
     */
    get timesyncEndpoint(): TimeSyncEndpoint;
    /**
     * Issue a command to the robot asynchronously.
     * @param {robotCommandPb.RobotCommand} command Command to issue.
     * @param {number} [endTimeSecs] End time for the command in seconds.
     * @param {TimeSyncEndpoint} [timesyncEndpoint] Timesync endpoint.
     * @param {Lease} [lease] Lease object to use for the command.
     * @param {Object} [args] Options to provide for gRPC request.
     * @returns {Promise<number>} Return the id of the command's callback.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {InvalidRequestError} Invalid request received by the robot.
     * @throws {UnsupportedError} The API supports this request, but the system does not support this request.
     * @throws {NoTimeSyncError} Client has not done timesync with robot.
     * @throws {ExpiredError} The command was received after its max_duration had already passed.
     * @throws {TooDistantError} The command end time was too far in the future.
     * @throws {NotPoweredOnError} The robot must be powered on to accept a command.
     * @throws {BehaviorFaultError} The robot is faulted and the fault must be cleared first.
     * @throws {DockedError} The command cannot be executed while the robot is docked.
     * @throws {UnknownFrameError} Robot does not know how to handle supplied frame.
     */
    robotCommand(command: robotCommandPb.RobotCommand, endTimeSecs?: number, timesyncEndpoint?: TimeSyncEndpoint, lease?: Lease, args?: Object): Promise<number>;
    /**
     * Get feedback from a previously issued command.
     * @param {?number} [robotCommandId=null] ID of the robot command to get feedback on.
     * @param {Object} [args] Options to provide for gRPC request.
     * @returns {Promise<robotCommandPb.RobotCommandFeedbackResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     */
    robotCommandFeedback(robotCommandId?: number | null, args?: Object): Promise<robotCommandPb.RobotCommandFeedbackResponse>;
    /**
     * Clear a behavior fault on the robot.
     * @param {string} behaviorFaultId ID of the behavior fault.
     * @param {Lease} [lease] Lease information to use in the message.
     * @param {Object} [args] Options to provide for gRPC request.
     * @returns {Promise<boolean>} Boolean whether response status is STATUS_CLEARED.
     */
    clearBehaviorFault(behaviorFaultId: string, lease?: Lease, args?: Object): Promise<boolean>;
    _getRobotCommandRequest(lease: any, command: any): robotCommandPb.RobotCommandRequest;
    /**
     * Set or convert fields of the command proto that need timestamps in the robot's clock.
     * @param {*} command Command message to update.
     * @param {*} endTimeSecs Command end time in seconds.
     * @param {TimeSyncEndpoint} timesyncEndpoint Timesync endpoint.
     */
    _updateCommandTimestamps(command: any, endTimeSecs: any, timesyncEndpoint: TimeSyncEndpoint): void;
    _getRobotCommandFeedbackRequest(robotCommandId: any): robotCommandPb.RobotCommandFeedbackRequest;
    _getClearBehaviorFaultRequest(lease: any, behaviorFaultId: any): robotCommandPb.ClearBehaviorFaultRequest;
}
/**
 * This class contains a set of static helper functions to build and issue robot commands.
 * This is not intended to cover every use case, but rather give developers a starting point for
 * issuing commands to the robot.The robot command proto uses several advanced protobuf techniques,
 * including the use of Any and OneOf.
 *
 * A RobotCommand is composed of one or more commands. The set of valid commands is robot /
 * hardware specific. An armless spot only accepts one command at a time. Each command may or may
 * not take a generic param object. These params are also robot / hardware dependent.
 */
export class RobotCommandBuilder {
    /**
     * *******************
     * Full body commands *
     ********************
     */
    /**
     * Command to stop with minimal motion. If the robot is walking, it will transition to
     * stand. If the robot is standing or sitting, it will do nothing.
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static stopCommand(): robotCommandPb.RobotCommand;
    /**
     * Command to freeze all joints at their current positions (no balancing control)
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static freezeCommand(): robotCommandPb.RobotCommand;
    /**
     * Command to get the robot in a ready, sitting position. If the robot is on its back, it
     * will attempt to flip over.
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static selfrightCommand(): robotCommandPb.RobotCommand;
    /**
     * Command that will have the robot sit down (if not already sitting) and roll onto its side
     * for easier battery access.
     * @param {number} dirHint Direction to roll over: 1-right/2-left
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static batteryChangePoseCommand(dirHint?: number): robotCommandPb.RobotCommand;
    /**
     * Command to get the robot estimate payload mass.
     * Commands robot to stand and execute a routine to estimate the mass properties of an
     * unregistered payload attached to the robot.
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static payloadEstimationCommand(): robotCommandPb.RobotCommand;
    /**
     * Command to get robot into a position where it is safe to power down, then power down. If
     * the robot has fallen, it will power down directly. If the robot is not in a safe position,
     * it will get to a safe position before powering down. The robot will not power down until it
     * is in a safe state.
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static safePowerOffCommand(): robotCommandPb.RobotCommand;
    /**
     * Command constrained manipulation.
     * @param {basicCommandPb.ConstrainedManipulationCommand.Request.TaskType} taskType The task type
     * @param {geometryPb.Wrench} initWrenchDirectionInFrameName
     * @param {number} forceLimit
     * @param {number} torqueLimit
     * @param {string} frameName
     * @param {?number} [tangentialSpeed=null]
     * @param {?number} [rotationalSpeed=null]
     * @param {?number} [targetLinearPosition=null]
     * @param {?number} [targetAngle=null]
     * @param {basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode} [controlMode=CONTROL_MODE_VELOCITY]
     * @param {?wrappersPb.BoolValue|boolean} [resetEstimator=BoolValue(true)]
     * @returns {robotCommandPb.RobotCommand}
     * @throws {Error} No speed, both targets, or no target in position control (like Python).
     * @static
     */
    static constrainedManipulationCommand(taskType: basicCommandPb.ConstrainedManipulationCommand.Request.TaskType, initWrenchDirectionInFrameName: geometryPb.Wrench, forceLimit: number, torqueLimit: number, frameName: string, tangentialSpeed?: number | null, rotationalSpeed?: number | null, targetLinearPosition?: number | null, targetAngle?: number | null, controlMode?: basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode, resetEstimator?: (wrappersPb.BoolValue | boolean) | null): robotCommandPb.RobotCommand;
    /**
     * Command to activate the joint control of the robot (the joint requests are then streamed with
     * RobotCommandStreamingClient.sendJointControlCommands()).
     * @returns {robotCommandPb.RobotCommand}
     * @static
     */
    static jointCommand(): robotCommandPb.RobotCommand;
    /**
     * ***********************
     * Synchronized commands *
     ***********************
     */
    /**
     * @typedef {Object} TrajectoryOptions
     * @property {?spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     * @property {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
     * @property {spotCommandPb.LocomotionHint} [locomotionHint=HINT_AUTO] Locomotion hint to use for the trajectory
     * command.
     * @property {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     */
    /**
     * @typedef {Object} VelocityTrajectoryOptions
     * @property {?spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     * @property {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
     * @property {spotCommandPb.LocomotionHint} [locomotionHint=HINT_AUTO] Locomotion hint to use for the trajectory
     * command.
     * @property {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     * @property {string} [frameName='body'] Name of the frame of the velocity.
     */
    /**
     * @typedef {Object} StandOptions
     * @property {?spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     * @property {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
     * @property {geometry.EulerZXY} [footprintRBody] The orientation of the body in the footprint frame (no rotation by
     * default).
     * @property {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     */
    /**
     * Command robot to move to pose along a 2D plane. Pose can be specified in the world
     * (kinematic odometry) frame or the robot body frame. The arguments body_height and
     * locomotion_hint are ignored if params argument is passed.
     * A trajectory command requires an end time. End time is not set in this function, but rather
     * is set externally before call to RobotCommandService.
     * @param {number} goalX Position X coordinate.
     * @param {number} goalY Position Y coordinate.
     * @param {number} goalHeading Pose heading in radians.
     * @param {string} frameName Name of the frame to use.
     * @param {TrajectoryOptions} [options] The trajectory options
     * @returns {robotCommandPb.RobotCommand}
     */
    static synchroSe2TrajectoryPointCommand(goalX: number, goalY: number, goalHeading: number, frameName: string, options?: {
        /**
         * Spot specific parameters for mobility commands. If not
         * set, this will be constructed using other args.
         */
        params?: spotCommandPb.MobilityParams | null | undefined;
        /**
         * Height, meters, relative to a nominal stand height.
         */
        bodyHeight?: number | undefined;
        /**
         * Locomotion hint to use for the trajectory
         * command.
         */
        locomotionHint?: spotCommandPb.LocomotionHint | undefined;
        /**
         * Option to input a RobotCommand (not containing a
         * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
         * to the returned RobotCommand.
         */
        buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
    }): robotCommandPb.RobotCommand;
    /**
     * Command robot to move to pose along a 2D plane. Pose can be specified in the world
     * (kinematic odometry or vision world) frames. The arguments body_height and
     * locomotion_hint are ignored if params argument is passed.
     * A trajectory command requires an end time. End time is not set in this function, but rather
     * is set externally before call to RobotCommandService.
     * @param {*} goalSe2 SE2Pose goal.
     * @param {*} frameName Name of the frame to use.
     * @param {TrajectoryOptions} [options] The trajectory options
     * @returns {robotCommandPb.RobotCommand}
     */
    static synchroSe2TrajectoryCommand(goalSe2: any, frameName: any, options?: {
        /**
         * Spot specific parameters for mobility commands. If not
         * set, this will be constructed using other args.
         */
        params?: spotCommandPb.MobilityParams | null | undefined;
        /**
         * Height, meters, relative to a nominal stand height.
         */
        bodyHeight?: number | undefined;
        /**
         * Locomotion hint to use for the trajectory
         * command.
         */
        locomotionHint?: spotCommandPb.LocomotionHint | undefined;
        /**
         * Option to input a RobotCommand (not containing a
         * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
         * to the returned RobotCommand.
         */
        buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
    }): robotCommandPb.RobotCommand;
    /**
     * Command robot to move to pose described relative to the robots body along a 2D plane. For example,
     * a command to move forward 2 meters at the same heading will have goalXRtBody=2.0, goalYRtBody=0.0,
     * goalHeadingRtBody=0.0.
     * The arguments bodyHeight and locomotionHint are ignored if params argument is passed. A trajectory
     * command requires an end time. End time is not set in this function, but rather is set externally before
     * call to RobotCommandService.
     * @param {*} goalXRtBody Position X coordinate described relative to the body frame.
     * @param {*} goalYRtBody Position Y coordinate described relative to the body frame.
     * @param {*} goalHeadingRtBody Pose heading in radians described relative to the body frame.
     * @param {*} frameTreeSnapshot Dictionary representing the child_to_parent_edge_map describing different
     * transforms. This can be acquired using the robot state client directly, or using
     * the robot object's helper function robot.getFrameTreeSnapshot().
     * @param {*} [params=null] Spot specific parameters for mobility commands. If not set,
     * this will be constructed using other args.
     * @param {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
     * @param {*} [locomotionHint=HINT_AUTO] Locomotion hint to use for the trajectory command.
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added to the
     * returned RobotCommand.
     * @returns {robotCommandPb.RobotCommand} The go-to point is converted to a non-moving world frame (odom frame).
     */
    static synchroTrajectoryCommandInBodyFrame(goalXRtBody: any, goalYRtBody: any, goalHeadingRtBody: any, frameTreeSnapshot: any, params?: any, bodyHeight?: number, locomotionHint?: any, buildOnCommand?: robotCommandPb.RobotCommand | null): robotCommandPb.RobotCommand;
    /**
     * Command robot to move along 2D plane. Velocity should be specified in the robot body
     * frame. Other frames are currently not supported. The arguments bodyHeight and
     * locomotionHint are ignored if params argument is passed.
     * A velocity command requires an end time. End time is not set in this function, but rather
     * is set externally before call to RobotCommandService.
     * @param {*} vX Velocity in X direction.
     * @param {*} vY Velocity in Y direction.
     * @param {*} vRot Velocity heading in radians.
     * @param {VelocityTrajectoryOptions} [options] The trajectory options
     * @returns {robotCommandPb.RobotCommand}
     */
    static synchroVelocityCommand(vX: any, vY: any, vRot: any, options?: {
        /**
         * Spot specific parameters for mobility commands. If not
         * set, this will be constructed using other args.
         */
        params?: spotCommandPb.MobilityParams | null | undefined;
        /**
         * Height, meters, relative to a nominal stand height.
         */
        bodyHeight?: number | undefined;
        /**
         * Locomotion hint to use for the trajectory
         * command.
         */
        locomotionHint?: spotCommandPb.LocomotionHint | undefined;
        /**
         * Option to input a RobotCommand (not containing a
         * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
         * to the returned RobotCommand.
         */
        buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
        /**
         * Name of the frame of the velocity.
         */
        frameName?: string | undefined;
    }): robotCommandPb.RobotCommand;
    /**
     * Command robot to stand. If the robot is sitting, it will stand up. If the robot is
     * moving, it will come to a stop. Params can specify a trajectory for the body to follow
     * while standing. In the simplest case, this can be a specific position+orientation which the
     * body will hold at. The arguments bodyHeight and footprintRBody are ignored if params
     * argument is passed.
     * @param {StandOptions} [options] The options of the stand
     * @returns {robotCommandPb.RobotCommand}
     */
    static synchroStandCommand(options?: {
        /**
         * Spot specific parameters for mobility commands. If not
         * set, this will be constructed using other args.
         */
        params?: spotCommandPb.MobilityParams | null | undefined;
        /**
         * Height, meters, relative to a nominal stand height.
         */
        bodyHeight?: number | undefined;
        /**
         * The orientation of the body in the footprint frame (no rotation by
         * default).
         */
        footprintRBody?: geometry.EulerZXY | undefined;
        /**
         * Option to input a RobotCommand (not containing a
         * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
         * to the returned RobotCommand.
         */
        buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
    }): robotCommandPb.RobotCommand;
    /**
     * Command the robot to sit.
     * @param {Object} [options]
     * @param {*} [options.params] Spot specific parameters for mobility commands.
     * @param {*} [options.buildOnCommand] Option to input a RobotCommand (not containing a fullBodyCommand). An
     * armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     * @returns {robotCommandPb.RobotCommand}
     */
    static synchroSitCommand(options?: {
        params?: any;
        buildOnCommand?: any;
    }): robotCommandPb.RobotCommand;
    /**
     * Command robot to stance with the feet at specified positions.
     * This will cause the robot to reposition its feet. This is not intended to be a mobility
     * command and will reject commands where the foot position is out of reach without locomoting.
     * To stance at a far location, try using SE2TrajectoryCommand to safely put the robot at the
     * correct location first.
     * Params can specify a trajectory for the body to follow
     * while stancing. In the simplest case, this can be a specific position+orientation which the
     * body will hold at. The arguments bodyHeight and footprintRBody are ignored if params
     * argument is passed.
     * @param {string} se2FrameName The frame name which the desired foot_positions are described in.
     * @param {*} posFlRtFrame Position of front left foot in specified frame.
     * @param {*} posFrRtFrame Position of front right foot in specified frame.
     * @param {*} posHlRtFrame Position of rear left foot in specified frame.
     * @param {*} posHrRtFrame Position of rear right foot in specified frame.
     * @param {number} accuracy Required foot positional accuracy in meters
     * @param {*} params Spot specific parameters for mobility commands. If not set,
     * this will be constructed using other args.
     * @param {*} bodyHeight Height, meters, to stand at relative to a nominal stand height.
     * @param {*} footprintRBody The orientation of the body frame with respect to the
     * footprint frame (gravity aligned framed with yaw computed from the stance feet)
     * @param {*} buildOnCommand Option to input a RobotCommand (not containing a full_body_command). An
     * arm_command and gripper_command from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     * @returns {robotCommandPb.RobotCommand}
     */
    static stanceCommand(se2FrameName: string, posFlRtFrame: any, posFrRtFrame: any, posHlRtFrame: any, posHrRtFrame: any, accuracy?: number, params?: any, bodyHeight?: any, footprintRBody?: any, buildOnCommand?: any): robotCommandPb.RobotCommand;
    /**
     * Command robot's body to follow the arm around.
     * @returns {robotCommandPb.RobotCommand}
     */
    static followArmCommand(): robotCommandPb.RobotCommand;
    static armStowCommand(buildOnCommand?: null): robotCommandPb.RobotCommand;
    static armReadyCommand(buildOnCommand?: null): robotCommandPb.RobotCommand;
    static armCarryCommand(buildOnCommand?: null): robotCommandPb.RobotCommand;
    static _armNamedCommand(position: any, buildOnCommand?: null): robotCommandPb.RobotCommand;
    /**
     * Builds a Vec3Trajectory to tell the robot arm to gaze at a point in 3D space.
     */
    static armGazeCommand(x: any, y: any, z: any, frameName: any, buildOnCommand?: null, frame2TformDesiredHand?: null, frame2Name?: null, maxLinearVel?: null, maxAngularVel?: null, maxAccel?: null): robotCommandPb.RobotCommand;
    /**
     * Builds an SE3Trajectory Point to tell robot arm to move to a pose in space relative to the frame specified.
     * Wraps it in SynchronizedCommand.
     * @param {geometryPb.SE3Pose} handPose The desired pose of the hand.
     * @param {string} frameName Name of the frame relative to which handPose is expressed.
     * @param {number} [seconds=5] Requested duration of the arm move, in seconds (the default was 5000 s).
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null] Optional RobotCommand (not containing a
     * fullBodyCommand): its mobilityCommand and gripperCommand are added to the returned RobotCommand.
     * @returns {robotCommandPb.RobotCommand}
     */
    static armPoseCommandFromPose(handPose: geometryPb.SE3Pose, frameName: string, seconds?: number, buildOnCommand?: robotCommandPb.RobotCommand | null): robotCommandPb.RobotCommand;
    /**
     * Builds an SE3Trajectory Point to tell robot arm to move to a pose in space relative to the frame specified.
     * Wraps it in SynchronizedCommand.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} qw
     * @param {number} qx
     * @param {number} qy
     * @param {number} qz
     * @param {string} frameName Name of the frame relative to which the pose is expressed.
     * @param {{seconds?: number, buildOnCommand?: ?robotCommandPb.RobotCommand}} [options] The duration of the move
     * in seconds (5 by default), and the command to build on (see armPoseCommandFromPose()).
     * @returns {robotCommandPb.RobotCommand}
     * @throws {TypeError} The options are not an object (a duration passed positionally was ignored).
     */
    static armPoseCommand(x: number, y: number, z: number, qw: number, qx: number, qy: number, qz: number, frameName: string, options?: {
        seconds?: number;
        buildOnCommand?: robotCommandPb.RobotCommand | null;
    }): robotCommandPb.RobotCommand;
    /**
     * Builds a command to tell robot arm to exhibit a wrench. Wraps it in a SynchronizedCommand.
     */
    static armWrenchCommand(forceX: any, forceY: any, forceZ: any, torqueX: any, torqueY: any, torqueZ: any, frameName: any, seconds?: number, buildOnCommand?: null): robotCommandPb.RobotCommand;
    /**
     * A claw gripper command to one position, with the optional limits of Python.
     * @param {number} gripperQ The position of the gripper.
     * @param {?robotCommandPb.RobotCommand} buildOnCommand
     * @param {?number} maxAcc Maximum allowable gripper acceleration.
     * @param {?number} maxVel Maximum allowable gripper velocity.
     * @param {boolean} disableForceOnContact Whether to switch the gripper to force control on contact detection.
     * @param {?number} maxTorque Maximum torque applied if contact detected closing the gripper.
     * @returns {robotCommandPb.RobotCommand}
     * @private
     */
    private static _clawGripperCommand;
    /**
     * Builds a command to open the gripper. Wraps it in SynchronizedCommand.
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
     * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
     * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
     * @returns {robotCommandPb.RobotCommand}
     */
    static clawGripperOpenCommand(buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null): robotCommandPb.RobotCommand;
    /**
     * Builds a command to close the gripper. Wraps it in SynchronizedCommand.
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
     * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
     * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
     * @param {boolean} [disableForceOnContact=false] Whether to switch the gripper to force control on contact.
     * @param {?number} [maxTorque=null] Maximum torque applied if contact detected closing the gripper (5.5 Nm if
     * unset).
     * @returns {robotCommandPb.RobotCommand}
     */
    static clawGripperCloseCommand(buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null, disableForceOnContact?: boolean, maxTorque?: number | null): robotCommandPb.RobotCommand;
    /**
     * Builds a command to set the gripper using a fractional input. Wraps it in SynchronizedCommand.
     * @param {number} openFraction Percentage [0, 1] to open the gripper. 0 fully closed, 1 fully open.
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
     * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
     * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
     * @param {boolean} [disableForceOnContact=false] Whether to switch the gripper to force control on contact.
     * @param {?number} [maxTorque=null] Maximum torque applied if contact detected closing the gripper (5.5 Nm if
     * unset).
     * @returns {robotCommandPb.RobotCommand}
     */
    static clawGripperOpenFractionCommand(openFraction: number, buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null, disableForceOnContact?: boolean, maxTorque?: number | null): robotCommandPb.RobotCommand;
    /**
     * Builds a command to set the gripper open angle. Wraps it in SynchronizedCommand.
     * @param {number} gripperQ [-1.5708, 0] where -1.5708 is fully open and 0 is fully closed.
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
     * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
     * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
     * @param {boolean} [disableForceOnContact=false] Whether to switch the gripper to force control on contact.
     * @param {?number} [maxTorque=null] Maximum torque applied if contact detected closing the gripper (5.5 Nm if
     * unset).
     * @returns {robotCommandPb.RobotCommand}
     */
    static clawGripperOpenAngleCommand(gripperQ: number, buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null, disableForceOnContact?: boolean, maxTorque?: number | null): robotCommandPb.RobotCommand;
    static createArmJointTrajectoryPoint(sh0: any, sh1: any, el0: any, el1: any, wr0: any, wr1: any, timeSinceReferenceSecs?: null): armCommandPb.ArmJointTrajectoryPoint;
    static armJointCommand(sh0: any, sh1: any, el0: any, el1: any, wr0: any, wr1: any, maxVel?: null, maxAccel?: null, buildOnCommand?: null): robotCommandPb.RobotCommand;
    /**
     * Given a set of joint positions, times, and optional velocity, create a synchro command.
     * @param {*} jointPositions A list of length N with joint positions at each knot point in our
     * trajectory. Each knot joint position is represented as a list of length 6,
     * representing the 6 joint angles [sh0, sh1, el0, el1, wr0, wr1]
     * @param {*} times A list of length N with the corresponding time_since_reference for each of our knots
     * @param {*} jointVelocities Optional joint velocities at each knot. Same structure as joint_positions
     * @param {*} refTime Optional robot reference time. If unset, we'll use the current synchronized robot
     * time. Setting this is useful for getting a consistent trajectory over a long
     * period of time when many ArmJointMoveRequest commands are chained together.
     * @param {*} maxAcc Optional maximum allowable joint acceleration. Not setting this will lead to the
     * robot using a relatively safe low default. If the user is sure their joint
     * trajectory is safe and achievable, this can be set to a large value so it
     * doesn't get in the way.
     * @param {*} maxVel Optional maximum allowable joint velocity. Same thing about defaults as max_acc
     * @param {*} buildOnCommand Option to input a RobotCommand (not containing a full_body_command). An
     * arm_command and gripper_command from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     * @param {armCommandPb.TrackingMode} [trackingMode=TRACKING_MODE_DEFAULT] Optional mode for joint trajectory
     * tracking, like Python 5.2.0 (TRACKING_MODE_SLOW_PRECISE for slow trajectories that require a very high precision).
     * @returns {robotCommandPb.RobotCommand}
     */
    static armJointMoveHelper(jointPositions: any, times: any, jointVelocities?: any, refTime?: any, maxAcc?: any, maxVel?: any, buildOnCommand?: any, trackingMode?: armCommandPb.TrackingMode): robotCommandPb.RobotCommand;
    /**
     * Given a set of SE3Poses, times, and optional velocities, create a synchro command containing an
     * armCartesianCommand.
     * @param {geometryPb.SE3Pose[]} se3Poses A list of length N with SE3 transforms at each knot point in our
     * trajectory.
     * @param {number[]} times A list of length N with the corresponding time_since_reference (seconds) for each of
     * our knots.
     * @param {string} rootFrameName The name of the root frame. It must be a valid frame name in the frame_tree.
     * @param {?geometryPb.SE3Pose} [wristTformTool=null] The optional tool pose to use during the move. If unset,
     * defaults to a pose slightly in front of the gripper's palm plate aligned with the wrist's orientation.
     * @param {?geometryPb.SE3Pose} [rootTformTask=null] The SE3 transform between the root and the task frame. If
     * unset, it will treat the root frame as the task frame.
     * @param {?geometryPb.SE3Velocity[]} [se3Velocities=null] An optional list of length N with SE3 velocities at
     * each knot point in our trajectory.
     * @param {?Timestamp} [refTime=null] Optional reference time for the trajectory. If unset, we'll use the current
     * robot-synchronized time.
     * @param {?number} [maxAcc=null] Optional maximum allowable linear acceleration (m/s^2).
     * @param {?number} [maxLinearVel=null] Optional maximum allowable linear velocity (m/s).
     * @param {?number} [maxAngularVel=null] Optional maximum allowable angular velocity (rad/s).
     * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand for synchronous
     * commands.
     * @returns {robotCommandPb.RobotCommand}
     * @throws {ValueError} An invalid trajectory (the asserts of Python).
     */
    static armCartesianMoveHelper(se3Poses: geometryPb.SE3Pose[], times: number[], rootFrameName: string, wristTformTool?: geometryPb.SE3Pose | null, rootTformTask?: geometryPb.SE3Pose | null, se3Velocities?: geometryPb.SE3Velocity[] | null, refTime?: Timestamp | null, maxAcc?: number | null, maxLinearVel?: number | null, maxAngularVel?: number | null, buildOnCommand?: robotCommandPb.RobotCommand | null): robotCommandPb.RobotCommand;
    /**
     * Given a set of gripper positions, times, and optional velocities, create a synchro command.
     * @param {*} gripperPositions A list of length N with joint positions at each knot point in our
     * trajectory.
     * @param {*} times A list of length N with the corresponding time_since_reference for each of our knots
     * @param {*} gripperVelocities Optional joint velocities at each knot. Same structure as gripper_positions.
     * @param {*} refTime Optional robot reference time. If unset, we'll use the current synchronized robot
     * time. Setting this is useful for getting a consistent trajectory over a long
     * period of time when many ClawGripperCommandRequest commands are chained together.
     * @param {*} maxAcc Optional maximum allowable gripper acceleration. Not setting this will lead to the
     * robot using a relatively safe low default. If the user is sure their gripper
     * trajectory is safe and achievable, this can be set to a large value so it
     * doesn't get in the way.
     * @param {*} maxVel Optional maximum allowable gripper velocity. Same thing about defaults as max_acc.
     * @param {*} disableForceOnContact Whether to switch the gripper to force control on contact detection.
     * @param {*} buildOnCommand Option to input a RobotCommand (not containing a full_body_command). An
     * arm_command and mobility_command from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     * @param {*} maxTorque Optional Maximum torque applied if contact detected closing the gripper. If
     * unspecified, a default value of 5.5 (Nm) will be used.
     * @returns {robotCommandPb.RobotCommand}
     */
    static clawGripperCommandHelper(gripperPositions: any, times: any, gripperVelocities?: any, refTime?: any, maxAcc?: any, maxVel?: any, disableForceOnContact?: any, buildOnCommand?: any, maxTorque?: any): robotCommandPb.RobotCommand;
    /**
     * Returns a RobotCommand with an ArmCommand that will freeze the arm's joints in place.
     * @param {robotCommandPb.RobotCommand} buildOnCommand Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and mobilityCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     * @returns {robotCommandPb.RobotCommand}
     */
    static armJointFreezeCommand(buildOnCommand?: robotCommandPb.RobotCommand): robotCommandPb.RobotCommand;
    /**
     * *********************
     * Spot mobility params *
     **********************
     */
    static mobilityParams(bodyHeight?: number, footprintRBody?: geometry.EulerZXY, locomotionHint?: spotCommandPb.LocomotionHint, stairHint?: boolean, externalForceParams?: null, stairsMode?: null): spotCommandPb.MobilityParams;
    /**
     * Helper to create a BodyControlParams.BodyPose from a single desired bodyPose relative to frameName.
     * @param {string} frameName Name of the frame relative to which bodyPose is expressed.
     * @param {geometryPb.SE3Pose} bodyPose The desired pose of the body.
     * @returns {spotCommandPb.BodyControlParams.BodyPose} The desired body pose for a StandCommand.
     */
    static bodyPose(frameName: string, bodyPose: geometryPb.SE3Pose): spotCommandPb.BodyControlParams.BodyPose;
    /**
     * Helper to create Mobility params.
     *
     * This function allows the user to enable an external force estimator, or set a vector of forces (in the body frame)
     * which override the estimator with constant external forces.
     */
    static buildBodyExternalForces(externalForceIndicator?: spotCommandPb.BodyExternalForceParams.ExternalForceIndicator, overrideExternalForceVec?: null): spotCommandPb.BodyExternalForceParams | null;
    /**
     * *****************
     * Helper functions *
     ******************
     */
    static _toAny(params: any, typeName?: string): Any;
    /**
     * Combines multiple commands into one command. There's no intelligence here on duplicate commands.
     */
    static buildSynchroCommand(...args: any[]): robotCommandPb.RobotCommand;
}
/**
 * Client for calling RobotCommand services.
 * This client is in BETA and may undergo changes in future releases.
 * @extends {BaseClient<RobotCommandStreamingServiceClient>}
 */
export class RobotCommandStreamingClient extends BaseClient<RobotCommandStreamingServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Stream joint control commands to the robot.
     * @param {Iterable<robotCommandPb.JointControlStreamRequest>|AsyncIterable<robotCommandPb.JointControlStreamRequest>}
     * commandIterator The commands to stream.
     * @param {Object} [args] Options to provide for gRPC request.
     * @returns {Promise<robotCommandPb.JointControlStreamResponse>}
     */
    sendJointControlCommands(commandIterator: Iterable<robotCommandPb.JointControlStreamRequest> | AsyncIterable<robotCommandPb.JointControlStreamRequest>, args?: Object): Promise<robotCommandPb.JointControlStreamResponse>;
}
/**
 * Constructs a RobotTimeConverter as necessary.
 */
export class _TimeConverter {
    /**
     * @param {RobotCommandClient} parent Parent for the time sync endpoint.
     * @param {TimeSyncEndpoint} endpoint Endpoint for the time converted.
     */
    constructor(parent: RobotCommandClient, endpoint: TimeSyncEndpoint);
    /**
     * Parent for the time sync endpoint.
     * @type {RobotCommandClient}
     * @private
     */
    private _parent;
    /**
     * Endpoint for the time converted.
     * @type {TimeSyncEndpoint}
     * @private
     */
    private _endpoint;
    /**
     * @type {?RobotTimeConverter}
     * @private
     */
    private _converter;
    /**
     * Accessor which lazily constructs the RobotTimeConverter.
     * @type {RobotTimeConverter}
     */
    get obj(): RobotTimeConverter;
    /**
     * Calls RobotTimeConverter.convertTimestampFromLocalToRobot().
     * @param {Timestamp} timestamp Local system time
     */
    convertTimestampFromLocalToRobot(timestamp: Timestamp): void;
    /**
     * Calls RobotTimeConverter.robotTimestampFromLocalSecs().
     * @param {*} endTimeSecs Local system time, in seconds from the unix epoch.
     * @returns {Timestamp}
     */
    robotTimestampFromLocalSecs(endTimeSecs: any): Timestamp;
    /**
     * Calls RobotTimeConverter.localSecondsFromRobotTimestamp().
     * @param {number} robotTimestamp Local system time, in seconds from the unix epoch.
     * @returns {number}
     */
    localSecondsFromRobotTimestamp(robotTimestamp: number): number;
}
export const _clearBehaviorFaultError: (...args: any[]) => any;
/**
 * Recursion to update specified fields of a protobuf using a specified edit-function.
 * @param {*} proto Protobuf to edit recursively.
 * @param {*} editTree Part of the tree to edit.
 * @param {Function} editFn Edit function to execute.
 * @returns {void}
 */
export function _editProto(proto: any, editTree: any, editFn: Function): void;
export const _robotCommandError: (...args: any[]) => any;
export const _robotCommandFeedbackError: (...args: any[]) => any;
/**
 * Helper function which uses the RobotCommandService to execute the given command, like blocking_command() in Python
 * (it was missing: each helper had its own loop, which read an absent mobility feedback as a failure and ignored the
 * arm and gripper feedbacks).
 *
 * Blocks until checkStatusFn returns true, or throws if the command times out or fails. This helper checks the main
 * full_body/synchronized command status (RobotCommandFeedbackStatus), but the caller should check the status of the
 * specific commands (stand, stow, selfright, etc.) in the callback.
 * @param {RobotCommandClient} commandClient RobotCommand client.
 * @param {robotCommandPb.RobotCommand} command The robot command to issue to the robot.
 * @param {function(robotCommandPb.RobotCommandFeedbackResponse): boolean} checkStatusFn Returns true when the correct
 * statuses are achieved for the specific requested command, and throws CommandFailedErrorWithFeedback if an error
 * state occurs.
 * @param {?number} [endTimeSecs=null] The local end time of the command, in seconds (converted to robot time).
 * @param {number} [timeoutMsec=10_000] Timeout for the command, in milliseconds.
 * @param {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
export function blockingCommand(commandClient: RobotCommandClient, command: robotCommandPb.RobotCommand, checkStatusFn: (arg0: robotCommandPb.RobotCommandFeedbackResponse) => boolean, endTimeSecs?: number | null, timeoutMsec?: number, updateFrequency?: number): Promise<void>;
/**
 * Helper function which uses the RobotCommandService to stand.
 * Blocks until robot is standing, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=10_000] Timeout for the command in milliseconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @param  {spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands
 * to optionally set say body_height
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
export function blockingStand(commandClient: RobotCommandClient, timeoutMsec?: number, updateFrequency?: number, params?: spotCommandPb.MobilityParams): Promise<void>;
/**
 * Helper function which uses the RobotCommandService to sit.
 * Blocks until robot is sitting, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=10_000] Timeout for the command in milliseconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
export function blockingSit(commandClient: RobotCommandClient, timeoutMsec?: number, updateFrequency?: number): Promise<void>;
/**
 * Helper function which uses the RobotCommandService to self-right.
 * Blocks until self-right has completed, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=30_000] Timeout for the command in milliseconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
export function blockingSelfright(commandClient: RobotCommandClient, timeoutMsec?: number, updateFrequency?: number): Promise<void>;
/**
 * Helper that blocks until the arm achieves a finishing state for the specific arm command.
 * This helper will block and check the feedback for ArmCartesianCommand, GazeCommand,
 * ArmJointMoveCommand, NamedArmPositionsCommand, and ArmImpedanceCommand.
 * @param  {RobotCommandClient} commandClient Robot command client, used to request feedback
 * @param  {number} cmdId Command ID returned by the robot when the arm movement command was sent.
 * @param  {?number} [timeoutMsec=null] Optional number of milliseconds after which we'll return no matter what
 * the robot's state is.
 * @returns {Promise<boolean>} true if successfully got to the end of the trajectory, false if the arm stalled or
 * the move was canceled (the arm failed to reach the goal), or at the timeout.
 */
export function blockUntilArmArrives(commandClient: RobotCommandClient, cmdId: number, timeoutMsec?: number | null): Promise<boolean>;
/**
 * Helper that blocks until a trajectory command reaches a desired goal state or a timeout is reached.
 * @param {RobotCommandClient} commandClient the client used to request feedback
 * @param {number} cmdId command ID returned by the robot when the trajectory command was sent
 * @param {Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.Status>} [trajectoryEndStatuses=[STATUS_STOPPED]]
 * the feedback must have a status which is included in this set of statuses to be considered successfully complete.
 * By default, this includes only the "STATUS_STOPPED" end condition (the deprecated STATUS_AT_GOAL).
 * @param {?Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.BodyMovementStatus>} [bodyMovementStatuses=null]
 * the body movement status must be one of these statuses to be considered successfully complete. By
 * default, this is null, which means any body movement status will be accepted.
 * @param {number} [feedbackIntervalSecs=0.1] The time (in seconds) to wait before each feedback request checking
 * if the trajectory is complete. Defaults to checking at 10 Hz (requests every 0.1 seconds).
 * @param {?number} [timeoutSec=null] optional number of seconds after which we'll return no matter what the robot's
 * state is.
 * @param {any} [logger=null] The logger print debug statements with. If null, no debug printouts will be sent.
 * @returns {Promise<boolean>} True if reaches STATUS_STOPPED, false otherwise.
 */
export function blockForTrajectoryCmd(commandClient: RobotCommandClient, cmdId: number, trajectoryEndStatuses?: Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.Status>, bodyMovementStatuses?: Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.BodyMovementStatus> | null, feedbackIntervalSecs?: number, timeoutSec?: number | null, logger?: any): Promise<boolean>;
import { ResponseError } from "./exceptions";
import { BosdynError } from "./exceptions";
import robotCommandPb = require("../../src/bosdyn/api/robot_command_pb");
import { RobotCommandServiceClient } from "../../src/bosdyn/api/robot_command_service_grpc_pb";
import { BaseClient } from "./common";
import basicCommandPb = require("../../src/bosdyn/api/basic_command_pb");
import geometryPb = require("../../src/bosdyn/api/geometry_pb");
import wrappersPb = require("google-protobuf/google/protobuf/wrappers_pb");
import spotCommandPb = require("../../src/bosdyn/api/spot/robot_command_pb");
import geometry = require("../bosdyn-core/geometry");
import armCommandPb = require("../../src/bosdyn/api/arm_command_pb");
import { Any } from "google-protobuf/google/protobuf/any_pb";
import { RobotCommandStreamingServiceClient } from "../../src/bosdyn/api/robot_command_service_grpc_pb";
