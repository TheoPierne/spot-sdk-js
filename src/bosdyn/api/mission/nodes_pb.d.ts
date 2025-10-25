// package: bosdyn.api.mission
// file: bosdyn/api/mission/nodes.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as bosdyn_api_alerts_pb from "../../../bosdyn/api/alerts_pb";
import * as bosdyn_api_docking_docking_pb from "../../../bosdyn/api/docking/docking_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_gripper_camera_param_pb from "../../../bosdyn/api/gripper_camera_param_pb";
import * as bosdyn_api_image_pb from "../../../bosdyn/api/image_pb";
import * as bosdyn_api_spot_choreography_sequence_pb from "../../../bosdyn/api/spot/choreography_sequence_pb";
import * as bosdyn_api_spot_cam_camera_pb from "../../../bosdyn/api/spot_cam/camera_pb";
import * as bosdyn_api_spot_cam_logging_pb from "../../../bosdyn/api/spot_cam/logging_pb";
import * as bosdyn_api_spot_cam_ptz_pb from "../../../bosdyn/api/spot_cam/ptz_pb";
import * as bosdyn_api_robot_command_pb from "../../../bosdyn/api/robot_command_pb";
import * as bosdyn_api_power_pb from "../../../bosdyn/api/power_pb";
import * as bosdyn_api_data_acquisition_pb from "../../../bosdyn/api/data_acquisition_pb";
import * as bosdyn_api_data_acquisition_store_pb from "../../../bosdyn/api/data_acquisition_store_pb";
import * as bosdyn_api_data_buffer_pb from "../../../bosdyn/api/data_buffer_pb";
import * as bosdyn_api_graph_nav_graph_nav_pb from "../../../bosdyn/api/graph_nav/graph_nav_pb";
import * as bosdyn_api_graph_nav_nav_pb from "../../../bosdyn/api/graph_nav/nav_pb";
import * as bosdyn_api_manipulation_api_pb from "../../../bosdyn/api/manipulation_api_pb";
import * as bosdyn_api_mission_util_pb from "../../../bosdyn/api/mission/util_pb";
import * as bosdyn_api_service_customization_pb from "../../../bosdyn/api/service_customization_pb";

export class Node extends jspb.Message { 
    getName(): string;
    setName(value: string): Node;

    hasUserData(): boolean;
    clearUserData(): void;
    getUserData(): bosdyn_api_mission_util_pb.UserData | undefined;
    setUserData(value?: bosdyn_api_mission_util_pb.UserData): Node;
    getReferenceId(): string;
    setReferenceId(value: string): Node;

    hasImpl(): boolean;
    clearImpl(): void;
    getImpl(): google_protobuf_any_pb.Any | undefined;
    setImpl(value?: google_protobuf_any_pb.Any): Node;

