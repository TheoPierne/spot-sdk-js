// package: bosdyn.api
// file: bosdyn/api/robot_state.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_parameter_pb from "../../bosdyn/api/parameter_pb";
import * as bosdyn_api_service_fault_pb from "../../bosdyn/api/service_fault_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Skeleton extends jspb.Message { 
    clearLinksList(): void;
    getLinksList(): Array<Skeleton.Link>;
    setLinksList(value: Array<Skeleton.Link>): Skeleton;
    addLinks(value?: Skeleton.Link, index?: number): Skeleton.Link;
    getUrdf(): string;
    setUrdf(value: string): Skeleton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Skeleton.AsObject;
    static toObject(includeInstance: boolean, msg: Skeleton): Skeleton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Skeleton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Skeleton;
    static deserializeBinaryFromReader(message: Skeleton, reader: jspb.BinaryReader): Skeleton;
}

export namespace Skeleton {
    export type AsObject = {
        linksList: Array<Skeleton.Link.AsObject>,
        urdf: string,
    }


    export class Link extends jspb.Message { 
        getName(): string;
        setName(value: string): Link;

        hasObjModel(): boolean;
        clearObjModel(): void;
        getObjModel(): Skeleton.Link.ObjModel | undefined;
        setObjModel(value?: Skeleton.Link.ObjModel): Link;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Link.AsObject;
        static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Link;
        static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
    }

    export namespace Link {
        export type AsObject = {
            name: string,
            objModel?: Skeleton.Link.ObjModel.AsObject,
        }


        export class ObjModel extends jspb.Message { 
            getFileName(): string;
            setFileName(value: string): ObjModel;
            getFileContents(): string;
            setFileContents(value: string): ObjModel;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ObjModel.AsObject;
            static toObject(includeInstance: boolean, msg: ObjModel): ObjModel.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ObjModel, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ObjModel;
            static deserializeBinaryFromReader(message: ObjModel, reader: jspb.BinaryReader): ObjModel;
        }

        export namespace ObjModel {
            export type AsObject = {
                fileName: string,
                fileContents: string,
            }
        }

    }

}

export class HardwareConfiguration extends jspb.Message { 

    hasSkeleton(): boolean;
    clearSkeleton(): void;
    getSkeleton(): Skeleton | undefined;
    setSkeleton(value?: Skeleton): HardwareConfiguration;
    getCanPowerCommandRequestOffRobot(): boolean;
    setCanPowerCommandRequestOffRobot(value: boolean): HardwareConfiguration;
    getCanPowerCommandRequestCycleRobot(): boolean;
    setCanPowerCommandRequestCycleRobot(value: boolean): HardwareConfiguration;
    getCanPowerCommandRequestPayloadPorts(): boolean;
    setCanPowerCommandRequestPayloadPorts(value: boolean): HardwareConfiguration;
    getCanPowerCommandRequestWifiRadio(): boolean;
    setCanPowerCommandRequestWifiRadio(value: boolean): HardwareConfiguration;
    getHasAudioVisualSystem(): boolean;
    setHasAudioVisualSystem(value: boolean): HardwareConfiguration;
    getRedundantSafetyStopEnabled(): boolean;
    setRedundantSafetyStopEnabled(value: boolean): HardwareConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HardwareConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: HardwareConfiguration): HardwareConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HardwareConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HardwareConfiguration;
    static deserializeBinaryFromReader(message: HardwareConfiguration, reader: jspb.BinaryReader): HardwareConfiguration;
}

export namespace HardwareConfiguration {
    export type AsObject = {
        skeleton?: Skeleton.AsObject,
        canPowerCommandRequestOffRobot: boolean,
        canPowerCommandRequestCycleRobot: boolean,
        canPowerCommandRequestPayloadPorts: boolean,
        canPowerCommandRequestWifiRadio: boolean,
        hasAudioVisualSystem: boolean,
        redundantSafetyStopEnabled: boolean,
    }
}

export class RobotState extends jspb.Message { 

    hasPowerState(): boolean;
    clearPowerState(): void;
    getPowerState(): PowerState | undefined;
    setPowerState(value?: PowerState): RobotState;
    clearBatteryStatesList(): void;
    getBatteryStatesList(): Array<BatteryState>;
    setBatteryStatesList(value: Array<BatteryState>): RobotState;
    addBatteryStates(value?: BatteryState, index?: number): BatteryState;
    clearCommsStatesList(): void;
    getCommsStatesList(): Array<CommsState>;
    setCommsStatesList(value: Array<CommsState>): RobotState;
    addCommsStates(value?: CommsState, index?: number): CommsState;

    hasSystemFaultState(): boolean;
    clearSystemFaultState(): void;
    getSystemFaultState(): SystemFaultState | undefined;
    setSystemFaultState(value?: SystemFaultState): RobotState;
    clearEstopStatesList(): void;
    getEstopStatesList(): Array<EStopState>;
    setEstopStatesList(value: Array<EStopState>): RobotState;
    addEstopStates(value?: EStopState, index?: number): EStopState;

    hasKinematicState(): boolean;
    clearKinematicState(): void;
    getKinematicState(): KinematicState | undefined;
    setKinematicState(value?: KinematicState): RobotState;

    hasBehaviorFaultState(): boolean;
    clearBehaviorFaultState(): void;
    getBehaviorFaultState(): BehaviorFaultState | undefined;
    setBehaviorFaultState(value?: BehaviorFaultState): RobotState;
    clearFootStateList(): void;
    getFootStateList(): Array<FootState>;
    setFootStateList(value: Array<FootState>): RobotState;
    addFootState(value?: FootState, index?: number): FootState;

    hasManipulatorState(): boolean;
    clearManipulatorState(): void;
    getManipulatorState(): ManipulatorState | undefined;
    setManipulatorState(value?: ManipulatorState): RobotState;

    hasServiceFaultState(): boolean;
    clearServiceFaultState(): void;
    getServiceFaultState(): ServiceFaultState | undefined;
    setServiceFaultState(value?: ServiceFaultState): RobotState;