    hasNodeReference(): boolean;
    clearNodeReference(): void;
    getNodeReference(): string;
    setNodeReference(value: string): Node;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): Condition | undefined;
    setCondition(value?: Condition): Node;

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): Sequence | undefined;
    setSequence(value?: Sequence): Node;

    hasSelector(): boolean;
    clearSelector(): void;
    getSelector(): Selector | undefined;
    setSelector(value?: Selector): Node;

    hasRepeat(): boolean;
    clearRepeat(): void;
    getRepeat(): Repeat | undefined;
    setRepeat(value?: Repeat): Node;

    hasRetainLease(): boolean;
    clearRetainLease(): void;
    getRetainLease(): RetainLease | undefined;
    setRetainLease(value?: RetainLease): Node;

    hasRetry(): boolean;
    clearRetry(): void;
    getRetry(): Retry | undefined;
    setRetry(value?: Retry): Node;

    hasForDuration(): boolean;
    clearForDuration(): void;
    getForDuration(): ForDuration | undefined;
    setForDuration(value?: ForDuration): Node;

    hasBosdynDockState(): boolean;
    clearBosdynDockState(): void;
    getBosdynDockState(): BosdynDockState | undefined;
    setBosdynDockState(value?: BosdynDockState): Node;

    hasBosdynPowerRequest(): boolean;
    clearBosdynPowerRequest(): void;
    getBosdynPowerRequest(): BosdynPowerRequest | undefined;
    setBosdynPowerRequest(value?: BosdynPowerRequest): Node;

    hasBosdynRobotState(): boolean;
    clearBosdynRobotState(): void;
    getBosdynRobotState(): BosdynRobotState | undefined;
    setBosdynRobotState(value?: BosdynRobotState): Node;

    hasBosdynRobotCommand(): boolean;
    clearBosdynRobotCommand(): void;
    getBosdynRobotCommand(): BosdynRobotCommand | undefined;
    setBosdynRobotCommand(value?: BosdynRobotCommand): Node;

    hasRemoteGrpc(): boolean;
    clearRemoteGrpc(): void;
    getRemoteGrpc(): RemoteGrpc | undefined;
    setRemoteGrpc(value?: RemoteGrpc): Node;

    hasSleep(): boolean;
    clearSleep(): void;
    getSleep(): Sleep | undefined;
    setSleep(value?: Sleep): Node;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): Prompt | undefined;
    setPrompt(value?: Prompt): Node;

    hasSetBlackboard(): boolean;
    clearSetBlackboard(): void;
    getSetBlackboard(): SetBlackboard | undefined;
    setSetBlackboard(value?: SetBlackboard): Node;

    hasDateToBlackboard(): boolean;
    clearDateToBlackboard(): void;
    getDateToBlackboard(): DateToBlackboard | undefined;
    setDateToBlackboard(value?: DateToBlackboard): Node;

    hasDefineBlackboard(): boolean;
    clearDefineBlackboard(): void;
    getDefineBlackboard(): DefineBlackboard | undefined;
    setDefineBlackboard(value?: DefineBlackboard): Node;

    hasFormatBlackboard(): boolean;
    clearFormatBlackboard(): void;
    getFormatBlackboard(): FormatBlackboard | undefined;
    setFormatBlackboard(value?: FormatBlackboard): Node;

    hasConstantResult(): boolean;
    clearConstantResult(): void;
    getConstantResult(): ConstantResult | undefined;
    setConstantResult(value?: ConstantResult): Node;

    hasBosdynNavigateRoute(): boolean;
    clearBosdynNavigateRoute(): void;
    getBosdynNavigateRoute(): BosdynNavigateRoute | undefined;
    setBosdynNavigateRoute(value?: BosdynNavigateRoute): Node;

    hasBosdynNavigateTo(): boolean;
    clearBosdynNavigateTo(): void;
    getBosdynNavigateTo(): BosdynNavigateTo | undefined;
    setBosdynNavigateTo(value?: BosdynNavigateTo): Node;

    hasBosdynGraphNavState(): boolean;
    clearBosdynGraphNavState(): void;
    getBosdynGraphNavState(): BosdynGraphNavState | undefined;
    setBosdynGraphNavState(value?: BosdynGraphNavState): Node;

    hasBosdynGraphNavLocalize(): boolean;
    clearBosdynGraphNavLocalize(): void;
    getBosdynGraphNavLocalize(): BosdynGraphNavLocalize | undefined;
    setBosdynGraphNavLocalize(value?: BosdynGraphNavLocalize): Node;

    hasBosdynRecordEvent(): boolean;
    clearBosdynRecordEvent(): void;
    getBosdynRecordEvent(): BosdynRecordEvent | undefined;
    setBosdynRecordEvent(value?: BosdynRecordEvent): Node;

    hasSimpleParallel(): boolean;
    clearSimpleParallel(): void;
    getSimpleParallel(): SimpleParallel | undefined;
    setSimpleParallel(value?: SimpleParallel): Node;

    hasSpotCamPtz(): boolean;
    clearSpotCamPtz(): void;
    getSpotCamPtz(): SpotCamPtz | undefined;
    setSpotCamPtz(value?: SpotCamPtz): Node;

    hasSpotCamStoreMedia(): boolean;
    clearSpotCamStoreMedia(): void;
    getSpotCamStoreMedia(): SpotCamStoreMedia | undefined;
    setSpotCamStoreMedia(value?: SpotCamStoreMedia): Node;

    hasSpotCamLed(): boolean;
    clearSpotCamLed(): void;
    getSpotCamLed(): SpotCamLed | undefined;
    setSpotCamLed(value?: SpotCamLed): Node;

    hasSpotCamFocusState(): boolean;
    clearSpotCamFocusState(): void;
    getSpotCamFocusState(): SpotCamFocusState | undefined;
    setSpotCamFocusState(value?: SpotCamFocusState): Node;

    hasSpotCamResetAutofocus(): boolean;
    clearSpotCamResetAutofocus(): void;
    getSpotCamResetAutofocus(): SpotCamResetAutofocus | undefined;
    setSpotCamResetAutofocus(value?: SpotCamResetAutofocus): Node;

    hasSpotCamNamedPosition(): boolean;
    clearSpotCamNamedPosition(): void;
    getSpotCamNamedPosition(): SpotCamNamedPosition | undefined;
    setSpotCamNamedPosition(value?: SpotCamNamedPosition): Node;

    hasStoreMetadata(): boolean;
    clearStoreMetadata(): void;
    getStoreMetadata(): StoreMetadata | undefined;
    setStoreMetadata(value?: StoreMetadata): Node;

    hasSwitch(): boolean;
    clearSwitch(): void;
    getSwitch(): Switch | undefined;
    setSwitch(value?: Switch): Node;

    hasDataAcquisition(): boolean;
    clearDataAcquisition(): void;
    getDataAcquisition(): DataAcquisition | undefined;
    setDataAcquisition(value?: DataAcquisition): Node;

    hasDataAcquisitionOnInterruption(): boolean;
    clearDataAcquisitionOnInterruption(): void;
    getDataAcquisitionOnInterruption(): DataAcquisitionOnInterruption | undefined;
    setDataAcquisitionOnInterruption(value?: DataAcquisitionOnInterruption): Node;

    hasDock(): boolean;
    clearDock(): void;
    getDock(): Dock | undefined;
    setDock(value?: Dock): Node;

    hasRestartWhenPaused(): boolean;
    clearRestartWhenPaused(): void;
    getRestartWhenPaused(): RestartWhenPaused | undefined;
    setRestartWhenPaused(value?: RestartWhenPaused): Node;

    hasClearBehaviorFaults(): boolean;
    clearClearBehaviorFaults(): void;
    getClearBehaviorFaults(): ClearBehaviorFaults | undefined;
    setClearBehaviorFaults(value?: ClearBehaviorFaults): Node;

    hasBosdynGripperCameraParamsState(): boolean;
    clearBosdynGripperCameraParamsState(): void;
    getBosdynGripperCameraParamsState(): BosdynGripperCameraParamsState | undefined;
    setBosdynGripperCameraParamsState(value?: BosdynGripperCameraParamsState): Node;

    hasSetGripperCameraParams(): boolean;
    clearSetGripperCameraParams(): void;
    getSetGripperCameraParams(): SetGripperCameraParams | undefined;
    setSetGripperCameraParams(value?: SetGripperCameraParams): Node;

    hasParallelAnd(): boolean;
    clearParallelAnd(): void;
    getParallelAnd(): ParallelAnd | undefined;
    setParallelAnd(value?: ParallelAnd): Node;

    hasSetGraspOverride(): boolean;
    clearSetGraspOverride(): void;
    getSetGraspOverride(): SetGraspOverride | undefined;
    setSetGraspOverride(value?: SetGraspOverride): Node;

    hasExecuteChoreography(): boolean;
    clearExecuteChoreography(): void;
    getExecuteChoreography(): ExecuteChoreography | undefined;
    setExecuteChoreography(value?: ExecuteChoreography): Node;

    hasMissionUploadChoreography(): boolean;
    clearMissionUploadChoreography(): void;
    getMissionUploadChoreography(): MissionUploadChoreography | undefined;
    setMissionUploadChoreography(value?: MissionUploadChoreography): Node;

    hasCreateMissionText(): boolean;
    clearCreateMissionText(): void;
    getCreateMissionText(): CreateMissionText | undefined;
    setCreateMissionText(value?: CreateMissionText): Node;

    hasBosdynQueryStoredCaptures(): boolean;
    clearBosdynQueryStoredCaptures(): void;
    getBosdynQueryStoredCaptures(): BosdynQueryStoredCaptures | undefined;
    setBosdynQueryStoredCaptures(value?: BosdynQueryStoredCaptures): Node;
    clearParameterValuesList(): void;
    getParameterValuesList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
    setParameterValuesList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): Node;
    addParameterValues(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;
    clearOverridesList(): void;
    getOverridesList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
    setOverridesList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): Node;
    addOverrides(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;
    clearParametersList(): void;
    getParametersList(): Array<bosdyn_api_mission_util_pb.VariableDeclaration>;
    setParametersList(value: Array<bosdyn_api_mission_util_pb.VariableDeclaration>): Node;
    addParameters(value?: bosdyn_api_mission_util_pb.VariableDeclaration, index?: number): bosdyn_api_mission_util_pb.VariableDeclaration;

    getTypeCase(): Node.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        name: string,
        userData?: bosdyn_api_mission_util_pb.UserData.AsObject,
        referenceId: string,
        impl?: google_protobuf_any_pb.Any.AsObject,
        nodeReference: string,
        condition?: Condition.AsObject,
        sequence?: Sequence.AsObject,
        selector?: Selector.AsObject,
        repeat?: Repeat.AsObject,
        retainLease?: RetainLease.AsObject,
        retry?: Retry.AsObject,
        forDuration?: ForDuration.AsObject,
        bosdynDockState?: BosdynDockState.AsObject,
        bosdynPowerRequest?: BosdynPowerRequest.AsObject,
        bosdynRobotState?: BosdynRobotState.AsObject,
        bosdynRobotCommand?: BosdynRobotCommand.AsObject,
        remoteGrpc?: RemoteGrpc.AsObject,
        sleep?: Sleep.AsObject,
        prompt?: Prompt.AsObject,
        setBlackboard?: SetBlackboard.AsObject,
        dateToBlackboard?: DateToBlackboard.AsObject,
        defineBlackboard?: DefineBlackboard.AsObject,
        formatBlackboard?: FormatBlackboard.AsObject,
        constantResult?: ConstantResult.AsObject,
        bosdynNavigateRoute?: BosdynNavigateRoute.AsObject,
        bosdynNavigateTo?: BosdynNavigateTo.AsObject,
        bosdynGraphNavState?: BosdynGraphNavState.AsObject,
        bosdynGraphNavLocalize?: BosdynGraphNavLocalize.AsObject,
        bosdynRecordEvent?: BosdynRecordEvent.AsObject,
        simpleParallel?: SimpleParallel.AsObject,
        spotCamPtz?: SpotCamPtz.AsObject,
        spotCamStoreMedia?: SpotCamStoreMedia.AsObject,
        spotCamLed?: SpotCamLed.AsObject,
        spotCamFocusState?: SpotCamFocusState.AsObject,
        spotCamResetAutofocus?: SpotCamResetAutofocus.AsObject,
        spotCamNamedPosition?: SpotCamNamedPosition.AsObject,
        storeMetadata?: StoreMetadata.AsObject,
        pb_switch?: Switch.AsObject,
        dataAcquisition?: DataAcquisition.AsObject,
        dataAcquisitionOnInterruption?: DataAcquisitionOnInterruption.AsObject,
        dock?: Dock.AsObject,
        restartWhenPaused?: RestartWhenPaused.AsObject,
        clearBehaviorFaults?: ClearBehaviorFaults.AsObject,
        bosdynGripperCameraParamsState?: BosdynGripperCameraParamsState.AsObject,
        setGripperCameraParams?: SetGripperCameraParams.AsObject,
        parallelAnd?: ParallelAnd.AsObject,
        setGraspOverride?: SetGraspOverride.AsObject,
        executeChoreography?: ExecuteChoreography.AsObject,
        missionUploadChoreography?: MissionUploadChoreography.AsObject,
        createMissionText?: CreateMissionText.AsObject,
        bosdynQueryStoredCaptures?: BosdynQueryStoredCaptures.AsObject,
        parameterValuesList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
        overridesList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
        parametersList: Array<bosdyn_api_mission_util_pb.VariableDeclaration.AsObject>,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
        IMPL = 4,
        NODE_REFERENCE = 5,
        CONDITION = 9,
        SEQUENCE = 10,
        SELECTOR = 11,
        REPEAT = 12,
        RETAIN_LEASE = 13,
        RETRY = 14,
        FOR_DURATION = 15,
        BOSDYN_DOCK_STATE = 16,
        BOSDYN_POWER_REQUEST = 17,
        BOSDYN_ROBOT_STATE = 18,
        BOSDYN_ROBOT_COMMAND = 19,
        REMOTE_GRPC = 20,
        SLEEP = 21,
        PROMPT = 22,
        SET_BLACKBOARD = 23,
        DATE_TO_BLACKBOARD = 24,
        DEFINE_BLACKBOARD = 25,
        FORMAT_BLACKBOARD = 26,
        CONSTANT_RESULT = 27,
        BOSDYN_NAVIGATE_ROUTE = 29,
        BOSDYN_NAVIGATE_TO = 30,
        BOSDYN_GRAPH_NAV_STATE = 31,
        BOSDYN_GRAPH_NAV_LOCALIZE = 32,
        BOSDYN_RECORD_EVENT = 33,
        SIMPLE_PARALLEL = 34,
        SPOT_CAM_PTZ = 35,
        SPOT_CAM_STORE_MEDIA = 36,
        SPOT_CAM_LED = 37,
        SPOT_CAM_FOCUS_STATE = 58,
        SPOT_CAM_RESET_AUTOFOCUS = 38,
        SPOT_CAM_NAMED_POSITION = 63,
        STORE_METADATA = 39,
        SWITCH = 40,
        DATA_ACQUISITION = 41,
        DATA_ACQUISITION_ON_INTERRUPTION = 42,
        DOCK = 43,
        RESTART_WHEN_PAUSED = 49,
        CLEAR_BEHAVIOR_FAULTS = 50,
        BOSDYN_GRIPPER_CAMERA_PARAMS_STATE = 51,
        SET_GRIPPER_CAMERA_PARAMS = 52,
        PARALLEL_AND = 54,
        SET_GRASP_OVERRIDE = 55,
        EXECUTE_CHOREOGRAPHY = 56,
        MISSION_UPLOAD_CHOREOGRAPHY = 57,
        CREATE_MISSION_TEXT = 59,
        BOSDYN_QUERY_STORED_CAPTURES = 60,
    }

}