    hasTerrainState(): boolean;
    clearTerrainState(): void;
    getTerrainState(): TerrainState | undefined;
    setTerrainState(value?: TerrainState): RobotState;

    hasSystemState(): boolean;
    clearSystemState(): void;
    getSystemState(): SystemState | undefined;
    setSystemState(value?: SystemState): RobotState;

    hasBehaviorState(): boolean;
    clearBehaviorState(): void;
    getBehaviorState(): BehaviorState | undefined;
    setBehaviorState(value?: BehaviorState): RobotState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotState.AsObject;
    static toObject(includeInstance: boolean, msg: RobotState): RobotState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotState;
    static deserializeBinaryFromReader(message: RobotState, reader: jspb.BinaryReader): RobotState;
}

export namespace RobotState {
    export type AsObject = {
        powerState?: PowerState.AsObject,
        batteryStatesList: Array<BatteryState.AsObject>,
        commsStatesList: Array<CommsState.AsObject>,
        systemFaultState?: SystemFaultState.AsObject,
        estopStatesList: Array<EStopState.AsObject>,
        kinematicState?: KinematicState.AsObject,
        behaviorFaultState?: BehaviorFaultState.AsObject,
        footStateList: Array<FootState.AsObject>,
        manipulatorState?: ManipulatorState.AsObject,
        serviceFaultState?: ServiceFaultState.AsObject,
        terrainState?: TerrainState.AsObject,
        systemState?: SystemState.AsObject,
        behaviorState?: BehaviorState.AsObject,
    }
}

export class PowerState extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PowerState;
    getMotorPowerState(): PowerState.MotorPowerState;
    setMotorPowerState(value: PowerState.MotorPowerState): PowerState;
    getMotorPowerErrorMessage(): string;
    setMotorPowerErrorMessage(value: string): PowerState;
    getShorePowerState(): PowerState.ShorePowerState;
    setShorePowerState(value: PowerState.ShorePowerState): PowerState;
    getRobotPowerState(): PowerState.RobotPowerState;
    setRobotPowerState(value: PowerState.RobotPowerState): PowerState;
    getPayloadPortsPowerState(): PowerState.PayloadPortsPowerState;
    setPayloadPortsPowerState(value: PowerState.PayloadPortsPowerState): PowerState;
    getWifiRadioPowerState(): PowerState.WifiRadioPowerState;
    setWifiRadioPowerState(value: PowerState.WifiRadioPowerState): PowerState;

    hasLocomotionChargePercentage(): boolean;
    clearLocomotionChargePercentage(): void;
    getLocomotionChargePercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLocomotionChargePercentage(value?: google_protobuf_wrappers_pb.DoubleValue): PowerState;

    hasLocomotionEstimatedRuntime(): boolean;
    clearLocomotionEstimatedRuntime(): void;
    getLocomotionEstimatedRuntime(): google_protobuf_duration_pb.Duration | undefined;
    setLocomotionEstimatedRuntime(value?: google_protobuf_duration_pb.Duration): PowerState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerState.AsObject;
    static toObject(includeInstance: boolean, msg: PowerState): PowerState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerState;
    static deserializeBinaryFromReader(message: PowerState, reader: jspb.BinaryReader): PowerState;
}

export namespace PowerState {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        motorPowerState: PowerState.MotorPowerState,
        motorPowerErrorMessage: string,
        shorePowerState: PowerState.ShorePowerState,
        robotPowerState: PowerState.RobotPowerState,
        payloadPortsPowerState: PowerState.PayloadPortsPowerState,
        wifiRadioPowerState: PowerState.WifiRadioPowerState,
        locomotionChargePercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        locomotionEstimatedRuntime?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum MotorPowerState {
    STATE_UNKNOWN = 0,
    MOTOR_POWER_STATE_UNKNOWN = 0,
    STATE_OFF = 1,
    MOTOR_POWER_STATE_OFF = 1,
    STATE_ON = 2,
    MOTOR_POWER_STATE_ON = 2,
    STATE_POWERING_ON = 3,
    MOTOR_POWER_STATE_POWERING_ON = 3,
    STATE_POWERING_OFF = 4,
    MOTOR_POWER_STATE_POWERING_OFF = 4,
    STATE_ERROR = 5,
    MOTOR_POWER_STATE_ERROR = 5,
    }

    export enum ShorePowerState {
    STATE_UNKNOWN_SHORE_POWER = 0,
    SHORE_POWER_STATE_UNKNOWN = 0,
    STATE_ON_SHORE_POWER = 1,
    SHORE_POWER_STATE_ON = 1,
    STATE_OFF_SHORE_POWER = 2,
    SHORE_POWER_STATE_OFF = 2,
    }

    export enum RobotPowerState {
    ROBOT_POWER_STATE_UNKNOWN = 0,
    ROBOT_POWER_STATE_ON = 1,
    ROBOT_POWER_STATE_OFF = 2,
    }

    export enum PayloadPortsPowerState {
    PAYLOAD_PORTS_POWER_STATE_UNKNOWN = 0,
    PAYLOAD_PORTS_POWER_STATE_ON = 1,
    PAYLOAD_PORTS_POWER_STATE_OFF = 2,
    }

    export enum WifiRadioPowerState {
    WIFI_RADIO_POWER_STATE_UNKNOWN = 0,
    WIFI_RADIO_POWER_STATE_ON = 1,
    WIFI_RADIO_POWER_STATE_OFF = 2,
    }

}

export class SystemFaultState extends jspb.Message { 
    clearFaultsList(): void;
    getFaultsList(): Array<SystemFault>;
    setFaultsList(value: Array<SystemFault>): SystemFaultState;
    addFaults(value?: SystemFault, index?: number): SystemFault;
    clearHistoricalFaultsList(): void;
    getHistoricalFaultsList(): Array<SystemFault>;
    setHistoricalFaultsList(value: Array<SystemFault>): SystemFaultState;
    addHistoricalFaults(value?: SystemFault, index?: number): SystemFault;

    getAggregatedMap(): jspb.Map<string, SystemFault.Severity>;
    clearAggregatedMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemFaultState.AsObject;
    static toObject(includeInstance: boolean, msg: SystemFaultState): SystemFaultState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemFaultState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemFaultState;
    static deserializeBinaryFromReader(message: SystemFaultState, reader: jspb.BinaryReader): SystemFaultState;
}

export namespace SystemFaultState {
    export type AsObject = {
        faultsList: Array<SystemFault.AsObject>,
        historicalFaultsList: Array<SystemFault.AsObject>,

        aggregatedMap: Array<[string, SystemFault.Severity]>,
    }
}

export class SystemFault extends jspb.Message { 
    getName(): string;
    setName(value: string): SystemFault;

    hasOnsetTimestamp(): boolean;
    clearOnsetTimestamp(): void;
    getOnsetTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOnsetTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SystemFault;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): SystemFault;
    getCode(): number;
    setCode(value: number): SystemFault;
    getUid(): number;
    setUid(value: number): SystemFault;
    getUuid(): string;
    setUuid(value: string): SystemFault;
    getErrorMessage(): string;
    setErrorMessage(value: string): SystemFault;
    clearAttributesList(): void;
    getAttributesList(): Array<string>;
    setAttributesList(value: Array<string>): SystemFault;
    addAttributes(value: string, index?: number): string;
    getSeverity(): SystemFault.Severity;
    setSeverity(value: SystemFault.Severity): SystemFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemFault.AsObject;
    static toObject(includeInstance: boolean, msg: SystemFault): SystemFault.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemFault, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemFault;
    static deserializeBinaryFromReader(message: SystemFault, reader: jspb.BinaryReader): SystemFault;
}

export namespace SystemFault {
    export type AsObject = {
        name: string,
        onsetTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        code: number,
        uid: number,
        uuid: string,
        errorMessage: string,
        attributesList: Array<string>,
        severity: SystemFault.Severity,
    }

    export enum Severity {
    SEVERITY_UNKNOWN = 0,
    SEVERITY_INFO = 1,
    SEVERITY_WARN = 2,
    SEVERITY_CRITICAL = 3,
    }

}

export class EStopState extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EStopState;
    getName(): string;
    setName(value: string): EStopState;
    getType(): EStopState.Type;
    setType(value: EStopState.Type): EStopState;
    getState(): EStopState.State;
    setState(value: EStopState.State): EStopState;
    getStateDescription(): string;
    setStateDescription(value: string): EStopState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EStopState.AsObject;
    static toObject(includeInstance: boolean, msg: EStopState): EStopState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EStopState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EStopState;
    static deserializeBinaryFromReader(message: EStopState, reader: jspb.BinaryReader): EStopState;
}

export namespace EStopState {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        type: EStopState.Type,
        state: EStopState.State,
        stateDescription: string,
    }

    export enum Type {
    TYPE_UNKNOWN = 0,
    TYPE_HARDWARE = 1,
    TYPE_SOFTWARE = 2,
    }

    export enum State {
    STATE_UNKNOWN = 0,
    STATE_ESTOPPED = 1,
    STATE_NOT_ESTOPPED = 2,
    }

}

export class BatteryState extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BatteryState;
    getIdentifier(): string;
    setIdentifier(value: string): BatteryState;

    hasChargePercentage(): boolean;
    clearChargePercentage(): void;
    getChargePercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setChargePercentage(value?: google_protobuf_wrappers_pb.DoubleValue): BatteryState;

    hasEstimatedRuntime(): boolean;
    clearEstimatedRuntime(): void;
    getEstimatedRuntime(): google_protobuf_duration_pb.Duration | undefined;
    setEstimatedRuntime(value?: google_protobuf_duration_pb.Duration): BatteryState;

    hasCurrent(): boolean;
    clearCurrent(): void;
    getCurrent(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCurrent(value?: google_protobuf_wrappers_pb.DoubleValue): BatteryState;

    hasVoltage(): boolean;
    clearVoltage(): void;
    getVoltage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVoltage(value?: google_protobuf_wrappers_pb.DoubleValue): BatteryState;
    clearTemperaturesList(): void;
    getTemperaturesList(): Array<number>;
    setTemperaturesList(value: Array<number>): BatteryState;
    addTemperatures(value: number, index?: number): number;
    getStatus(): BatteryState.Status;
    setStatus(value: BatteryState.Status): BatteryState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatteryState.AsObject;
    static toObject(includeInstance: boolean, msg: BatteryState): BatteryState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatteryState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatteryState;
    static deserializeBinaryFromReader(message: BatteryState, reader: jspb.BinaryReader): BatteryState;
}

export namespace BatteryState {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        identifier: string,
        chargePercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        estimatedRuntime?: google_protobuf_duration_pb.Duration.AsObject,
        current?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        voltage?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        temperaturesList: Array<number>,
        status: BatteryState.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_MISSING = 1,
    STATUS_CHARGING = 2,
    STATUS_DISCHARGING = 3,
    STATUS_BOOTING = 4,
    }

}

export class SystemState extends jspb.Message { 
    clearMotorTemperaturesList(): void;
    getMotorTemperaturesList(): Array<MotorTemperature>;
    setMotorTemperaturesList(value: Array<MotorTemperature>): SystemState;
    addMotorTemperatures(value?: MotorTemperature, index?: number): MotorTemperature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemState.AsObject;
    static toObject(includeInstance: boolean, msg: SystemState): SystemState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemState;
    static deserializeBinaryFromReader(message: SystemState, reader: jspb.BinaryReader): SystemState;
}

export namespace SystemState {
    export type AsObject = {
        motorTemperaturesList: Array<MotorTemperature.AsObject>,
    }
}

export class KinematicState extends jspb.Message { 
    clearJointStatesList(): void;
    getJointStatesList(): Array<JointState>;
    setJointStatesList(value: Array<JointState>): KinematicState;
    addJointStates(value?: JointState, index?: number): JointState;