export class Sequence extends jspb.Message { 
    getAlwaysRestart(): boolean;
    setAlwaysRestart(value: boolean): Sequence;
    clearChildrenList(): void;
    getChildrenList(): Array<Node>;
    setChildrenList(value: Array<Node>): Sequence;
    addChildren(value?: Node, index?: number): Node;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sequence.AsObject;
    static toObject(includeInstance: boolean, msg: Sequence): Sequence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sequence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sequence;
    static deserializeBinaryFromReader(message: Sequence, reader: jspb.BinaryReader): Sequence;
}

export namespace Sequence {
    export type AsObject = {
        alwaysRestart: boolean,
        childrenList: Array<Node.AsObject>,
    }
}

export class Selector extends jspb.Message { 
    getAlwaysRestart(): boolean;
    setAlwaysRestart(value: boolean): Selector;
    clearChildrenList(): void;
    getChildrenList(): Array<Node>;
    setChildrenList(value: Array<Node>): Selector;
    addChildren(value?: Node, index?: number): Node;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Selector.AsObject;
    static toObject(includeInstance: boolean, msg: Selector): Selector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Selector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Selector;
    static deserializeBinaryFromReader(message: Selector, reader: jspb.BinaryReader): Selector;
}

export namespace Selector {
    export type AsObject = {
        alwaysRestart: boolean,
        childrenList: Array<Node.AsObject>,
    }
}

export class Switch extends jspb.Message { 

    hasPivotValue(): boolean;
    clearPivotValue(): void;
    getPivotValue(): bosdyn_api_mission_util_pb.Value | undefined;
    setPivotValue(value?: bosdyn_api_mission_util_pb.Value): Switch;
    getAlwaysRestart(): boolean;
    setAlwaysRestart(value: boolean): Switch;

    getIntChildrenMap(): jspb.Map<number, Node>;
    clearIntChildrenMap(): void;

    hasDefaultChild(): boolean;
    clearDefaultChild(): void;
    getDefaultChild(): Node | undefined;
    setDefaultChild(value?: Node): Switch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Switch.AsObject;
    static toObject(includeInstance: boolean, msg: Switch): Switch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Switch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Switch;
    static deserializeBinaryFromReader(message: Switch, reader: jspb.BinaryReader): Switch;
}

export namespace Switch {
    export type AsObject = {
        pivotValue?: bosdyn_api_mission_util_pb.Value.AsObject,
        alwaysRestart: boolean,

        intChildrenMap: Array<[number, Node.AsObject]>,
        defaultChild?: Node.AsObject,
    }
}

export class Repeat extends jspb.Message { 
    getMaxStarts(): number;
    setMaxStarts(value: number): Repeat;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): Repeat;
    getStartCounterStateName(): string;
    setStartCounterStateName(value: string): Repeat;
    getRespectChildFailure(): boolean;
    setRespectChildFailure(value: boolean): Repeat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Repeat.AsObject;
    static toObject(includeInstance: boolean, msg: Repeat): Repeat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Repeat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Repeat;
    static deserializeBinaryFromReader(message: Repeat, reader: jspb.BinaryReader): Repeat;
}

export namespace Repeat {
    export type AsObject = {
        maxStarts: number,
        child?: Node.AsObject,
        startCounterStateName: string,
        respectChildFailure: boolean,
    }
}

export class Retry extends jspb.Message { 
    getMaxAttempts(): number;
    setMaxAttempts(value: number): Retry;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): Retry;
    getAttemptCounterStateName(): string;
    setAttemptCounterStateName(value: string): Retry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Retry.AsObject;
    static toObject(includeInstance: boolean, msg: Retry): Retry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Retry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Retry;
    static deserializeBinaryFromReader(message: Retry, reader: jspb.BinaryReader): Retry;
}

export namespace Retry {
    export type AsObject = {
        maxAttempts: number,
        child?: Node.AsObject,
        attemptCounterStateName: string,
    }
}

export class ForDuration extends jspb.Message { 

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): ForDuration;

    hasDurationNameInBlackboard(): boolean;
    clearDurationNameInBlackboard(): void;
    getDurationNameInBlackboard(): string;
    setDurationNameInBlackboard(value: string): ForDuration;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): ForDuration;
    getTimeRemainingName(): string;
    setTimeRemainingName(value: string): ForDuration;

    hasTimeoutChild(): boolean;
    clearTimeoutChild(): void;
    getTimeoutChild(): Node | undefined;
    setTimeoutChild(value?: Node): ForDuration;

    getDurationTypeCase(): ForDuration.DurationTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForDuration.AsObject;
    static toObject(includeInstance: boolean, msg: ForDuration): ForDuration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForDuration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForDuration;
    static deserializeBinaryFromReader(message: ForDuration, reader: jspb.BinaryReader): ForDuration;
}

export namespace ForDuration {
    export type AsObject = {
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        durationNameInBlackboard: string,
        child?: Node.AsObject,
        timeRemainingName: string,
        timeoutChild?: Node.AsObject,
    }

    export enum DurationTypeCase {
        DURATION_TYPE_NOT_SET = 0,
        DURATION = 1,
        DURATION_NAME_IN_BLACKBOARD = 5,
    }

}

export class SimpleParallel extends jspb.Message { 

    hasPrimary(): boolean;
    clearPrimary(): void;
    getPrimary(): Node | undefined;
    setPrimary(value?: Node): SimpleParallel;

    hasSecondary(): boolean;
    clearSecondary(): void;
    getSecondary(): Node | undefined;
    setSecondary(value?: Node): SimpleParallel;
    getRunSecondaryNodeOnce(): boolean;
    setRunSecondaryNodeOnce(value: boolean): SimpleParallel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleParallel.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleParallel): SimpleParallel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleParallel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleParallel;
    static deserializeBinaryFromReader(message: SimpleParallel, reader: jspb.BinaryReader): SimpleParallel;
}

export namespace SimpleParallel {
    export type AsObject = {
        primary?: Node.AsObject,
        secondary?: Node.AsObject,
        runSecondaryNodeOnce: boolean,
    }
}

export class ParallelAnd extends jspb.Message { 
    clearChildrenList(): void;
    getChildrenList(): Array<Node>;
    setChildrenList(value: Array<Node>): ParallelAnd;
    addChildren(value?: Node, index?: number): Node;
    getFinishEveryNode(): boolean;
    setFinishEveryNode(value: boolean): ParallelAnd;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParallelAnd.AsObject;
    static toObject(includeInstance: boolean, msg: ParallelAnd): ParallelAnd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParallelAnd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParallelAnd;
    static deserializeBinaryFromReader(message: ParallelAnd, reader: jspb.BinaryReader): ParallelAnd;
}

export namespace ParallelAnd {
    export type AsObject = {
        childrenList: Array<Node.AsObject>,
        finishEveryNode: boolean,
    }
}

export class Condition extends jspb.Message { 

    hasLhs(): boolean;
    clearLhs(): void;
    getLhs(): Condition.Operand | undefined;
    setLhs(value?: Condition.Operand): Condition;

    hasRhs(): boolean;
    clearRhs(): void;
    getRhs(): Condition.Operand | undefined;
    setRhs(value?: Condition.Operand): Condition;
    getOperation(): Condition.Compare;
    setOperation(value: Condition.Compare): Condition;
    getHandleStaleness(): Condition.HandleStaleness;
    setHandleStaleness(value: Condition.HandleStaleness): Condition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
    export type AsObject = {
        lhs?: Condition.Operand.AsObject,
        rhs?: Condition.Operand.AsObject,
        operation: Condition.Compare,
        handleStaleness: Condition.HandleStaleness,
    }


    export class Operand extends jspb.Message { 

        hasVar(): boolean;
        clearVar(): void;
        getVar(): bosdyn_api_mission_util_pb.VariableDeclaration | undefined;
        setVar(value?: bosdyn_api_mission_util_pb.VariableDeclaration): Operand;

        hasConst(): boolean;
        clearConst(): void;
        getConst(): bosdyn_api_mission_util_pb.ConstantValue | undefined;
        setConst(value?: bosdyn_api_mission_util_pb.ConstantValue): Operand;

        getTypeCase(): Operand.TypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Operand.AsObject;
        static toObject(includeInstance: boolean, msg: Operand): Operand.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Operand, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Operand;
        static deserializeBinaryFromReader(message: Operand, reader: jspb.BinaryReader): Operand;
    }

    export namespace Operand {
        export type AsObject = {
            pb_var?: bosdyn_api_mission_util_pb.VariableDeclaration.AsObject,
            pb_const?: bosdyn_api_mission_util_pb.ConstantValue.AsObject,
        }

        export enum TypeCase {
            TYPE_NOT_SET = 0,
            VAR = 1,
            CONST = 2,
        }

    }


    export enum Compare {
    COMPARE_UNKNOWN = 0,
    COMPARE_EQ = 1,
    COMPARE_NE = 2,
    COMPARE_LT = 3,
    COMPARE_GT = 4,
    COMPARE_LE = 5,
    COMPARE_GE = 6,
    }

    export enum HandleStaleness {
    HANDLE_STALE_UNKNOWN = 0,
    HANDLE_STALE_READ_ANYWAY = 1,
    HANDLE_STALE_RUN_UNTIL_FRESH = 2,
    HANDLE_STALE_FAIL = 3,
    }

}

export class BosdynRobotState extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynRobotState;
    getHost(): string;
    setHost(value: string): BosdynRobotState;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): BosdynRobotState;
    getStateName(): string;
    setStateName(value: string): BosdynRobotState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynRobotState.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynRobotState): BosdynRobotState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynRobotState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynRobotState;
    static deserializeBinaryFromReader(message: BosdynRobotState, reader: jspb.BinaryReader): BosdynRobotState;
}

export namespace BosdynRobotState {
    export type AsObject = {
        serviceName: string,
        host: string,
        child?: Node.AsObject,
        stateName: string,
    }
}

export class BosdynDockState extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynDockState;
    getHost(): string;
    setHost(value: string): BosdynDockState;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): BosdynDockState;
    getStateName(): string;
    setStateName(value: string): BosdynDockState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynDockState.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynDockState): BosdynDockState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynDockState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynDockState;
    static deserializeBinaryFromReader(message: BosdynDockState, reader: jspb.BinaryReader): BosdynDockState;
}

export namespace BosdynDockState {
    export type AsObject = {
        serviceName: string,
        host: string,
        child?: Node.AsObject,
        stateName: string,
    }
}

export class BosdynRobotCommand extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynRobotCommand;
    getHost(): string;
    setHost(value: string): BosdynRobotCommand;

    hasCommand(): boolean;
    clearCommand(): void;
    getCommand(): bosdyn_api_robot_command_pb.RobotCommand | undefined;
    setCommand(value?: bosdyn_api_robot_command_pb.RobotCommand): BosdynRobotCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynRobotCommand.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynRobotCommand): BosdynRobotCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynRobotCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynRobotCommand;
    static deserializeBinaryFromReader(message: BosdynRobotCommand, reader: jspb.BinaryReader): BosdynRobotCommand;
}

export namespace BosdynRobotCommand {
    export type AsObject = {
        serviceName: string,
        host: string,
        command?: bosdyn_api_robot_command_pb.RobotCommand.AsObject,
    }
}

export class BosdynPowerRequest extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynPowerRequest;
    getHost(): string;
    setHost(value: string): BosdynPowerRequest;
    getRequest(): bosdyn_api_power_pb.PowerCommandRequest.Request;
    setRequest(value: bosdyn_api_power_pb.PowerCommandRequest.Request): BosdynPowerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynPowerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynPowerRequest): BosdynPowerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynPowerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynPowerRequest;
    static deserializeBinaryFromReader(message: BosdynPowerRequest, reader: jspb.BinaryReader): BosdynPowerRequest;
}

export namespace BosdynPowerRequest {
    export type AsObject = {
        serviceName: string,
        host: string,
        request: bosdyn_api_power_pb.PowerCommandRequest.Request,
    }
}

export class BosdynNavigateTo extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynNavigateTo;
    getHost(): string;
    setHost(value: string): BosdynNavigateTo;
    getDestinationWaypointId(): string;
    setDestinationWaypointId(value: string): BosdynNavigateTo;

    hasRouteGenParams(): boolean;
    clearRouteGenParams(): void;
    getRouteGenParams(): bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams | undefined;
    setRouteGenParams(value?: bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams): BosdynNavigateTo;

    hasTravelParams(): boolean;
    clearTravelParams(): void;
    getTravelParams(): bosdyn_api_graph_nav_graph_nav_pb.TravelParams | undefined;
    setTravelParams(value?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams): BosdynNavigateTo;
    getNavigationFeedbackResponseBlackboardKey(): string;
    setNavigationFeedbackResponseBlackboardKey(value: string): BosdynNavigateTo;
    getNavigateToResponseBlackboardKey(): string;
    setNavigateToResponseBlackboardKey(value: string): BosdynNavigateTo;
    getNavigateToRequestBlackboardKey(): string;
    setNavigateToRequestBlackboardKey(value: string): BosdynNavigateTo;
    getRouteBlockedBehavior(): bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.RouteBlockedBehavior;
    setRouteBlockedBehavior(value: bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.RouteBlockedBehavior): BosdynNavigateTo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynNavigateTo.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynNavigateTo): BosdynNavigateTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynNavigateTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynNavigateTo;
    static deserializeBinaryFromReader(message: BosdynNavigateTo, reader: jspb.BinaryReader): BosdynNavigateTo;
}

export namespace BosdynNavigateTo {
    export type AsObject = {
        serviceName: string,
        host: string,
        destinationWaypointId: string,
        routeGenParams?: bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.AsObject,
        travelParams?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.AsObject,
        navigationFeedbackResponseBlackboardKey: string,
        navigateToResponseBlackboardKey: string,
        navigateToRequestBlackboardKey: string,
        routeBlockedBehavior: bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.RouteBlockedBehavior,
    }
}

export class BosdynNavigateToAnchor extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynNavigateToAnchor;
    getHost(): string;
    setHost(value: string): BosdynNavigateToAnchor;

    hasSeedTformGoal(): boolean;
    clearSeedTformGoal(): void;
    getSeedTformGoal(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSeedTformGoal(value?: bosdyn_api_geometry_pb.SE3Pose): BosdynNavigateToAnchor;

    hasRouteGenParams(): boolean;
    clearRouteGenParams(): void;
    getRouteGenParams(): bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams | undefined;
    setRouteGenParams(value?: bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams): BosdynNavigateToAnchor;

    hasTravelParams(): boolean;
    clearTravelParams(): void;
    getTravelParams(): bosdyn_api_graph_nav_graph_nav_pb.TravelParams | undefined;
    setTravelParams(value?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams): BosdynNavigateToAnchor;
    getNavigationFeedbackResponseBlackboardKey(): string;
    setNavigationFeedbackResponseBlackboardKey(value: string): BosdynNavigateToAnchor;
    getNavigateToAnchorResponseBlackboardKey(): string;
    setNavigateToAnchorResponseBlackboardKey(value: string): BosdynNavigateToAnchor;
    getNavigateToAnchorRequestBlackboardKey(): string;
    setNavigateToAnchorRequestBlackboardKey(value: string): BosdynNavigateToAnchor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynNavigateToAnchor.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynNavigateToAnchor): BosdynNavigateToAnchor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynNavigateToAnchor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynNavigateToAnchor;
    static deserializeBinaryFromReader(message: BosdynNavigateToAnchor, reader: jspb.BinaryReader): BosdynNavigateToAnchor;
}

export namespace BosdynNavigateToAnchor {
    export type AsObject = {
        serviceName: string,
        host: string,
        seedTformGoal?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        routeGenParams?: bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.AsObject,
        travelParams?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.AsObject,
        navigationFeedbackResponseBlackboardKey: string,
        navigateToAnchorResponseBlackboardKey: string,
        navigateToAnchorRequestBlackboardKey: string,
    }
}

export class BosdynNavigateRoute extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynNavigateRoute;
    getHost(): string;
    setHost(value: string): BosdynNavigateRoute;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
    setRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): BosdynNavigateRoute;

    hasRouteFollowParams(): boolean;
    clearRouteFollowParams(): void;
    getRouteFollowParams(): bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams | undefined;
    setRouteFollowParams(value?: bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams): BosdynNavigateRoute;

    hasTravelParams(): boolean;
    clearTravelParams(): void;
    getTravelParams(): bosdyn_api_graph_nav_graph_nav_pb.TravelParams | undefined;
    setTravelParams(value?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams): BosdynNavigateRoute;
    getNavigationFeedbackResponseBlackboardKey(): string;
    setNavigationFeedbackResponseBlackboardKey(value: string): BosdynNavigateRoute;
    getNavigateRouteResponseBlackboardKey(): string;
    setNavigateRouteResponseBlackboardKey(value: string): BosdynNavigateRoute;
    getNavigateRouteRequestBlackboardKey(): string;
    setNavigateRouteRequestBlackboardKey(value: string): BosdynNavigateRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynNavigateRoute.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynNavigateRoute): BosdynNavigateRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynNavigateRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynNavigateRoute;
    static deserializeBinaryFromReader(message: BosdynNavigateRoute, reader: jspb.BinaryReader): BosdynNavigateRoute;
}

export namespace BosdynNavigateRoute {
    export type AsObject = {
        serviceName: string,
        host: string,
        route?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
        routeFollowParams?: bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.AsObject,
        travelParams?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.AsObject,
        navigationFeedbackResponseBlackboardKey: string,
        navigateRouteResponseBlackboardKey: string,
        navigateRouteRequestBlackboardKey: string,
    }
}

export class BosdynGraphNavState extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynGraphNavState;
    getHost(): string;
    setHost(value: string): BosdynGraphNavState;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): BosdynGraphNavState;
    getStateName(): string;
    setStateName(value: string): BosdynGraphNavState;
    getWaypointId(): string;
    setWaypointId(value: string): BosdynGraphNavState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynGraphNavState.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynGraphNavState): BosdynGraphNavState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynGraphNavState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynGraphNavState;
    static deserializeBinaryFromReader(message: BosdynGraphNavState, reader: jspb.BinaryReader): BosdynGraphNavState;
}

export namespace BosdynGraphNavState {
    export type AsObject = {
        serviceName: string,
        host: string,
        child?: Node.AsObject,
        stateName: string,
        waypointId: string,
    }
}