    hasAcquisitionTimestamp(): boolean;
    clearAcquisitionTimestamp(): void;
    getAcquisitionTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): KinematicState;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): KinematicState;

    hasVelocityOfBodyInVision(): boolean;
    clearVelocityOfBodyInVision(): void;
    getVelocityOfBodyInVision(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
    setVelocityOfBodyInVision(value?: bosdyn_api_geometry_pb.SE3Velocity): KinematicState;

    hasVelocityOfBodyInOdom(): boolean;
    clearVelocityOfBodyInOdom(): void;
    getVelocityOfBodyInOdom(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
    setVelocityOfBodyInOdom(value?: bosdyn_api_geometry_pb.SE3Velocity): KinematicState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KinematicState.AsObject;
    static toObject(includeInstance: boolean, msg: KinematicState): KinematicState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KinematicState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KinematicState;
    static deserializeBinaryFromReader(message: KinematicState, reader: jspb.BinaryReader): KinematicState;
}

export namespace KinematicState {
    export type AsObject = {
        jointStatesList: Array<JointState.AsObject>,
        acquisitionTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        velocityOfBodyInVision?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
        velocityOfBodyInOdom?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
    }
}

export class JointState extends jspb.Message { 
    getName(): string;
    setName(value: string): JointState;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPosition(value?: google_protobuf_wrappers_pb.DoubleValue): JointState;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): JointState;

    hasAcceleration(): boolean;
    clearAcceleration(): void;
    getAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): JointState;

    hasLoad(): boolean;
    clearLoad(): void;
    getLoad(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLoad(value?: google_protobuf_wrappers_pb.DoubleValue): JointState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointState.AsObject;
    static toObject(includeInstance: boolean, msg: JointState): JointState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointState;
    static deserializeBinaryFromReader(message: JointState, reader: jspb.BinaryReader): JointState;
}

export namespace JointState {
    export type AsObject = {
        name: string,
        position?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        velocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        acceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        load?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class MotorTemperature extends jspb.Message { 
    getName(): string;
    setName(value: string): MotorTemperature;
    getTemperature(): number;
    setTemperature(value: number): MotorTemperature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MotorTemperature.AsObject;
    static toObject(includeInstance: boolean, msg: MotorTemperature): MotorTemperature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MotorTemperature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MotorTemperature;
    static deserializeBinaryFromReader(message: MotorTemperature, reader: jspb.BinaryReader): MotorTemperature;
}

export namespace MotorTemperature {
    export type AsObject = {
        name: string,
        temperature: number,
    }
}

export class BehaviorFaultState extends jspb.Message { 
    clearFaultsList(): void;
    getFaultsList(): Array<BehaviorFault>;
    setFaultsList(value: Array<BehaviorFault>): BehaviorFaultState;
    addFaults(value?: BehaviorFault, index?: number): BehaviorFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BehaviorFaultState.AsObject;
    static toObject(includeInstance: boolean, msg: BehaviorFaultState): BehaviorFaultState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BehaviorFaultState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BehaviorFaultState;
    static deserializeBinaryFromReader(message: BehaviorFaultState, reader: jspb.BinaryReader): BehaviorFaultState;
}

export namespace BehaviorFaultState {
    export type AsObject = {
        faultsList: Array<BehaviorFault.AsObject>,
    }
}

export class BehaviorFault extends jspb.Message { 
    getBehaviorFaultId(): number;
    setBehaviorFaultId(value: number): BehaviorFault;

    hasOnsetTimestamp(): boolean;
    clearOnsetTimestamp(): void;
    getOnsetTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOnsetTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BehaviorFault;
    getCause(): BehaviorFault.Cause;
    setCause(value: BehaviorFault.Cause): BehaviorFault;
    getStatus(): BehaviorFault.Status;
    setStatus(value: BehaviorFault.Status): BehaviorFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BehaviorFault.AsObject;
    static toObject(includeInstance: boolean, msg: BehaviorFault): BehaviorFault.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BehaviorFault, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BehaviorFault;
    static deserializeBinaryFromReader(message: BehaviorFault, reader: jspb.BinaryReader): BehaviorFault;
}

export namespace BehaviorFault {
    export type AsObject = {
        behaviorFaultId: number,
        onsetTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        cause: BehaviorFault.Cause,
        status: BehaviorFault.Status,
    }

    export enum Cause {
    CAUSE_UNKNOWN = 0,
    CAUSE_FALL = 1,
    CAUSE_HARDWARE = 2,
    CAUSE_LEASE_TIMEOUT = 3,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_CLEARABLE = 1,
    STATUS_UNCLEARABLE = 2,
    }

}

export class RobotMetrics extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): RobotMetrics;
    clearMetricsList(): void;
    getMetricsList(): Array<bosdyn_api_parameter_pb.Parameter>;
    setMetricsList(value: Array<bosdyn_api_parameter_pb.Parameter>): RobotMetrics;
    addMetrics(value?: bosdyn_api_parameter_pb.Parameter, index?: number): bosdyn_api_parameter_pb.Parameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: RobotMetrics): RobotMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotMetrics;
    static deserializeBinaryFromReader(message: RobotMetrics, reader: jspb.BinaryReader): RobotMetrics;
}

export namespace RobotMetrics {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        metricsList: Array<bosdyn_api_parameter_pb.Parameter.AsObject>,
    }
}

export class CommsState extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CommsState;

    hasWifiState(): boolean;
    clearWifiState(): void;
    getWifiState(): WiFiState | undefined;
    setWifiState(value?: WiFiState): CommsState;

    getStateCase(): CommsState.StateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommsState.AsObject;
    static toObject(includeInstance: boolean, msg: CommsState): CommsState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommsState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommsState;
    static deserializeBinaryFromReader(message: CommsState, reader: jspb.BinaryReader): CommsState;
}

export namespace CommsState {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        wifiState?: WiFiState.AsObject,
    }

    export enum StateCase {
        STATE_NOT_SET = 0,
        WIFI_STATE = 2,
    }

}