export class BosdynGraphNavLocalize extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynGraphNavLocalize;
    getHost(): string;
    setHost(value: string): BosdynGraphNavLocalize;

    hasLocalizationRequest(): boolean;
    clearLocalizationRequest(): void;
    getLocalizationRequest(): bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest | undefined;
    setLocalizationRequest(value?: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest): BosdynGraphNavLocalize;
    getAllowBadQuality(): boolean;
    setAllowBadQuality(value: boolean): BosdynGraphNavLocalize;
    getResponseBbKey(): string;
    setResponseBbKey(value: string): BosdynGraphNavLocalize;
    getLocalizationRequestBbKey(): string;
    setLocalizationRequestBbKey(value: string): BosdynGraphNavLocalize;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynGraphNavLocalize.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynGraphNavLocalize): BosdynGraphNavLocalize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynGraphNavLocalize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynGraphNavLocalize;
    static deserializeBinaryFromReader(message: BosdynGraphNavLocalize, reader: jspb.BinaryReader): BosdynGraphNavLocalize;
}

export namespace BosdynGraphNavLocalize {
    export type AsObject = {
        serviceName: string,
        host: string,
        localizationRequest?: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.AsObject,
        allowBadQuality: boolean,
        responseBbKey: string,
        localizationRequestBbKey: string,
    }
}

export class BosdynRecordEvent extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynRecordEvent;
    getHost(): string;
    setHost(value: string): BosdynRecordEvent;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): bosdyn_api_data_buffer_pb.Event | undefined;
    setEvent(value?: bosdyn_api_data_buffer_pb.Event): BosdynRecordEvent;
    getSucceedEarly(): boolean;
    setSucceedEarly(value: boolean): BosdynRecordEvent;

    getAdditionalParametersMap(): jspb.Map<string, bosdyn_api_mission_util_pb.Value>;
    clearAdditionalParametersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynRecordEvent.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynRecordEvent): BosdynRecordEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynRecordEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynRecordEvent;
    static deserializeBinaryFromReader(message: BosdynRecordEvent, reader: jspb.BinaryReader): BosdynRecordEvent;
}

export namespace BosdynRecordEvent {
    export type AsObject = {
        serviceName: string,
        host: string,
        event?: bosdyn_api_data_buffer_pb.Event.AsObject,
        succeedEarly: boolean,

        additionalParametersMap: Array<[string, bosdyn_api_mission_util_pb.Value.AsObject]>,
    }
}

export class RemoteGrpc extends jspb.Message { 
    getHost(): string;
    setHost(value: string): RemoteGrpc;
    getServiceName(): string;
    setServiceName(value: string): RemoteGrpc;
    getTimeout(): number;
    setTimeout(value: number): RemoteGrpc;
    clearLeaseResourcesList(): void;
    getLeaseResourcesList(): Array<string>;
    setLeaseResourcesList(value: Array<string>): RemoteGrpc;
    addLeaseResources(value: string, index?: number): string;
    clearInputsList(): void;
    getInputsList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
    setInputsList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): RemoteGrpc;
    addInputs(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;
    getGroupNameFormat(): string;
    setGroupNameFormat(value: string): RemoteGrpc;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setParams(value?: bosdyn_api_service_customization_pb.DictParam): RemoteGrpc;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteGrpc.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteGrpc): RemoteGrpc.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteGrpc, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteGrpc;
    static deserializeBinaryFromReader(message: RemoteGrpc, reader: jspb.BinaryReader): RemoteGrpc;
}

export namespace RemoteGrpc {
    export type AsObject = {
        host: string,
        serviceName: string,
        timeout: number,
        leaseResourcesList: Array<string>,
        inputsList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
        groupNameFormat: string,
        params?: bosdyn_api_service_customization_pb.DictParam.AsObject,
    }
}

export class Sleep extends jspb.Message { 

    hasSeconds(): boolean;
    clearSeconds(): void;
    getSeconds(): number;
    setSeconds(value: number): Sleep;

    hasDurationNameInBlackboard(): boolean;
    clearDurationNameInBlackboard(): void;
    getDurationNameInBlackboard(): string;
    setDurationNameInBlackboard(value: string): Sleep;
    getRestartAfterStop(): boolean;
    setRestartAfterStop(value: boolean): Sleep;

    getDurationCase(): Sleep.DurationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sleep.AsObject;
    static toObject(includeInstance: boolean, msg: Sleep): Sleep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sleep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sleep;
    static deserializeBinaryFromReader(message: Sleep, reader: jspb.BinaryReader): Sleep;
}

export namespace Sleep {
    export type AsObject = {
        seconds: number,
        durationNameInBlackboard: string,
        restartAfterStop: boolean,
    }

    export enum DurationCase {
        DURATION_NOT_SET = 0,
        SECONDS = 1,
        DURATION_NAME_IN_BLACKBOARD = 5,
    }

}

export class ExecuteChoreography extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): ExecuteChoreography;
    getHost(): string;
    setHost(value: string): ExecuteChoreography;
    getSequenceName(): string;
    setSequenceName(value: string): ExecuteChoreography;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteChoreography.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteChoreography): ExecuteChoreography.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteChoreography, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteChoreography;
    static deserializeBinaryFromReader(message: ExecuteChoreography, reader: jspb.BinaryReader): ExecuteChoreography;
}

export namespace ExecuteChoreography {
    export type AsObject = {
        serviceName: string,
        host: string,
        sequenceName: string,
    }
}

export class MissionUploadChoreography extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): MissionUploadChoreography;
    getHost(): string;
    setHost(value: string): MissionUploadChoreography;
    clearChoreographySequencesList(): void;
    getChoreographySequencesList(): Array<bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence>;
    setChoreographySequencesList(value: Array<bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence>): MissionUploadChoreography;
    addChoreographySequences(value?: bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence, index?: number): bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence;
    clearAnimatedMovesList(): void;
    getAnimatedMovesList(): Array<bosdyn_api_spot_choreography_sequence_pb.Animation>;
    setAnimatedMovesList(value: Array<bosdyn_api_spot_choreography_sequence_pb.Animation>): MissionUploadChoreography;
    addAnimatedMoves(value?: bosdyn_api_spot_choreography_sequence_pb.Animation, index?: number): bosdyn_api_spot_choreography_sequence_pb.Animation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MissionUploadChoreography.AsObject;
    static toObject(includeInstance: boolean, msg: MissionUploadChoreography): MissionUploadChoreography.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MissionUploadChoreography, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MissionUploadChoreography;
    static deserializeBinaryFromReader(message: MissionUploadChoreography, reader: jspb.BinaryReader): MissionUploadChoreography;
}

export namespace MissionUploadChoreography {
    export type AsObject = {
        serviceName: string,
        host: string,
        choreographySequencesList: Array<bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence.AsObject>,
        animatedMovesList: Array<bosdyn_api_spot_choreography_sequence_pb.Animation.AsObject>,
    }
}

export class Prompt extends jspb.Message { 
    getAlwaysReprompt(): boolean;
    setAlwaysReprompt(value: boolean): Prompt;
    getText(): string;
    setText(value: string): Prompt;
    getSource(): string;
    setSource(value: string): Prompt;
    clearOptionsList(): void;
    getOptionsList(): Array<Prompt.Option>;
    setOptionsList(value: Array<Prompt.Option>): Prompt;
    addOptions(value?: Prompt.Option, index?: number): Prompt.Option;

    hasOptionsList(): boolean;
    clearOptionsList(): void;
    getOptionsList(): Prompt.OptionsList | undefined;
    setOptionsList(value?: Prompt.OptionsList): Prompt;

    hasOptionsListInBlackboard(): boolean;
    clearOptionsListInBlackboard(): void;
    getOptionsListInBlackboard(): string;
    setOptionsListInBlackboard(value: string): Prompt;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): Prompt;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): Prompt;
    getForAutonomousProcessing(): boolean;
    setForAutonomousProcessing(value: boolean): Prompt;

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): bosdyn_api_alerts_pb.AlertData.SeverityLevel;
    setSeverity(value: bosdyn_api_alerts_pb.AlertData.SeverityLevel): Prompt;

    hasSeverityInBlackboard(): boolean;
    clearSeverityInBlackboard(): void;
    getSeverityInBlackboard(): string;
    setSeverityInBlackboard(value: string): Prompt;
    getQuestionNameInBlackboard(): string;
    setQuestionNameInBlackboard(value: string): Prompt;

    getAnswerSpecCase(): Prompt.AnswerSpecCase;
    getSeveritySpecCase(): Prompt.SeveritySpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prompt.AsObject;
    static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prompt;
    static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
}

export namespace Prompt {
    export type AsObject = {
        alwaysReprompt: boolean,
        text: string,
        source: string,
        optionsList: Array<Prompt.Option.AsObject>,
        optionsList?: Prompt.OptionsList.AsObject,
        optionsListInBlackboard: string,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
        child?: Node.AsObject,
        forAutonomousProcessing: boolean,
        severity: bosdyn_api_alerts_pb.AlertData.SeverityLevel,
        severityInBlackboard: string,
        questionNameInBlackboard: string,
    }


    export class Option extends jspb.Message { 
        getText(): string;
        setText(value: string): Option;
        getAnswerCode(): number;
        setAnswerCode(value: number): Option;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Option.AsObject;
        static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Option;
        static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
    }

    export namespace Option {
        export type AsObject = {
            text: string,
            answerCode: number,
        }
    }

    export class OptionsList extends jspb.Message { 
        clearOptionsList(): void;
        getOptionsList(): Array<Prompt.Option>;
        setOptionsList(value: Array<Prompt.Option>): OptionsList;
        addOptions(value?: Prompt.Option, index?: number): Prompt.Option;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OptionsList.AsObject;
        static toObject(includeInstance: boolean, msg: OptionsList): OptionsList.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OptionsList, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OptionsList;
        static deserializeBinaryFromReader(message: OptionsList, reader: jspb.BinaryReader): OptionsList;
    }

    export namespace OptionsList {
        export type AsObject = {
            optionsList: Array<Prompt.Option.AsObject>,
        }
    }


    export enum AnswerSpecCase {
        ANSWER_SPEC_NOT_SET = 0,
        OPTIONS_LIST = 9,
        OPTIONS_LIST_IN_BLACKBOARD = 11,
        CUSTOM_PARAMS = 10,
    }

    export enum SeveritySpecCase {
        SEVERITY_SPEC_NOT_SET = 0,
        SEVERITY = 7,
        SEVERITY_IN_BLACKBOARD = 12,
    }

}

export class BosdynGripperCameraParamsState extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynGripperCameraParamsState;
    getHost(): string;
    setHost(value: string): BosdynGripperCameraParamsState;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): BosdynGripperCameraParamsState;
    getStateName(): string;
    setStateName(value: string): BosdynGripperCameraParamsState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynGripperCameraParamsState.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynGripperCameraParamsState): BosdynGripperCameraParamsState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynGripperCameraParamsState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynGripperCameraParamsState;
    static deserializeBinaryFromReader(message: BosdynGripperCameraParamsState, reader: jspb.BinaryReader): BosdynGripperCameraParamsState;
}

export namespace BosdynGripperCameraParamsState {
    export type AsObject = {
        serviceName: string,
        host: string,
        child?: Node.AsObject,
        stateName: string,
    }
}

export class SetGripperCameraParams extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SetGripperCameraParams;
    getHost(): string;
    setHost(value: string): SetGripperCameraParams;

    hasParamsInBlackboardKey(): boolean;
    clearParamsInBlackboardKey(): void;
    getParamsInBlackboardKey(): string;
    setParamsInBlackboardKey(value: string): SetGripperCameraParams;

    hasNewParams(): boolean;
    clearNewParams(): void;
    getNewParams(): bosdyn_api_gripper_camera_param_pb.GripperCameraParams | undefined;
    setNewParams(value?: bosdyn_api_gripper_camera_param_pb.GripperCameraParams): SetGripperCameraParams;

    getParamsCase(): SetGripperCameraParams.ParamsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGripperCameraParams.AsObject;
    static toObject(includeInstance: boolean, msg: SetGripperCameraParams): SetGripperCameraParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGripperCameraParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGripperCameraParams;
    static deserializeBinaryFromReader(message: SetGripperCameraParams, reader: jspb.BinaryReader): SetGripperCameraParams;
}

export namespace SetGripperCameraParams {
    export type AsObject = {
        serviceName: string,
        host: string,
        paramsInBlackboardKey: string,
        newParams?: bosdyn_api_gripper_camera_param_pb.GripperCameraParams.AsObject,
    }

    export enum ParamsCase {
        PARAMS_NOT_SET = 0,
        PARAMS_IN_BLACKBOARD_KEY = 3,
        NEW_PARAMS = 4,
    }

}

export class SetGraspOverride extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SetGraspOverride;
    getHost(): string;
    setHost(value: string): SetGraspOverride;

    hasGraspOverrideRequest(): boolean;
    clearGraspOverrideRequest(): void;
    getGraspOverrideRequest(): bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest | undefined;
    setGraspOverrideRequest(value?: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest): SetGraspOverride;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGraspOverride.AsObject;
    static toObject(includeInstance: boolean, msg: SetGraspOverride): SetGraspOverride.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGraspOverride, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGraspOverride;
    static deserializeBinaryFromReader(message: SetGraspOverride, reader: jspb.BinaryReader): SetGraspOverride;
}

export namespace SetGraspOverride {
    export type AsObject = {
        serviceName: string,
        host: string,
        graspOverrideRequest?: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest.AsObject,
    }
}

export class SpotCamPtz extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SpotCamPtz;
    getHost(): string;
    setHost(value: string): SpotCamPtz;

    hasPtzPosition(): boolean;
    clearPtzPosition(): void;
    getPtzPosition(): bosdyn_api_spot_cam_ptz_pb.PtzPosition | undefined;
    setPtzPosition(value?: bosdyn_api_spot_cam_ptz_pb.PtzPosition): SpotCamPtz;

    hasAdjustParameters(): boolean;
    clearAdjustParameters(): void;
    getAdjustParameters(): SpotCamPtz.AdjustParameters | undefined;
    setAdjustParameters(value?: SpotCamPtz.AdjustParameters): SpotCamPtz;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCamPtz.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCamPtz): SpotCamPtz.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCamPtz, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCamPtz;
    static deserializeBinaryFromReader(message: SpotCamPtz, reader: jspb.BinaryReader): SpotCamPtz;
}

export namespace SpotCamPtz {
    export type AsObject = {
        serviceName: string,
        host: string,
        ptzPosition?: bosdyn_api_spot_cam_ptz_pb.PtzPosition.AsObject,
        adjustParameters?: SpotCamPtz.AdjustParameters.AsObject,
    }


    export class AdjustParameters extends jspb.Message { 
        getLocalizationVarname(): string;
        setLocalizationVarname(value: string): AdjustParameters;
        getWaypointId(): string;
        setWaypointId(value: string): AdjustParameters;

        hasWaypointTformBody(): boolean;
        clearWaypointTformBody(): void;
        getWaypointTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setWaypointTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): AdjustParameters;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AdjustParameters.AsObject;
        static toObject(includeInstance: boolean, msg: AdjustParameters): AdjustParameters.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AdjustParameters, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AdjustParameters;
        static deserializeBinaryFromReader(message: AdjustParameters, reader: jspb.BinaryReader): AdjustParameters;
    }

    export namespace AdjustParameters {
        export type AsObject = {
            localizationVarname: string,
            waypointId: string,
            waypointTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }

}

export class SpotCamNamedPosition extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SpotCamNamedPosition;
    getHost(): string;
    setHost(value: string): SpotCamNamedPosition;
    getPtzName(): string;
    setPtzName(value: string): SpotCamNamedPosition;
    getNamedPosition(): string;
    setNamedPosition(value: string): SpotCamNamedPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCamNamedPosition.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCamNamedPosition): SpotCamNamedPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCamNamedPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCamNamedPosition;
    static deserializeBinaryFromReader(message: SpotCamNamedPosition, reader: jspb.BinaryReader): SpotCamNamedPosition;
}

export namespace SpotCamNamedPosition {
    export type AsObject = {
        serviceName: string,
        host: string,
        ptzName: string,
        namedPosition: string,
    }
}

export class SpotCamStoreMedia extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SpotCamStoreMedia;
    getHost(): string;
    setHost(value: string): SpotCamStoreMedia;

    hasCamera(): boolean;
    clearCamera(): void;
    getCamera(): bosdyn_api_spot_cam_camera_pb.Camera | undefined;
    setCamera(value?: bosdyn_api_spot_cam_camera_pb.Camera): SpotCamStoreMedia;
    getType(): bosdyn_api_spot_cam_logging_pb.Logpoint.RecordType;
    setType(value: bosdyn_api_spot_cam_logging_pb.Logpoint.RecordType): SpotCamStoreMedia;
    getTag(): string;
    setTag(value: string): SpotCamStoreMedia;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCamStoreMedia.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCamStoreMedia): SpotCamStoreMedia.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCamStoreMedia, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCamStoreMedia;
    static deserializeBinaryFromReader(message: SpotCamStoreMedia, reader: jspb.BinaryReader): SpotCamStoreMedia;
}

export namespace SpotCamStoreMedia {
    export type AsObject = {
        serviceName: string,
        host: string,
        camera?: bosdyn_api_spot_cam_camera_pb.Camera.AsObject,
        type: bosdyn_api_spot_cam_logging_pb.Logpoint.RecordType,
        tag: string,
    }
}

export class SpotCamLed extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SpotCamLed;
    getHost(): string;
    setHost(value: string): SpotCamLed;

    getBrightnessesMap(): jspb.Map<number, number>;
    clearBrightnessesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCamLed.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCamLed): SpotCamLed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCamLed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCamLed;
    static deserializeBinaryFromReader(message: SpotCamLed, reader: jspb.BinaryReader): SpotCamLed;
}

export namespace SpotCamLed {
    export type AsObject = {
        serviceName: string,
        host: string,

        brightnessesMap: Array<[number, number]>,
    }
}

export class SpotCamFocusState extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SpotCamFocusState;
    getHost(): string;
    setHost(value: string): SpotCamFocusState;

    hasFocusState(): boolean;
    clearFocusState(): void;
    getFocusState(): bosdyn_api_spot_cam_ptz_pb.PtzFocusState | undefined;
    setFocusState(value?: bosdyn_api_spot_cam_ptz_pb.PtzFocusState): SpotCamFocusState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCamFocusState.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCamFocusState): SpotCamFocusState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCamFocusState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCamFocusState;
    static deserializeBinaryFromReader(message: SpotCamFocusState, reader: jspb.BinaryReader): SpotCamFocusState;
}