export class WiFiState extends jspb.Message { 
    getCurrentMode(): WiFiState.Mode;
    setCurrentMode(value: WiFiState.Mode): WiFiState;
    getEssid(): string;
    setEssid(value: string): WiFiState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WiFiState.AsObject;
    static toObject(includeInstance: boolean, msg: WiFiState): WiFiState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WiFiState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WiFiState;
    static deserializeBinaryFromReader(message: WiFiState, reader: jspb.BinaryReader): WiFiState;
}

export namespace WiFiState {
    export type AsObject = {
        currentMode: WiFiState.Mode,
        essid: string,
    }

    export enum Mode {
    MODE_UNKNOWN = 0,
    MODE_ACCESS_POINT = 1,
    MODE_CLIENT = 2,
    }

}

export class FootState extends jspb.Message { 

    hasFootPositionRtBody(): boolean;
    clearFootPositionRtBody(): void;
    getFootPositionRtBody(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setFootPositionRtBody(value?: bosdyn_api_geometry_pb.Vec3): FootState;
    getContact(): FootState.Contact;
    setContact(value: FootState.Contact): FootState;

    hasTerrain(): boolean;
    clearTerrain(): void;
    getTerrain(): FootState.TerrainState | undefined;
    setTerrain(value?: FootState.TerrainState): FootState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FootState.AsObject;
    static toObject(includeInstance: boolean, msg: FootState): FootState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FootState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FootState;
    static deserializeBinaryFromReader(message: FootState, reader: jspb.BinaryReader): FootState;
}

export namespace FootState {
    export type AsObject = {
        footPositionRtBody?: bosdyn_api_geometry_pb.Vec3.AsObject,
        contact: FootState.Contact,
        terrain?: FootState.TerrainState.AsObject,
    }


    export class TerrainState extends jspb.Message { 
        getGroundMuEst(): number;
        setGroundMuEst(value: number): TerrainState;
        getFrameName(): string;
        setFrameName(value: string): TerrainState;

        hasFootSlipDistanceRtFrame(): boolean;
        clearFootSlipDistanceRtFrame(): void;
        getFootSlipDistanceRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setFootSlipDistanceRtFrame(value?: bosdyn_api_geometry_pb.Vec3): TerrainState;

        hasFootSlipVelocityRtFrame(): boolean;
        clearFootSlipVelocityRtFrame(): void;
        getFootSlipVelocityRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setFootSlipVelocityRtFrame(value?: bosdyn_api_geometry_pb.Vec3): TerrainState;

        hasGroundContactNormalRtFrame(): boolean;
        clearGroundContactNormalRtFrame(): void;
        getGroundContactNormalRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setGroundContactNormalRtFrame(value?: bosdyn_api_geometry_pb.Vec3): TerrainState;
        getVisualSurfaceGroundPenetrationMean(): number;
        setVisualSurfaceGroundPenetrationMean(value: number): TerrainState;
        getVisualSurfaceGroundPenetrationStd(): number;
        setVisualSurfaceGroundPenetrationStd(value: number): TerrainState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TerrainState.AsObject;
        static toObject(includeInstance: boolean, msg: TerrainState): TerrainState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TerrainState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TerrainState;
        static deserializeBinaryFromReader(message: TerrainState, reader: jspb.BinaryReader): TerrainState;
    }

    export namespace TerrainState {
        export type AsObject = {
            groundMuEst: number,
            frameName: string,
            footSlipDistanceRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            footSlipVelocityRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            groundContactNormalRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            visualSurfaceGroundPenetrationMean: number,
            visualSurfaceGroundPenetrationStd: number,
        }
    }


    export enum Contact {
    CONTACT_UNKNOWN = 0,
    CONTACT_MADE = 1,
    CONTACT_LOST = 2,
    }

}

export class ManipulatorState extends jspb.Message { 
    getGripperOpenPercentage(): number;
    setGripperOpenPercentage(value: number): ManipulatorState;
    getIsGripperHoldingItem(): boolean;
    setIsGripperHoldingItem(value: boolean): ManipulatorState;