export namespace SpotCamFocusState {
    export type AsObject = {
        serviceName: string,
        host: string,
        focusState?: bosdyn_api_spot_cam_ptz_pb.PtzFocusState.AsObject,
    }
}

export class SpotCamResetAutofocus extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): SpotCamResetAutofocus;
    getHost(): string;
    setHost(value: string): SpotCamResetAutofocus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCamResetAutofocus.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCamResetAutofocus): SpotCamResetAutofocus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCamResetAutofocus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCamResetAutofocus;
    static deserializeBinaryFromReader(message: SpotCamResetAutofocus, reader: jspb.BinaryReader): SpotCamResetAutofocus;
}

export namespace SpotCamResetAutofocus {
    export type AsObject = {
        serviceName: string,
        host: string,
    }
}

export class Dock extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): Dock;
    getHost(): string;
    setHost(value: string): Dock;

    hasDockingStationId(): boolean;
    clearDockingStationId(): void;
    getDockingStationId(): number;
    setDockingStationId(value: number): Dock;

    hasDockingStationIdBlackboardKey(): boolean;
    clearDockingStationIdBlackboardKey(): void;
    getDockingStationIdBlackboardKey(): string;
    setDockingStationIdBlackboardKey(value: string): Dock;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): Dock;
    getCommandStatusName(): string;
    setCommandStatusName(value: string): Dock;
    getFeedbackStatusName(): string;
    setFeedbackStatusName(value: string): Dock;
    getPrepPoseBehavior(): bosdyn_api_docking_docking_pb.PrepPoseBehavior;
    setPrepPoseBehavior(value: bosdyn_api_docking_docking_pb.PrepPoseBehavior): Dock;
    getDockingCommandFeedbackResponseBlackboardKey(): string;
    setDockingCommandFeedbackResponseBlackboardKey(value: string): Dock;
    getDockingCommandResponseBlackboardKey(): string;
    setDockingCommandResponseBlackboardKey(value: string): Dock;
    getRequireFiducial(): boolean;
    setRequireFiducial(value: boolean): Dock;

    getIdCase(): Dock.IdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dock.AsObject;
    static toObject(includeInstance: boolean, msg: Dock): Dock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dock;
    static deserializeBinaryFromReader(message: Dock, reader: jspb.BinaryReader): Dock;
}

export namespace Dock {
    export type AsObject = {
        serviceName: string,
        host: string,
        dockingStationId: number,
        dockingStationIdBlackboardKey: string,
        child?: Node.AsObject,
        commandStatusName: string,
        feedbackStatusName: string,
        prepPoseBehavior: bosdyn_api_docking_docking_pb.PrepPoseBehavior,
        dockingCommandFeedbackResponseBlackboardKey: string,
        dockingCommandResponseBlackboardKey: string,
        requireFiducial: boolean,
    }

    export enum IdCase {
        ID_NOT_SET = 0,
        DOCKING_STATION_ID = 3,
        DOCKING_STATION_ID_BLACKBOARD_KEY = 11,
    }

}

export class StoreMetadata extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): StoreMetadata;
    getHost(): string;
    setHost(value: string): StoreMetadata;
    getAcquireDataRequestName(): string;
    setAcquireDataRequestName(value: string): StoreMetadata;

    hasMetadataName(): boolean;
    clearMetadataName(): void;
    getMetadataName(): string;
    setMetadataName(value: string): StoreMetadata;

    hasMetadataJson(): boolean;
    clearMetadataJson(): void;
    getMetadataJson(): google_protobuf_struct_pb.Struct | undefined;
    setMetadataJson(value?: google_protobuf_struct_pb.Struct): StoreMetadata;
    getMetadataChannel(): string;
    setMetadataChannel(value: string): StoreMetadata;

    getDataCase(): StoreMetadata.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StoreMetadata): StoreMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreMetadata;
    static deserializeBinaryFromReader(message: StoreMetadata, reader: jspb.BinaryReader): StoreMetadata;
}

export namespace StoreMetadata {
    export type AsObject = {
        serviceName: string,
        host: string,
        acquireDataRequestName: string,
        metadataName: string,
        metadataJson?: google_protobuf_struct_pb.Struct.AsObject,
        metadataChannel: string,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        METADATA_NAME = 5,
        METADATA_JSON = 7,
    }

}

export class DataAcquisition extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): DataAcquisition;
    getHost(): string;
    setHost(value: string): DataAcquisition;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): bosdyn_api_data_acquisition_pb.AcquireDataRequest | undefined;
    setRequest(value?: bosdyn_api_data_acquisition_pb.AcquireDataRequest): DataAcquisition;
    getCompletionBehavior(): DataAcquisition.CompletionBehavior;
    setCompletionBehavior(value: DataAcquisition.CompletionBehavior): DataAcquisition;
    getGroupNameFormat(): string;
    setGroupNameFormat(value: string): DataAcquisition;
    getRequestNameInBlackboard(): string;
    setRequestNameInBlackboard(value: string): DataAcquisition;
    getMetadataNameInBlackboard(): string;
    setMetadataNameInBlackboard(value: string): DataAcquisition;
    getActionNameFormat(): string;
    setActionNameFormat(value: string): DataAcquisition;
    getDisableCancelOnPauseOrStop(): boolean;
    setDisableCancelOnPauseOrStop(value: boolean): DataAcquisition;
    getFormatMetadata(): boolean;
    setFormatMetadata(value: boolean): DataAcquisition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataAcquisition.AsObject;
    static toObject(includeInstance: boolean, msg: DataAcquisition): DataAcquisition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataAcquisition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataAcquisition;
    static deserializeBinaryFromReader(message: DataAcquisition, reader: jspb.BinaryReader): DataAcquisition;
}

export namespace DataAcquisition {
    export type AsObject = {
        serviceName: string,
        host: string,
        request?: bosdyn_api_data_acquisition_pb.AcquireDataRequest.AsObject,
        completionBehavior: DataAcquisition.CompletionBehavior,
        groupNameFormat: string,
        requestNameInBlackboard: string,
        metadataNameInBlackboard: string,
        actionNameFormat: string,
        disableCancelOnPauseOrStop: boolean,
        formatMetadata: boolean,
    }

    export enum CompletionBehavior {
    COMPLETE_UNKNOWN = 0,
    COMPLETE_AFTER_SAVED = 1,
    COMPLETE_AFTER_ACQUIRED = 2,
    }

}

export class RetainLease extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): RetainLease;
    getHost(): string;
    setHost(value: string): RetainLease;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetainLease.AsObject;
    static toObject(includeInstance: boolean, msg: RetainLease): RetainLease.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetainLease, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetainLease;
    static deserializeBinaryFromReader(message: RetainLease, reader: jspb.BinaryReader): RetainLease;
}

export namespace RetainLease {
    export type AsObject = {
        serviceName: string,
        host: string,
    }
}

export class DefineBlackboard extends jspb.Message { 
    clearBlackboardVariablesList(): void;
    getBlackboardVariablesList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
    setBlackboardVariablesList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): DefineBlackboard;
    addBlackboardVariables(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): DefineBlackboard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefineBlackboard.AsObject;
    static toObject(includeInstance: boolean, msg: DefineBlackboard): DefineBlackboard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefineBlackboard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefineBlackboard;
    static deserializeBinaryFromReader(message: DefineBlackboard, reader: jspb.BinaryReader): DefineBlackboard;
}

export namespace DefineBlackboard {
    export type AsObject = {
        blackboardVariablesList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
        child?: Node.AsObject,
    }
}

export class SetBlackboard extends jspb.Message { 
    clearBlackboardVariablesList(): void;
    getBlackboardVariablesList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
    setBlackboardVariablesList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): SetBlackboard;
    addBlackboardVariables(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetBlackboard.AsObject;
    static toObject(includeInstance: boolean, msg: SetBlackboard): SetBlackboard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetBlackboard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetBlackboard;
    static deserializeBinaryFromReader(message: SetBlackboard, reader: jspb.BinaryReader): SetBlackboard;
}

export namespace SetBlackboard {
    export type AsObject = {
        blackboardVariablesList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
    }
}

export class FormatBlackboard extends jspb.Message { 
    getKey(): string;
    setKey(value: string): FormatBlackboard;
    getFormat(): string;
    setFormat(value: string): FormatBlackboard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FormatBlackboard.AsObject;
    static toObject(includeInstance: boolean, msg: FormatBlackboard): FormatBlackboard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FormatBlackboard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FormatBlackboard;
    static deserializeBinaryFromReader(message: FormatBlackboard, reader: jspb.BinaryReader): FormatBlackboard;
}

export namespace FormatBlackboard {
    export type AsObject = {
        key: string,
        format: string,
    }
}

export class DateToBlackboard extends jspb.Message { 
    getKey(): string;
    setKey(value: string): DateToBlackboard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateToBlackboard.AsObject;
    static toObject(includeInstance: boolean, msg: DateToBlackboard): DateToBlackboard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateToBlackboard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateToBlackboard;
    static deserializeBinaryFromReader(message: DateToBlackboard, reader: jspb.BinaryReader): DateToBlackboard;
}