    hasEstimatedEndEffectorForceInHand(): boolean;
    clearEstimatedEndEffectorForceInHand(): void;
    getEstimatedEndEffectorForceInHand(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setEstimatedEndEffectorForceInHand(value?: bosdyn_api_geometry_pb.Vec3): ManipulatorState;

    hasEstimatedEndEffectorWrenchInEndEffector(): boolean;
    clearEstimatedEndEffectorWrenchInEndEffector(): void;
    getEstimatedEndEffectorWrenchInEndEffector(): bosdyn_api_geometry_pb.Wrench | undefined;
    setEstimatedEndEffectorWrenchInEndEffector(value?: bosdyn_api_geometry_pb.Wrench): ManipulatorState;
    getStowState(): ManipulatorState.StowState;
    setStowState(value: ManipulatorState.StowState): ManipulatorState;

    hasVelocityOfHandInVision(): boolean;
    clearVelocityOfHandInVision(): void;
    getVelocityOfHandInVision(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
    setVelocityOfHandInVision(value?: bosdyn_api_geometry_pb.SE3Velocity): ManipulatorState;

    hasVelocityOfHandInOdom(): boolean;
    clearVelocityOfHandInOdom(): void;
    getVelocityOfHandInOdom(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
    setVelocityOfHandInOdom(value?: bosdyn_api_geometry_pb.SE3Velocity): ManipulatorState;
    getCarryState(): ManipulatorState.CarryState;
    setCarryState(value: ManipulatorState.CarryState): ManipulatorState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManipulatorState.AsObject;
    static toObject(includeInstance: boolean, msg: ManipulatorState): ManipulatorState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManipulatorState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManipulatorState;
    static deserializeBinaryFromReader(message: ManipulatorState, reader: jspb.BinaryReader): ManipulatorState;
}

export namespace ManipulatorState {
    export type AsObject = {
        gripperOpenPercentage: number,
        isGripperHoldingItem: boolean,
        estimatedEndEffectorForceInHand?: bosdyn_api_geometry_pb.Vec3.AsObject,
        estimatedEndEffectorWrenchInEndEffector?: bosdyn_api_geometry_pb.Wrench.AsObject,
        stowState: ManipulatorState.StowState,
        velocityOfHandInVision?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
        velocityOfHandInOdom?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
        carryState: ManipulatorState.CarryState,
    }

    export enum StowState {
    STOWSTATE_UNKNOWN = 0,
    STOWSTATE_STOWED = 1,
    STOWSTATE_DEPLOYED = 2,
    }

    export enum CarryState {
    CARRY_STATE_UNKNOWN = 0,
    CARRY_STATE_NOT_CARRIABLE = 1,
    CARRY_STATE_CARRIABLE = 2,
    CARRY_STATE_CARRIABLE_AND_STOWABLE = 3,
    }

}

export class ServiceFaultState extends jspb.Message { 
    clearFaultsList(): void;
    getFaultsList(): Array<bosdyn_api_service_fault_pb.ServiceFault>;
    setFaultsList(value: Array<bosdyn_api_service_fault_pb.ServiceFault>): ServiceFaultState;
    addFaults(value?: bosdyn_api_service_fault_pb.ServiceFault, index?: number): bosdyn_api_service_fault_pb.ServiceFault;
    clearHistoricalFaultsList(): void;
    getHistoricalFaultsList(): Array<bosdyn_api_service_fault_pb.ServiceFault>;
    setHistoricalFaultsList(value: Array<bosdyn_api_service_fault_pb.ServiceFault>): ServiceFaultState;
    addHistoricalFaults(value?: bosdyn_api_service_fault_pb.ServiceFault, index?: number): bosdyn_api_service_fault_pb.ServiceFault;

    getAggregatedMap(): jspb.Map<string, bosdyn_api_service_fault_pb.ServiceFault.Severity>;
    clearAggregatedMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceFaultState.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceFaultState): ServiceFaultState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceFaultState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceFaultState;
    static deserializeBinaryFromReader(message: ServiceFaultState, reader: jspb.BinaryReader): ServiceFaultState;
}

export namespace ServiceFaultState {
    export type AsObject = {
        faultsList: Array<bosdyn_api_service_fault_pb.ServiceFault.AsObject>,
        historicalFaultsList: Array<bosdyn_api_service_fault_pb.ServiceFault.AsObject>,

        aggregatedMap: Array<[string, bosdyn_api_service_fault_pb.ServiceFault.Severity]>,
    }
}

export class TerrainState extends jspb.Message { 
    getIsUnsafeToSit(): boolean;
    setIsUnsafeToSit(value: boolean): TerrainState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerrainState.AsObject;
    static toObject(includeInstance: boolean, msg: TerrainState): TerrainState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerrainState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerrainState;
    static deserializeBinaryFromReader(message: TerrainState, reader: jspb.BinaryReader): TerrainState;
}

export namespace TerrainState {
    export type AsObject = {
        isUnsafeToSit: boolean,
    }
}

export class RobotStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotStateRequest): RobotStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotStateRequest;
    static deserializeBinaryFromReader(message: RobotStateRequest, reader: jspb.BinaryReader): RobotStateRequest;
}

export namespace RobotStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class RobotStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotStateResponse;

    hasRobotState(): boolean;
    clearRobotState(): void;
    getRobotState(): RobotState | undefined;
    setRobotState(value?: RobotState): RobotStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotStateResponse): RobotStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotStateResponse;
    static deserializeBinaryFromReader(message: RobotStateResponse, reader: jspb.BinaryReader): RobotStateResponse;
}

export namespace RobotStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        robotState?: RobotState.AsObject,
    }
}

export class RobotMetricsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotMetricsRequest): RobotMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotMetricsRequest;
    static deserializeBinaryFromReader(message: RobotMetricsRequest, reader: jspb.BinaryReader): RobotMetricsRequest;
}

export namespace RobotMetricsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class RobotMetricsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotMetricsResponse;

    hasRobotMetrics(): boolean;
    clearRobotMetrics(): void;
    getRobotMetrics(): RobotMetrics | undefined;
    setRobotMetrics(value?: RobotMetrics): RobotMetricsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotMetricsResponse): RobotMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotMetricsResponse;
    static deserializeBinaryFromReader(message: RobotMetricsResponse, reader: jspb.BinaryReader): RobotMetricsResponse;
}

export namespace RobotMetricsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        robotMetrics?: RobotMetrics.AsObject,
    }
}

export class RobotHardwareConfigurationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotHardwareConfigurationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotHardwareConfigurationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotHardwareConfigurationRequest): RobotHardwareConfigurationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotHardwareConfigurationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotHardwareConfigurationRequest;
    static deserializeBinaryFromReader(message: RobotHardwareConfigurationRequest, reader: jspb.BinaryReader): RobotHardwareConfigurationRequest;
}

export namespace RobotHardwareConfigurationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class RobotHardwareConfigurationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotHardwareConfigurationResponse;

    hasHardwareConfiguration(): boolean;
    clearHardwareConfiguration(): void;
    getHardwareConfiguration(): HardwareConfiguration | undefined;
    setHardwareConfiguration(value?: HardwareConfiguration): RobotHardwareConfigurationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotHardwareConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotHardwareConfigurationResponse): RobotHardwareConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotHardwareConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotHardwareConfigurationResponse;
    static deserializeBinaryFromReader(message: RobotHardwareConfigurationResponse, reader: jspb.BinaryReader): RobotHardwareConfigurationResponse;
}

export namespace RobotHardwareConfigurationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        hardwareConfiguration?: HardwareConfiguration.AsObject,
    }
}

export class RobotLinkModelRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotLinkModelRequest;
    getLinkName(): string;
    setLinkName(value: string): RobotLinkModelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotLinkModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotLinkModelRequest): RobotLinkModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotLinkModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotLinkModelRequest;
    static deserializeBinaryFromReader(message: RobotLinkModelRequest, reader: jspb.BinaryReader): RobotLinkModelRequest;
}

export namespace RobotLinkModelRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        linkName: string,
    }
}

export class RobotLinkModelResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotLinkModelResponse;

    hasLinkModel(): boolean;
    clearLinkModel(): void;
    getLinkModel(): Skeleton.Link.ObjModel | undefined;
    setLinkModel(value?: Skeleton.Link.ObjModel): RobotLinkModelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotLinkModelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotLinkModelResponse): RobotLinkModelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotLinkModelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotLinkModelResponse;
    static deserializeBinaryFromReader(message: RobotLinkModelResponse, reader: jspb.BinaryReader): RobotLinkModelResponse;
}

export namespace RobotLinkModelResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        linkModel?: Skeleton.Link.ObjModel.AsObject,
    }
}

export class RobotImpairedState extends jspb.Message { 
    getImpairedStatus(): RobotImpairedState.ImpairedStatus;
    setImpairedStatus(value: RobotImpairedState.ImpairedStatus): RobotImpairedState;
    clearSystemFaultsList(): void;
    getSystemFaultsList(): Array<SystemFault>;
    setSystemFaultsList(value: Array<SystemFault>): RobotImpairedState;
    addSystemFaults(value?: SystemFault, index?: number): SystemFault;
    clearServiceFaultsList(): void;
    getServiceFaultsList(): Array<bosdyn_api_service_fault_pb.ServiceFault>;
    setServiceFaultsList(value: Array<bosdyn_api_service_fault_pb.ServiceFault>): RobotImpairedState;
    addServiceFaults(value?: bosdyn_api_service_fault_pb.ServiceFault, index?: number): bosdyn_api_service_fault_pb.ServiceFault;
    clearBehaviorFaultsList(): void;
    getBehaviorFaultsList(): Array<BehaviorFault>;
    setBehaviorFaultsList(value: Array<BehaviorFault>): RobotImpairedState;
    addBehaviorFaults(value?: BehaviorFault, index?: number): BehaviorFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotImpairedState.AsObject;
    static toObject(includeInstance: boolean, msg: RobotImpairedState): RobotImpairedState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotImpairedState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotImpairedState;
    static deserializeBinaryFromReader(message: RobotImpairedState, reader: jspb.BinaryReader): RobotImpairedState;
}

export namespace RobotImpairedState {
    export type AsObject = {
        impairedStatus: RobotImpairedState.ImpairedStatus,
        systemFaultsList: Array<SystemFault.AsObject>,
        serviceFaultsList: Array<bosdyn_api_service_fault_pb.ServiceFault.AsObject>,
        behaviorFaultsList: Array<BehaviorFault.AsObject>,
    }

    export enum ImpairedStatus {
    IMPAIRED_STATUS_UNKNOWN = 0,
    IMPAIRED_STATUS_OK = 1,
    IMPAIRED_STATUS_NO_ROBOT_DATA = 2,
    IMPAIRED_STATUS_SYSTEM_FAULT = 3,
    IMPAIRED_STATUS_NO_MOTOR_POWER = 4,
    IMPAIRED_STATUS_REMOTE_CLOUDS_NOT_WORKING = 5,
    IMPAIRED_STATUS_SERVICE_FAULT = 6,
    IMPAIRED_STATUS_BEHAVIOR_FAULT = 7,
    IMPAIRED_STATUS_ENTITY_DETECTOR_NOT_WORKING = 8,
    IMPAIRED_STATUS_STUCK_IN_COLLISION = 9,
    }

}

export class CombinedJointStates extends jspb.Message { 

    hasAcquisitionTimestamp(): boolean;
    clearAcquisitionTimestamp(): void;
    getAcquisitionTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CombinedJointStates;
    clearPositionList(): void;
    getPositionList(): Array<number>;
    setPositionList(value: Array<number>): CombinedJointStates;
    addPosition(value: number, index?: number): number;
    clearVelocityList(): void;
    getVelocityList(): Array<number>;
    setVelocityList(value: Array<number>): CombinedJointStates;
    addVelocity(value: number, index?: number): number;
    clearLoadList(): void;
    getLoadList(): Array<number>;
    setLoadList(value: Array<number>): CombinedJointStates;
    addLoad(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CombinedJointStates.AsObject;
    static toObject(includeInstance: boolean, msg: CombinedJointStates): CombinedJointStates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CombinedJointStates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CombinedJointStates;
    static deserializeBinaryFromReader(message: CombinedJointStates, reader: jspb.BinaryReader): CombinedJointStates;
}

export namespace CombinedJointStates {
    export type AsObject = {
        acquisitionTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        positionList: Array<number>,
        velocityList: Array<number>,
        loadList: Array<number>,
    }
}

export class ImuState extends jspb.Message { 
    getPacketRate(): number;
    setPacketRate(value: number): ImuState;
    clearPacketsList(): void;
    getPacketsList(): Array<ImuState.Packet>;
    setPacketsList(value: Array<ImuState.Packet>): ImuState;
    addPackets(value?: ImuState.Packet, index?: number): ImuState.Packet;
    getIdentifier(): string;
    setIdentifier(value: string): ImuState;
    getMountingLinkName(): string;
    setMountingLinkName(value: string): ImuState;

    hasPositionImuRtLink(): boolean;
    clearPositionImuRtLink(): void;
    getPositionImuRtLink(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setPositionImuRtLink(value?: bosdyn_api_geometry_pb.Vec3): ImuState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImuState.AsObject;
    static toObject(includeInstance: boolean, msg: ImuState): ImuState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImuState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImuState;
    static deserializeBinaryFromReader(message: ImuState, reader: jspb.BinaryReader): ImuState;
}

export namespace ImuState {
    export type AsObject = {
        packetRate: number,
        packetsList: Array<ImuState.Packet.AsObject>,
        identifier: string,
        mountingLinkName: string,
        positionImuRtLink?: bosdyn_api_geometry_pb.Vec3.AsObject,
    }


    export class Packet extends jspb.Message { 