export namespace DateToBlackboard {
    export type AsObject = {
        key: string,
    }
}

export class BosdynQueryStoredCaptures extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): BosdynQueryStoredCaptures;
    getHost(): string;
    setHost(value: string): BosdynQueryStoredCaptures;
    getKey(): string;
    setKey(value: string): BosdynQueryStoredCaptures;

    hasQueryParams(): boolean;
    clearQueryParams(): void;
    getQueryParams(): bosdyn_api_data_acquisition_store_pb.QueryParameters | undefined;
    setQueryParams(value?: bosdyn_api_data_acquisition_store_pb.QueryParameters): BosdynQueryStoredCaptures;
    clearCaptureActionIdsFormatList(): void;
    getCaptureActionIdsFormatList(): Array<BosdynQueryStoredCaptures.CaptureActionIdFormat>;
    setCaptureActionIdsFormatList(value: Array<BosdynQueryStoredCaptures.CaptureActionIdFormat>): BosdynQueryStoredCaptures;
    addCaptureActionIdsFormat(value?: BosdynQueryStoredCaptures.CaptureActionIdFormat, index?: number): BosdynQueryStoredCaptures.CaptureActionIdFormat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BosdynQueryStoredCaptures.AsObject;
    static toObject(includeInstance: boolean, msg: BosdynQueryStoredCaptures): BosdynQueryStoredCaptures.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BosdynQueryStoredCaptures, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BosdynQueryStoredCaptures;
    static deserializeBinaryFromReader(message: BosdynQueryStoredCaptures, reader: jspb.BinaryReader): BosdynQueryStoredCaptures;
}

export namespace BosdynQueryStoredCaptures {
    export type AsObject = {
        serviceName: string,
        host: string,
        key: string,
        queryParams?: bosdyn_api_data_acquisition_store_pb.QueryParameters.AsObject,
        captureActionIdsFormatList: Array<BosdynQueryStoredCaptures.CaptureActionIdFormat.AsObject>,
    }


    export class CaptureActionIdFormat extends jspb.Message { 
        getActionNameFormat(): string;
        setActionNameFormat(value: string): CaptureActionIdFormat;
        getGroupNameFormat(): string;
        setGroupNameFormat(value: string): CaptureActionIdFormat;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CaptureActionIdFormat.AsObject;
        static toObject(includeInstance: boolean, msg: CaptureActionIdFormat): CaptureActionIdFormat.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CaptureActionIdFormat, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CaptureActionIdFormat;
        static deserializeBinaryFromReader(message: CaptureActionIdFormat, reader: jspb.BinaryReader): CaptureActionIdFormat;
    }

    export namespace CaptureActionIdFormat {
        export type AsObject = {
            actionNameFormat: string,
            groupNameFormat: string,
        }
    }

}

export class ConstantResult extends jspb.Message { 
    getResult(): bosdyn_api_mission_util_pb.Result;
    setResult(value: bosdyn_api_mission_util_pb.Result): ConstantResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstantResult.AsObject;
    static toObject(includeInstance: boolean, msg: ConstantResult): ConstantResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstantResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstantResult;
    static deserializeBinaryFromReader(message: ConstantResult, reader: jspb.BinaryReader): ConstantResult;
}

export namespace ConstantResult {
    export type AsObject = {
        result: bosdyn_api_mission_util_pb.Result,
    }
}

export class RestartWhenPaused extends jspb.Message { 

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): RestartWhenPaused;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartWhenPaused.AsObject;
    static toObject(includeInstance: boolean, msg: RestartWhenPaused): RestartWhenPaused.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartWhenPaused, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartWhenPaused;
    static deserializeBinaryFromReader(message: RestartWhenPaused, reader: jspb.BinaryReader): RestartWhenPaused;
}

export namespace RestartWhenPaused {
    export type AsObject = {
        child?: Node.AsObject,
    }
}

export class DataAcquisitionOnInterruption extends jspb.Message { 

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): DataAcquisitionOnInterruption;

    hasRequestWhenInterrupted(): boolean;
    clearRequestWhenInterrupted(): void;
    getRequestWhenInterrupted(): DataAcquisition | undefined;
    setRequestWhenInterrupted(value?: DataAcquisition): DataAcquisitionOnInterruption;

    hasPauseMissionMetadata(): boolean;
    clearPauseMissionMetadata(): void;
    getPauseMissionMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setPauseMissionMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasRestartMissionMetadata(): boolean;
    clearRestartMissionMetadata(): void;
    getRestartMissionMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setRestartMissionMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasLoadMissionMetadata(): boolean;
    clearLoadMissionMetadata(): void;
    getLoadMissionMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setLoadMissionMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasStopMissionMetadata(): boolean;
    clearStopMissionMetadata(): void;
    getStopMissionMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setStopMissionMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasLeaseUseErrorMetadata(): boolean;
    clearLeaseUseErrorMetadata(): void;
    getLeaseUseErrorMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setLeaseUseErrorMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasPlayMissionTimeoutMetadata(): boolean;
    clearPlayMissionTimeoutMetadata(): void;
    getPlayMissionTimeoutMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setPlayMissionTimeoutMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasChildNodeErrorMetadata(): boolean;
    clearChildNodeErrorMetadata(): void;
    getChildNodeErrorMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setChildNodeErrorMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasChildNodeExceptionMetadata(): boolean;
    clearChildNodeExceptionMetadata(): void;
    getChildNodeExceptionMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setChildNodeExceptionMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;

    hasDefaultMetadata(): boolean;
    clearDefaultMetadata(): void;
    getDefaultMetadata(): bosdyn_api_data_acquisition_pb.Metadata | undefined;
    setDefaultMetadata(value?: bosdyn_api_data_acquisition_pb.Metadata): DataAcquisitionOnInterruption;
    clearKeysForLeaseUseErrorMessageList(): void;
    getKeysForLeaseUseErrorMessageList(): Array<string>;
    setKeysForLeaseUseErrorMessageList(value: Array<string>): DataAcquisitionOnInterruption;
    addKeysForLeaseUseErrorMessage(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataAcquisitionOnInterruption.AsObject;
    static toObject(includeInstance: boolean, msg: DataAcquisitionOnInterruption): DataAcquisitionOnInterruption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataAcquisitionOnInterruption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataAcquisitionOnInterruption;
    static deserializeBinaryFromReader(message: DataAcquisitionOnInterruption, reader: jspb.BinaryReader): DataAcquisitionOnInterruption;
}

export namespace DataAcquisitionOnInterruption {
    export type AsObject = {
        child?: Node.AsObject,
        requestWhenInterrupted?: DataAcquisition.AsObject,
        pauseMissionMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        restartMissionMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        loadMissionMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        stopMissionMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        leaseUseErrorMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        playMissionTimeoutMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        childNodeErrorMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        childNodeExceptionMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        defaultMetadata?: bosdyn_api_data_acquisition_pb.Metadata.AsObject,
        keysForLeaseUseErrorMessageList: Array<string>,
    }
}

export class ClearBehaviorFaults extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): ClearBehaviorFaults;
    getHost(): string;
    setHost(value: string): ClearBehaviorFaults;
    getRobotStateBlackboardName(): string;
    setRobotStateBlackboardName(value: string): ClearBehaviorFaults;
    getClearedCauseFallBlackboardName(): string;
    setClearedCauseFallBlackboardName(value: string): ClearBehaviorFaults;
    getClearedCauseHardwareBlackboardName(): string;
    setClearedCauseHardwareBlackboardName(value: string): ClearBehaviorFaults;
    getClearedCauseLeaseTimeoutBlackboardName(): string;
    setClearedCauseLeaseTimeoutBlackboardName(value: string): ClearBehaviorFaults;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearBehaviorFaults.AsObject;
    static toObject(includeInstance: boolean, msg: ClearBehaviorFaults): ClearBehaviorFaults.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearBehaviorFaults, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearBehaviorFaults;
    static deserializeBinaryFromReader(message: ClearBehaviorFaults, reader: jspb.BinaryReader): ClearBehaviorFaults;
}

export namespace ClearBehaviorFaults {
    export type AsObject = {
        serviceName: string,
        host: string,
        robotStateBlackboardName: string,
        clearedCauseFallBlackboardName: string,
        clearedCauseHardwareBlackboardName: string,
        clearedCauseLeaseTimeoutBlackboardName: string,
    }
}

export class CreateMissionText extends jspb.Message { 
    getMissionText(): string;
    setMissionText(value: string): CreateMissionText;
    getSeverity(): bosdyn_api_alerts_pb.AlertData.SeverityLevel;
    setSeverity(value: bosdyn_api_alerts_pb.AlertData.SeverityLevel): CreateMissionText;

    hasChild(): boolean;
    clearChild(): void;
    getChild(): Node | undefined;
    setChild(value?: Node): CreateMissionText;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMissionText.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMissionText): CreateMissionText.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMissionText, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMissionText;
    static deserializeBinaryFromReader(message: CreateMissionText, reader: jspb.BinaryReader): CreateMissionText;
}

export namespace CreateMissionText {
    export type AsObject = {
        missionText: string,
        severity: bosdyn_api_alerts_pb.AlertData.SeverityLevel,
        child?: Node.AsObject,
    }
}