        hasAccelerationRtOdomInLinkFrame(): boolean;
        clearAccelerationRtOdomInLinkFrame(): void;
        getAccelerationRtOdomInLinkFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setAccelerationRtOdomInLinkFrame(value?: bosdyn_api_geometry_pb.Vec3): Packet;

        hasAngularVelocityRtOdomInLinkFrame(): boolean;
        clearAngularVelocityRtOdomInLinkFrame(): void;
        getAngularVelocityRtOdomInLinkFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setAngularVelocityRtOdomInLinkFrame(value?: bosdyn_api_geometry_pb.Vec3): Packet;

        hasOdomRotLink(): boolean;
        clearOdomRotLink(): void;
        getOdomRotLink(): bosdyn_api_geometry_pb.Quaternion | undefined;
        setOdomRotLink(value?: bosdyn_api_geometry_pb.Quaternion): Packet;

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Packet;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Packet.AsObject;
        static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Packet;
        static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
    }

    export namespace Packet {
        export type AsObject = {
            accelerationRtOdomInLinkFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            angularVelocityRtOdomInLinkFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            odomRotLink?: bosdyn_api_geometry_pb.Quaternion.AsObject,
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class RobotStateStreamRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotStateStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotStateStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotStateStreamRequest): RobotStateStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotStateStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotStateStreamRequest;
    static deserializeBinaryFromReader(message: RobotStateStreamRequest, reader: jspb.BinaryReader): RobotStateStreamRequest;
}

export namespace RobotStateStreamRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class RobotStateStreamResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotStateStreamResponse;

    hasJointStates(): boolean;
    clearJointStates(): void;
    getJointStates(): CombinedJointStates | undefined;
    setJointStates(value?: CombinedJointStates): RobotStateStreamResponse;

    hasInertialState(): boolean;
    clearInertialState(): void;
    getInertialState(): ImuState | undefined;
    setInertialState(value?: ImuState): RobotStateStreamResponse;

    hasKinematicState(): boolean;
    clearKinematicState(): void;
    getKinematicState(): RobotStateStreamResponse.KinematicState | undefined;
    setKinematicState(value?: RobotStateStreamResponse.KinematicState): RobotStateStreamResponse;
    clearContactStatesList(): void;
    getContactStatesList(): Array<FootState.Contact>;
    setContactStatesList(value: Array<FootState.Contact>): RobotStateStreamResponse;
    addContactStates(value: FootState.Contact, index?: number): FootState.Contact;

    hasLastCommand(): boolean;
    clearLastCommand(): void;
    getLastCommand(): RobotStateStreamResponse.CommandState | undefined;
    setLastCommand(value?: RobotStateStreamResponse.CommandState): RobotStateStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotStateStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotStateStreamResponse): RobotStateStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotStateStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotStateStreamResponse;
    static deserializeBinaryFromReader(message: RobotStateStreamResponse, reader: jspb.BinaryReader): RobotStateStreamResponse;
}

export namespace RobotStateStreamResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        jointStates?: CombinedJointStates.AsObject,
        inertialState?: ImuState.AsObject,
        kinematicState?: RobotStateStreamResponse.KinematicState.AsObject,
        contactStatesList: Array<FootState.Contact>,
        lastCommand?: RobotStateStreamResponse.CommandState.AsObject,
    }


    export class KinematicState extends jspb.Message { 

        hasAcquisitionTimestamp(): boolean;
        clearAcquisitionTimestamp(): void;
        getAcquisitionTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setAcquisitionTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): KinematicState;

        hasOdomTformBody(): boolean;
        clearOdomTformBody(): void;
        getOdomTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setOdomTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): KinematicState;

        hasVisionTformBody(): boolean;
        clearVisionTformBody(): void;
        getVisionTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setVisionTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): KinematicState;

        hasVelocityOfBodyInVision(): boolean;
        clearVelocityOfBodyInVision(): void;
        getVelocityOfBodyInVision(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
        setVelocityOfBodyInVision(value?: bosdyn_api_geometry_pb.SE3Velocity): KinematicState;

        hasVelocityOfBodyInOdom(): boolean;
        clearVelocityOfBodyInOdom(): void;
        getVelocityOfBodyInOdom(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
        setVelocityOfBodyInOdom(value?: bosdyn_api_geometry_pb.SE3Velocity): KinematicState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KinematicState.AsObject;
        static toObject(includeInstance: boolean, msg: KinematicState): KinematicState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KinematicState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KinematicState;
        static deserializeBinaryFromReader(message: KinematicState, reader: jspb.BinaryReader): KinematicState;
    }

    export namespace KinematicState {
        export type AsObject = {
            acquisitionTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            odomTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            visionTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            velocityOfBodyInVision?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
            velocityOfBodyInOdom?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
        }
    }

    export class CommandState extends jspb.Message { 
        getUserCommandKey(): number;
        setUserCommandKey(value: number): CommandState;

        hasReceivedTimestamp(): boolean;
        clearReceivedTimestamp(): void;
        getReceivedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setReceivedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CommandState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CommandState.AsObject;
        static toObject(includeInstance: boolean, msg: CommandState): CommandState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CommandState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CommandState;
        static deserializeBinaryFromReader(message: CommandState, reader: jspb.BinaryReader): CommandState;
    }

    export namespace CommandState {
        export type AsObject = {
            userCommandKey: number,
            receivedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class BehaviorState extends jspb.Message { 
    getState(): BehaviorState.State;
    setState(value: BehaviorState.State): BehaviorState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BehaviorState.AsObject;
    static toObject(includeInstance: boolean, msg: BehaviorState): BehaviorState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BehaviorState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BehaviorState;
    static deserializeBinaryFromReader(message: BehaviorState, reader: jspb.BinaryReader): BehaviorState;
}

export namespace BehaviorState {
    export type AsObject = {
        state: BehaviorState.State,
    }

    export enum State {
    STATE_UNKNOWN = 0,
    STATE_NOT_READY = 1,
    STATE_TRANSITION = 2,
    STATE_STANDING = 3,
    STATE_STEPPING = 4,
    }

}
