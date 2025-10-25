// package: bosdyn.api.autowalk
// file: bosdyn/api/autowalk/walks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bosdyn_api_mission_nodes_pb from "../../../bosdyn/api/mission/nodes_pb";
import * as bosdyn_api_mission_util_pb from "../../../bosdyn/api/mission/util_pb";
import * as bosdyn_api_data_acquisition_pb from "../../../bosdyn/api/data_acquisition_pb";
import * as bosdyn_api_graph_nav_graph_nav_pb from "../../../bosdyn/api/graph_nav/graph_nav_pb";
import * as bosdyn_api_graph_nav_nav_pb from "../../../bosdyn/api/graph_nav/nav_pb";
import * as bosdyn_api_gripper_command_pb from "../../../bosdyn/api/gripper_command_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_image_pb from "../../../bosdyn/api/image_pb";
import * as bosdyn_api_service_customization_pb from "../../../bosdyn/api/service_customization_pb";
import * as bosdyn_api_trajectory_pb from "../../../bosdyn/api/trajectory_pb";
import * as bosdyn_api_spot_choreography_sequence_pb from "../../../bosdyn/api/spot/choreography_sequence_pb";
import * as bosdyn_api_spot_cam_ptz_pb from "../../../bosdyn/api/spot_cam/ptz_pb";
import * as bosdyn_api_spot_robot_command_pb from "../../../bosdyn/api/spot/robot_command_pb";
import * as bosdyn_api_arm_command_pb from "../../../bosdyn/api/arm_command_pb";
import * as bosdyn_api_basic_command_pb from "../../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_gripper_camera_param_pb from "../../../bosdyn/api/gripper_camera_param_pb";

export class Walk extends jspb.Message { 

    hasGlobalParameters(): boolean;
    clearGlobalParameters(): void;
    getGlobalParameters(): GlobalParameters | undefined;
    setGlobalParameters(value?: GlobalParameters): Walk;

    hasPlaybackMode(): boolean;
    clearPlaybackMode(): void;
    getPlaybackMode(): PlaybackMode | undefined;
    setPlaybackMode(value?: PlaybackMode): Walk;
    getMapName(): string;
    setMapName(value: string): Walk;
    getMissionName(): string;
    setMissionName(value: string): Walk;
    clearElementsList(): void;
    getElementsList(): Array<Element>;
    setElementsList(value: Array<Element>): Walk;
    addElements(value?: Element, index?: number): Element;
    clearDocksList(): void;
    getDocksList(): Array<Dock>;
    setDocksList(value: Array<Dock>): Walk;
    addDocks(value?: Dock, index?: number): Dock;
    getId(): string;
    setId(value: string): Walk;

    hasChoreographyItems(): boolean;
    clearChoreographyItems(): void;
    getChoreographyItems(): ChoreographyItems | undefined;
    setChoreographyItems(value?: ChoreographyItems): Walk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Walk.AsObject;
    static toObject(includeInstance: boolean, msg: Walk): Walk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Walk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Walk;
    static deserializeBinaryFromReader(message: Walk, reader: jspb.BinaryReader): Walk;
}

export namespace Walk {
    export type AsObject = {
        globalParameters?: GlobalParameters.AsObject,
        playbackMode?: PlaybackMode.AsObject,
        mapName: string,
        missionName: string,
        elementsList: Array<Element.AsObject>,
        docksList: Array<Dock.AsObject>,
        id: string,
        choreographyItems?: ChoreographyItems.AsObject,
    }
}

export class GlobalParameters extends jspb.Message { 
    getGroupName(): string;
    setGroupName(value: string): GlobalParameters;
    getShouldAutofocusPtz(): boolean;
    setShouldAutofocusPtz(value: boolean): GlobalParameters;
    getSelfRightAttempts(): number;
    setSelfRightAttempts(value: number): GlobalParameters;
    clearPostMissionCallbacksList(): void;
    getPostMissionCallbacksList(): Array<Action.RemoteGrpc>;
    setPostMissionCallbacksList(value: Array<Action.RemoteGrpc>): GlobalParameters;
    addPostMissionCallbacks(value?: Action.RemoteGrpc, index?: number): Action.RemoteGrpc;
    getSkipActions(): boolean;
    setSkipActions(value: boolean): GlobalParameters;

    hasHriBehaviors(): boolean;
    clearHriBehaviors(): void;
    getHriBehaviors(): HriBehaviors | undefined;
    setHriBehaviors(value?: HriBehaviors): GlobalParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlobalParameters.AsObject;
    static toObject(includeInstance: boolean, msg: GlobalParameters): GlobalParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlobalParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlobalParameters;
    static deserializeBinaryFromReader(message: GlobalParameters, reader: jspb.BinaryReader): GlobalParameters;
}

export namespace GlobalParameters {
    export type AsObject = {
        groupName: string,
        shouldAutofocusPtz: boolean,
        selfRightAttempts: number,
        postMissionCallbacksList: Array<Action.RemoteGrpc.AsObject>,
        skipActions: boolean,
        hriBehaviors?: HriBehaviors.AsObject,
    }
}

export class Dock extends jspb.Message { 
    getDockId(): number;
    setDockId(value: number): Dock;
    getDockedWaypointId(): string;
    setDockedWaypointId(value: string): Dock;

    hasTargetPrepPose(): boolean;
    clearTargetPrepPose(): void;
    getTargetPrepPose(): Target | undefined;
    setTargetPrepPose(value?: Target): Dock;

    hasPromptDuration(): boolean;
    clearPromptDuration(): void;
    getPromptDuration(): google_protobuf_duration_pb.Duration | undefined;
    setPromptDuration(value?: google_protobuf_duration_pb.Duration): Dock;
    getDisableRecharge(): boolean;
    setDisableRecharge(value: boolean): Dock;
    getDisableEnd(): boolean;
    setDisableEnd(value: boolean): Dock;

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
        dockId: number,
        dockedWaypointId: string,
        targetPrepPose?: Target.AsObject,
        promptDuration?: google_protobuf_duration_pb.Duration.AsObject,
        disableRecharge: boolean,
        disableEnd: boolean,
    }
}

export class HriBehaviors extends jspb.Message { 
    getPlayAlertBehaviors(): boolean;
    setPlayAlertBehaviors(value: boolean): HriBehaviors;
    getPlayUndockBehaviors(): boolean;
    setPlayUndockBehaviors(value: boolean): HriBehaviors;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HriBehaviors.AsObject;
    static toObject(includeInstance: boolean, msg: HriBehaviors): HriBehaviors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HriBehaviors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HriBehaviors;
    static deserializeBinaryFromReader(message: HriBehaviors, reader: jspb.BinaryReader): HriBehaviors;
}

export namespace HriBehaviors {
    export type AsObject = {
        playAlertBehaviors: boolean,
        playUndockBehaviors: boolean,
    }
}

export class ChoreographyItems extends jspb.Message { 
    clearChoreographySequencesList(): void;
    getChoreographySequencesList(): Array<bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence>;
    setChoreographySequencesList(value: Array<bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence>): ChoreographyItems;
    addChoreographySequences(value?: bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence, index?: number): bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence;
    clearAnimatedMovesList(): void;
    getAnimatedMovesList(): Array<bosdyn_api_spot_choreography_sequence_pb.Animation>;
    setAnimatedMovesList(value: Array<bosdyn_api_spot_choreography_sequence_pb.Animation>): ChoreographyItems;
    addAnimatedMoves(value?: bosdyn_api_spot_choreography_sequence_pb.Animation, index?: number): bosdyn_api_spot_choreography_sequence_pb.Animation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyItems.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyItems): ChoreographyItems.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyItems, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyItems;
    static deserializeBinaryFromReader(message: ChoreographyItems, reader: jspb.BinaryReader): ChoreographyItems;
}

export namespace ChoreographyItems {
    export type AsObject = {
        choreographySequencesList: Array<bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence.AsObject>,
        animatedMovesList: Array<bosdyn_api_spot_choreography_sequence_pb.Animation.AsObject>,
    }
}

export class PlaybackMode extends jspb.Message { 

    hasOnce(): boolean;
    clearOnce(): void;
    getOnce(): PlaybackMode.Once | undefined;
    setOnce(value?: PlaybackMode.Once): PlaybackMode;

    hasPeriodic(): boolean;
    clearPeriodic(): void;
    getPeriodic(): PlaybackMode.Periodic | undefined;
    setPeriodic(value?: PlaybackMode.Periodic): PlaybackMode;

    hasContinuous(): boolean;
    clearContinuous(): void;
    getContinuous(): PlaybackMode.Continuous | undefined;
    setContinuous(value?: PlaybackMode.Continuous): PlaybackMode;

    getModeCase(): PlaybackMode.ModeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaybackMode.AsObject;
    static toObject(includeInstance: boolean, msg: PlaybackMode): PlaybackMode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaybackMode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaybackMode;
    static deserializeBinaryFromReader(message: PlaybackMode, reader: jspb.BinaryReader): PlaybackMode;
}

export namespace PlaybackMode {
    export type AsObject = {
        once?: PlaybackMode.Once.AsObject,
        periodic?: PlaybackMode.Periodic.AsObject,
        continuous?: PlaybackMode.Continuous.AsObject,
    }


    export class Once extends jspb.Message { 
        getSkipDockingAfterCompletion(): boolean;
        setSkipDockingAfterCompletion(value: boolean): Once;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Once.AsObject;
        static toObject(includeInstance: boolean, msg: Once): Once.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Once, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Once;
        static deserializeBinaryFromReader(message: Once, reader: jspb.BinaryReader): Once;
    }

    export namespace Once {
        export type AsObject = {
            skipDockingAfterCompletion: boolean,
        }
    }

    export class Periodic extends jspb.Message { 

        hasInterval(): boolean;
        clearInterval(): void;
        getInterval(): google_protobuf_duration_pb.Duration | undefined;
        setInterval(value?: google_protobuf_duration_pb.Duration): Periodic;
        getRepetitions(): number;
        setRepetitions(value: number): Periodic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Periodic.AsObject;
        static toObject(includeInstance: boolean, msg: Periodic): Periodic.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Periodic, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Periodic;
        static deserializeBinaryFromReader(message: Periodic, reader: jspb.BinaryReader): Periodic;
    }

    export namespace Periodic {
        export type AsObject = {
            interval?: google_protobuf_duration_pb.Duration.AsObject,
            repetitions: number,
        }
    }

    export class Continuous extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Continuous.AsObject;
        static toObject(includeInstance: boolean, msg: Continuous): Continuous.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Continuous, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Continuous;
        static deserializeBinaryFromReader(message: Continuous, reader: jspb.BinaryReader): Continuous;
    }

    export namespace Continuous {
        export type AsObject = {
        }
    }


    export enum ModeCase {
        MODE_NOT_SET = 0,
        ONCE = 2,
        PERIODIC = 3,
        CONTINUOUS = 4,
    }

}

export class Element extends jspb.Message { 
    getName(): string;
    setName(value: string): Element;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Target | undefined;
    setTarget(value?: Target): Element;

    hasTargetFailureBehavior(): boolean;
    clearTargetFailureBehavior(): void;
    getTargetFailureBehavior(): FailureBehavior | undefined;
    setTargetFailureBehavior(value?: FailureBehavior): Element;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): Action | undefined;
    setAction(value?: Action): Element;

    hasActionWrapper(): boolean;
    clearActionWrapper(): void;
    getActionWrapper(): ActionWrapper | undefined;
    setActionWrapper(value?: ActionWrapper): Element;

    hasActionFailureBehavior(): boolean;
    clearActionFailureBehavior(): void;
    getActionFailureBehavior(): FailureBehavior | undefined;
    setActionFailureBehavior(value?: FailureBehavior): Element;
    getIsSkipped(): boolean;
    setIsSkipped(value: boolean): Element;

    hasBatteryMonitor(): boolean;
    clearBatteryMonitor(): void;
    getBatteryMonitor(): BatteryMonitor | undefined;
    setBatteryMonitor(value?: BatteryMonitor): Element;

    hasActionDuration(): boolean;
    clearActionDuration(): void;
    getActionDuration(): google_protobuf_duration_pb.Duration | undefined;
    setActionDuration(value?: google_protobuf_duration_pb.Duration): Element;
    getId(): string;
    setId(value: string): Element;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Element.AsObject;
    static toObject(includeInstance: boolean, msg: Element): Element.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Element, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Element;
    static deserializeBinaryFromReader(message: Element, reader: jspb.BinaryReader): Element;
}

export namespace Element {
    export type AsObject = {
        name: string,
        target?: Target.AsObject,
        targetFailureBehavior?: FailureBehavior.AsObject,
        action?: Action.AsObject,
        actionWrapper?: ActionWrapper.AsObject,
        actionFailureBehavior?: FailureBehavior.AsObject,
        isSkipped: boolean,
        batteryMonitor?: BatteryMonitor.AsObject,
        actionDuration?: google_protobuf_duration_pb.Duration.AsObject,
        id: string,
    }
}

export class Target extends jspb.Message { 

    hasNavigateTo(): boolean;
    clearNavigateTo(): void;
    getNavigateTo(): Target.NavigateTo | undefined;
    setNavigateTo(value?: Target.NavigateTo): Target;

    hasNavigateRoute(): boolean;
    clearNavigateRoute(): void;
    getNavigateRoute(): Target.NavigateRoute | undefined;
    setNavigateRoute(value?: Target.NavigateRoute): Target;

    hasRelocalize(): boolean;
    clearRelocalize(): void;
    getRelocalize(): Target.Relocalize | undefined;
    setRelocalize(value?: Target.Relocalize): Target;
    getTargetStowBehavior(): Target.TargetStowBehavior;
    setTargetStowBehavior(value: Target.TargetStowBehavior): Target;

    getTargetCase(): Target.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
    export type AsObject = {
        navigateTo?: Target.NavigateTo.AsObject,
        navigateRoute?: Target.NavigateRoute.AsObject,
        relocalize?: Target.Relocalize.AsObject,
        targetStowBehavior: Target.TargetStowBehavior,
    }


    export class Relocalize extends jspb.Message { 

        hasSetLocalizationRequest(): boolean;
        clearSetLocalizationRequest(): void;
        getSetLocalizationRequest(): bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest | undefined;
        setSetLocalizationRequest(value?: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest): Relocalize;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Relocalize.AsObject;
        static toObject(includeInstance: boolean, msg: Relocalize): Relocalize.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Relocalize, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Relocalize;
        static deserializeBinaryFromReader(message: Relocalize, reader: jspb.BinaryReader): Relocalize;
    }

    export namespace Relocalize {
        export type AsObject = {
            setLocalizationRequest?: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.AsObject,
        }
    }

    export class NavigateTo extends jspb.Message { 
        getDestinationWaypointId(): string;
        setDestinationWaypointId(value: string): NavigateTo;

        hasTravelParams(): boolean;
        clearTravelParams(): void;
        getTravelParams(): bosdyn_api_graph_nav_graph_nav_pb.TravelParams | undefined;
        setTravelParams(value?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams): NavigateTo;

        hasDestinationWaypointTformBodyGoal(): boolean;
        clearDestinationWaypointTformBodyGoal(): void;
        getDestinationWaypointTformBodyGoal(): bosdyn_api_geometry_pb.SE2Pose | undefined;
        setDestinationWaypointTformBodyGoal(value?: bosdyn_api_geometry_pb.SE2Pose): NavigateTo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NavigateTo.AsObject;
        static toObject(includeInstance: boolean, msg: NavigateTo): NavigateTo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NavigateTo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NavigateTo;
        static deserializeBinaryFromReader(message: NavigateTo, reader: jspb.BinaryReader): NavigateTo;
    }

    export namespace NavigateTo {
        export type AsObject = {
            destinationWaypointId: string,
            travelParams?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.AsObject,
            destinationWaypointTformBodyGoal?: bosdyn_api_geometry_pb.SE2Pose.AsObject,
        }
    }

    export class NavigateRoute extends jspb.Message { 

        hasRoute(): boolean;
        clearRoute(): void;
        getRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
        setRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): NavigateRoute;

        hasTravelParams(): boolean;
        clearTravelParams(): void;
        getTravelParams(): bosdyn_api_graph_nav_graph_nav_pb.TravelParams | undefined;
        setTravelParams(value?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams): NavigateRoute;

        hasDestinationWaypointTformBodyGoal(): boolean;
        clearDestinationWaypointTformBodyGoal(): void;
        getDestinationWaypointTformBodyGoal(): bosdyn_api_geometry_pb.SE2Pose | undefined;
        setDestinationWaypointTformBodyGoal(value?: bosdyn_api_geometry_pb.SE2Pose): NavigateRoute;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NavigateRoute.AsObject;
        static toObject(includeInstance: boolean, msg: NavigateRoute): NavigateRoute.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NavigateRoute, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NavigateRoute;
        static deserializeBinaryFromReader(message: NavigateRoute, reader: jspb.BinaryReader): NavigateRoute;
    }

    export namespace NavigateRoute {
        export type AsObject = {
            route?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
            travelParams?: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.AsObject,
            destinationWaypointTformBodyGoal?: bosdyn_api_geometry_pb.SE2Pose.AsObject,
        }
    }


    export enum TargetStowBehavior {
    TARGET_STOW_BEHAVIOR_UNKNOWN = 0,
    TARGET_STOW_BEHAVIOR_AUTO = 1,
    TARGET_STOW_BEHAVIOR_NEVER = 2,
    TARGET_STOW_BEHAVIOR_ALWAYS = 3,
    }


    export enum TargetCase {
        TARGET_NOT_SET = 0,
        NAVIGATE_TO = 1,
        NAVIGATE_ROUTE = 2,
    }

}

export class Action extends jspb.Message { 

    hasSleep(): boolean;
    clearSleep(): void;
    getSleep(): Action.Sleep | undefined;
    setSleep(value?: Action.Sleep): Action;

    hasDataAcquisition(): boolean;
    clearDataAcquisition(): void;
    getDataAcquisition(): Action.DataAcquisition | undefined;
    setDataAcquisition(value?: Action.DataAcquisition): Action;

    hasRemoteGrpc(): boolean;
    clearRemoteGrpc(): void;
    getRemoteGrpc(): Action.RemoteGrpc | undefined;
    setRemoteGrpc(value?: Action.RemoteGrpc): Action;

    hasExecuteChoreography(): boolean;
    clearExecuteChoreography(): void;
    getExecuteChoreography(): Action.ExecuteChoreography | undefined;
    setExecuteChoreography(value?: Action.ExecuteChoreography): Action;

    hasNode(): boolean;
    clearNode(): void;
    getNode(): bosdyn_api_mission_nodes_pb.Node | undefined;
    setNode(value?: bosdyn_api_mission_nodes_pb.Node): Action;

    getActionCase(): Action.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
    export type AsObject = {
        sleep?: Action.Sleep.AsObject,
        dataAcquisition?: Action.DataAcquisition.AsObject,
        remoteGrpc?: Action.RemoteGrpc.AsObject,
        executeChoreography?: Action.ExecuteChoreography.AsObject,
        node?: bosdyn_api_mission_nodes_pb.Node.AsObject,
    }


    export class Sleep extends jspb.Message { 

        hasDuration(): boolean;
        clearDuration(): void;
        getDuration(): google_protobuf_duration_pb.Duration | undefined;
        setDuration(value?: google_protobuf_duration_pb.Duration): Sleep;

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
            duration?: google_protobuf_duration_pb.Duration.AsObject,
        }
    }

    export class DataAcquisition extends jspb.Message { 

        hasAcquireDataRequest(): boolean;
        clearAcquireDataRequest(): void;
        getAcquireDataRequest(): bosdyn_api_data_acquisition_pb.AcquireDataRequest | undefined;
        setAcquireDataRequest(value?: bosdyn_api_data_acquisition_pb.AcquireDataRequest): DataAcquisition;
        getCompletionBehavior(): bosdyn_api_mission_nodes_pb.DataAcquisition.CompletionBehavior;
        setCompletionBehavior(value: bosdyn_api_mission_nodes_pb.DataAcquisition.CompletionBehavior): DataAcquisition;

        hasLastKnownCapabilities(): boolean;
        clearLastKnownCapabilities(): void;
        getLastKnownCapabilities(): bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList | undefined;
        setLastKnownCapabilities(value?: bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList): DataAcquisition;
        clearRecordTimeImagesList(): void;
        getRecordTimeImagesList(): Array<bosdyn_api_image_pb.ImageCaptureAndSource>;
        setRecordTimeImagesList(value: Array<bosdyn_api_image_pb.ImageCaptureAndSource>): DataAcquisition;
        addRecordTimeImages(value?: bosdyn_api_image_pb.ImageCaptureAndSource, index?: number): bosdyn_api_image_pb.ImageCaptureAndSource;

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
            acquireDataRequest?: bosdyn_api_data_acquisition_pb.AcquireDataRequest.AsObject,
            completionBehavior: bosdyn_api_mission_nodes_pb.DataAcquisition.CompletionBehavior,
            lastKnownCapabilities?: bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList.AsObject,
            recordTimeImagesList: Array<bosdyn_api_image_pb.ImageCaptureAndSource.AsObject>,
        }
    }

    export class RemoteGrpc extends jspb.Message { 
        getServiceName(): string;
        setServiceName(value: string): RemoteGrpc;

        hasRpcTimeout(): boolean;
        clearRpcTimeout(): void;
        getRpcTimeout(): google_protobuf_duration_pb.Duration | undefined;
        setRpcTimeout(value?: google_protobuf_duration_pb.Duration): RemoteGrpc;
        clearLeaseResourcesList(): void;
        getLeaseResourcesList(): Array<string>;
        setLeaseResourcesList(value: Array<string>): RemoteGrpc;
        addLeaseResources(value: string, index?: number): string;
        clearInputsList(): void;
        getInputsList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
        setInputsList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): RemoteGrpc;
        addInputs(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;

        hasParameters(): boolean;
        clearParameters(): void;
        getParameters(): bosdyn_api_service_customization_pb.CustomParamCollection | undefined;
        setParameters(value?: bosdyn_api_service_customization_pb.CustomParamCollection): RemoteGrpc;
        clearRecordTimeImagesList(): void;
        getRecordTimeImagesList(): Array<bosdyn_api_image_pb.ImageCaptureAndSource>;
        setRecordTimeImagesList(value: Array<bosdyn_api_image_pb.ImageCaptureAndSource>): RemoteGrpc;
        addRecordTimeImages(value?: bosdyn_api_image_pb.ImageCaptureAndSource, index?: number): bosdyn_api_image_pb.ImageCaptureAndSource;

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
            serviceName: string,
            rpcTimeout?: google_protobuf_duration_pb.Duration.AsObject,
            leaseResourcesList: Array<string>,
            inputsList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
            parameters?: bosdyn_api_service_customization_pb.CustomParamCollection.AsObject,
            recordTimeImagesList: Array<bosdyn_api_image_pb.ImageCaptureAndSource.AsObject>,
        }
    }

    export class ExecuteChoreography extends jspb.Message { 
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
            sequenceName: string,
        }
    }


    export enum ActionCase {
        ACTION_NOT_SET = 0,
        SLEEP = 1,
        DATA_ACQUISITION = 2,
        REMOTE_GRPC = 3,
        EXECUTE_CHOREOGRAPHY = 5,
        NODE = 4,
    }

}

export class ActionWrapper extends jspb.Message { 

    hasRobotBodySit(): boolean;
    clearRobotBodySit(): void;
    getRobotBodySit(): ActionWrapper.RobotBodySit | undefined;
    setRobotBodySit(value?: ActionWrapper.RobotBodySit): ActionWrapper;

    hasRobotBodyPose(): boolean;
    clearRobotBodyPose(): void;
    getRobotBodyPose(): ActionWrapper.RobotBodyPose | undefined;
    setRobotBodyPose(value?: ActionWrapper.RobotBodyPose): ActionWrapper;

    hasSpotCamLed(): boolean;
    clearSpotCamLed(): void;
    getSpotCamLed(): ActionWrapper.SpotCamLed | undefined;
    setSpotCamLed(value?: ActionWrapper.SpotCamLed): ActionWrapper;

    hasSpotCamPtz(): boolean;
    clearSpotCamPtz(): void;
    getSpotCamPtz(): ActionWrapper.SpotCamPtz | undefined;
    setSpotCamPtz(value?: ActionWrapper.SpotCamPtz): ActionWrapper;

    hasArmSensorPointing(): boolean;
    clearArmSensorPointing(): void;
    getArmSensorPointing(): ActionWrapper.ArmSensorPointing | undefined;
    setArmSensorPointing(value?: ActionWrapper.ArmSensorPointing): ActionWrapper;

    hasSpotCamAlignment(): boolean;
    clearSpotCamAlignment(): void;
    getSpotCamAlignment(): ActionWrapper.SpotCamAlignment | undefined;
    setSpotCamAlignment(value?: ActionWrapper.SpotCamAlignment): ActionWrapper;

    hasGripperCameraParams(): boolean;
    clearGripperCameraParams(): void;
    getGripperCameraParams(): ActionWrapper.GripperCameraParams | undefined;
    setGripperCameraParams(value?: ActionWrapper.GripperCameraParams): ActionWrapper;

    hasGripperCommand(): boolean;
    clearGripperCommand(): void;
    getGripperCommand(): ActionWrapper.GripperCommand | undefined;
    setGripperCommand(value?: ActionWrapper.GripperCommand): ActionWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: ActionWrapper): ActionWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionWrapper;
    static deserializeBinaryFromReader(message: ActionWrapper, reader: jspb.BinaryReader): ActionWrapper;
}

export namespace ActionWrapper {
    export type AsObject = {
        robotBodySit?: ActionWrapper.RobotBodySit.AsObject,
        robotBodyPose?: ActionWrapper.RobotBodyPose.AsObject,
        spotCamLed?: ActionWrapper.SpotCamLed.AsObject,
        spotCamPtz?: ActionWrapper.SpotCamPtz.AsObject,
        armSensorPointing?: ActionWrapper.ArmSensorPointing.AsObject,
        spotCamAlignment?: ActionWrapper.SpotCamAlignment.AsObject,
        gripperCameraParams?: ActionWrapper.GripperCameraParams.AsObject,
        gripperCommand?: ActionWrapper.GripperCommand.AsObject,
    }


    export class RobotBodySit extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RobotBodySit.AsObject;
        static toObject(includeInstance: boolean, msg: RobotBodySit): RobotBodySit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RobotBodySit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RobotBodySit;
        static deserializeBinaryFromReader(message: RobotBodySit, reader: jspb.BinaryReader): RobotBodySit;
    }

    export namespace RobotBodySit {
        export type AsObject = {
        }
    }

    export class RobotBodyPose extends jspb.Message { 

        hasTargetTformBody(): boolean;
        clearTargetTformBody(): void;
        getTargetTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setTargetTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): RobotBodyPose;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RobotBodyPose.AsObject;
        static toObject(includeInstance: boolean, msg: RobotBodyPose): RobotBodyPose.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RobotBodyPose, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RobotBodyPose;
        static deserializeBinaryFromReader(message: RobotBodyPose, reader: jspb.BinaryReader): RobotBodyPose;
    }

    export namespace RobotBodyPose {
        export type AsObject = {
            targetTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }

    export class SpotCamLed extends jspb.Message { 

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

            brightnessesMap: Array<[number, number]>,
        }
    }

    export class SpotCamPtz extends jspb.Message { 

        hasPtzPosition(): boolean;
        clearPtzPosition(): void;
        getPtzPosition(): bosdyn_api_spot_cam_ptz_pb.PtzPosition | undefined;
        setPtzPosition(value?: bosdyn_api_spot_cam_ptz_pb.PtzPosition): SpotCamPtz;

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
            ptzPosition?: bosdyn_api_spot_cam_ptz_pb.PtzPosition.AsObject,
        }
    }

    export class SpotCamAlignment extends jspb.Message { 
        clearAlignmentsList(): void;
        getAlignmentsList(): Array<ActionWrapper.SpotCamAlignment.Alignment>;
        setAlignmentsList(value: Array<ActionWrapper.SpotCamAlignment.Alignment>): SpotCamAlignment;
        addAlignments(value?: ActionWrapper.SpotCamAlignment.Alignment, index?: number): ActionWrapper.SpotCamAlignment.Alignment;

        hasTargetTformSensor(): boolean;
        clearTargetTformSensor(): void;
        getTargetTformSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setTargetTformSensor(value?: bosdyn_api_geometry_pb.SE3Pose): SpotCamAlignment;
        getFinalZoom(): number;
        setFinalZoom(value: number): SpotCamAlignment;
        clearTargetSensorIdsList(): void;
        getTargetSensorIdsList(): Array<string>;
        setTargetSensorIdsList(value: Array<string>): SpotCamAlignment;
        addTargetSensorIds(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SpotCamAlignment.AsObject;
        static toObject(includeInstance: boolean, msg: SpotCamAlignment): SpotCamAlignment.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SpotCamAlignment, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SpotCamAlignment;
        static deserializeBinaryFromReader(message: SpotCamAlignment, reader: jspb.BinaryReader): SpotCamAlignment;
    }

    export namespace SpotCamAlignment {
        export type AsObject = {
            alignmentsList: Array<ActionWrapper.SpotCamAlignment.Alignment.AsObject>,
            targetTformSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            finalZoom: number,
            targetSensorIdsList: Array<string>,
        }


        export class Alignment extends jspb.Message { 
            getZoom(): number;
            setZoom(value: number): Alignment;
            getSensorId(): string;
            setSensorId(value: string): Alignment;

            hasSceneObjectId(): boolean;
            clearSceneObjectId(): void;
            getSceneObjectId(): string;
            setSceneObjectId(value: string): Alignment;

            hasReferenceImage(): boolean;
            clearReferenceImage(): void;
            getReferenceImage(): bosdyn_api_image_pb.ImageCaptureAndSource | undefined;
            setReferenceImage(value?: bosdyn_api_image_pb.ImageCaptureAndSource): Alignment;
            getIsSkipped(): boolean;
            setIsSkipped(value: boolean): Alignment;

            hasFocusState(): boolean;
            clearFocusState(): void;
            getFocusState(): bosdyn_api_spot_cam_ptz_pb.PtzFocusState | undefined;
            setFocusState(value?: bosdyn_api_spot_cam_ptz_pb.PtzFocusState): Alignment;

            getReferenceCase(): Alignment.ReferenceCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Alignment.AsObject;
            static toObject(includeInstance: boolean, msg: Alignment): Alignment.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Alignment, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Alignment;
            static deserializeBinaryFromReader(message: Alignment, reader: jspb.BinaryReader): Alignment;
        }

        export namespace Alignment {
            export type AsObject = {
                zoom: number,
                sensorId: string,
                sceneObjectId: string,
                referenceImage?: bosdyn_api_image_pb.ImageCaptureAndSource.AsObject,
                isSkipped: boolean,
                focusState?: bosdyn_api_spot_cam_ptz_pb.PtzFocusState.AsObject,
            }

            export enum ReferenceCase {
                REFERENCE_NOT_SET = 0,
                SCENE_OBJECT_ID = 3,
                REFERENCE_IMAGE = 6,
            }

        }

    }

    export class ArmSensorPointing extends jspb.Message { 

        hasJointTrajectory(): boolean;
        clearJointTrajectory(): void;
        getJointTrajectory(): bosdyn_api_arm_command_pb.ArmJointTrajectory | undefined;
        setJointTrajectory(value?: bosdyn_api_arm_command_pb.ArmJointTrajectory): ArmSensorPointing;

        hasWristTformTool(): boolean;
        clearWristTformTool(): void;
        getWristTformTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setWristTformTool(value?: bosdyn_api_geometry_pb.SE3Pose): ArmSensorPointing;

        hasPoseTrajectoryRtTarget(): boolean;
        clearPoseTrajectoryRtTarget(): void;
        getPoseTrajectoryRtTarget(): bosdyn_api_trajectory_pb.SE3Trajectory | undefined;
        setPoseTrajectoryRtTarget(value?: bosdyn_api_trajectory_pb.SE3Trajectory): ArmSensorPointing;

        hasTargetTformMeasuredOffset(): boolean;
        clearTargetTformMeasuredOffset(): void;
        getTargetTformMeasuredOffset(): bosdyn_api_geometry_pb.SE2Pose | undefined;
        setTargetTformMeasuredOffset(value?: bosdyn_api_geometry_pb.SE2Pose): ArmSensorPointing;

        hasBodyAssistParams(): boolean;
        clearBodyAssistParams(): void;
        getBodyAssistParams(): bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation | undefined;
        setBodyAssistParams(value?: bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation): ArmSensorPointing;
        getForceStowOverride(): boolean;
        setForceStowOverride(value: boolean): ArmSensorPointing;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ArmSensorPointing.AsObject;
        static toObject(includeInstance: boolean, msg: ArmSensorPointing): ArmSensorPointing.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ArmSensorPointing, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ArmSensorPointing;
        static deserializeBinaryFromReader(message: ArmSensorPointing, reader: jspb.BinaryReader): ArmSensorPointing;
    }

    export namespace ArmSensorPointing {
        export type AsObject = {
            jointTrajectory?: bosdyn_api_arm_command_pb.ArmJointTrajectory.AsObject,
            wristTformTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            poseTrajectoryRtTarget?: bosdyn_api_trajectory_pb.SE3Trajectory.AsObject,
            targetTformMeasuredOffset?: bosdyn_api_geometry_pb.SE2Pose.AsObject,
            bodyAssistParams?: bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation.AsObject,
            forceStowOverride: boolean,
        }
    }

    export class GripperCameraParams extends jspb.Message { 

        hasParams(): boolean;
        clearParams(): void;
        getParams(): bosdyn_api_gripper_camera_param_pb.GripperCameraParams | undefined;
        setParams(value?: bosdyn_api_gripper_camera_param_pb.GripperCameraParams): GripperCameraParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GripperCameraParams.AsObject;
        static toObject(includeInstance: boolean, msg: GripperCameraParams): GripperCameraParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GripperCameraParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GripperCameraParams;
        static deserializeBinaryFromReader(message: GripperCameraParams, reader: jspb.BinaryReader): GripperCameraParams;
    }

    export namespace GripperCameraParams {
        export type AsObject = {
            params?: bosdyn_api_gripper_camera_param_pb.GripperCameraParams.AsObject,
        }
    }

    export class GripperCommand extends jspb.Message { 

        hasRequest(): boolean;
        clearRequest(): void;
        getRequest(): bosdyn_api_gripper_command_pb.GripperCommand.Request | undefined;
        setRequest(value?: bosdyn_api_gripper_command_pb.GripperCommand.Request): GripperCommand;
        getDisablePostActionClose(): boolean;
        setDisablePostActionClose(value: boolean): GripperCommand;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GripperCommand.AsObject;
        static toObject(includeInstance: boolean, msg: GripperCommand): GripperCommand.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GripperCommand, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GripperCommand;
        static deserializeBinaryFromReader(message: GripperCommand, reader: jspb.BinaryReader): GripperCommand;
    }

    export namespace GripperCommand {
        export type AsObject = {
            request?: bosdyn_api_gripper_command_pb.GripperCommand.Request.AsObject,
            disablePostActionClose: boolean,
        }
    }

}

export class FailureBehavior extends jspb.Message { 
    getRetryCount(): number;
    setRetryCount(value: number): FailureBehavior;

    hasPromptDuration(): boolean;
    clearPromptDuration(): void;
    getPromptDuration(): google_protobuf_duration_pb.Duration | undefined;
    setPromptDuration(value?: google_protobuf_duration_pb.Duration): FailureBehavior;

    hasSafePowerOff(): boolean;
    clearSafePowerOff(): void;
    getSafePowerOff(): FailureBehavior.SafePowerOff | undefined;
    setSafePowerOff(value?: FailureBehavior.SafePowerOff): FailureBehavior;

    hasProceedIfAble(): boolean;
    clearProceedIfAble(): void;
    getProceedIfAble(): FailureBehavior.ProceedIfAble | undefined;
    setProceedIfAble(value?: FailureBehavior.ProceedIfAble): FailureBehavior;

    hasReturnToStartAndTryAgainLater(): boolean;
    clearReturnToStartAndTryAgainLater(): void;
    getReturnToStartAndTryAgainLater(): FailureBehavior.ReturnToStartAndTryAgainLater | undefined;
    setReturnToStartAndTryAgainLater(value?: FailureBehavior.ReturnToStartAndTryAgainLater): FailureBehavior;

    hasReturnToStartAndTerminate(): boolean;
    clearReturnToStartAndTerminate(): void;
    getReturnToStartAndTerminate(): FailureBehavior.ReturnToStartAndTerminate | undefined;
    setReturnToStartAndTerminate(value?: FailureBehavior.ReturnToStartAndTerminate): FailureBehavior;

    getDefaultBehaviorCase(): FailureBehavior.DefaultBehaviorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureBehavior.AsObject;
    static toObject(includeInstance: boolean, msg: FailureBehavior): FailureBehavior.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureBehavior, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureBehavior;
    static deserializeBinaryFromReader(message: FailureBehavior, reader: jspb.BinaryReader): FailureBehavior;
}

export namespace FailureBehavior {
    export type AsObject = {
        retryCount: number,
        promptDuration?: google_protobuf_duration_pb.Duration.AsObject,
        safePowerOff?: FailureBehavior.SafePowerOff.AsObject,
        proceedIfAble?: FailureBehavior.ProceedIfAble.AsObject,
        returnToStartAndTryAgainLater?: FailureBehavior.ReturnToStartAndTryAgainLater.AsObject,
        returnToStartAndTerminate?: FailureBehavior.ReturnToStartAndTerminate.AsObject,
    }


    export class SafePowerOff extends jspb.Message { 

        hasRequest(): boolean;
        clearRequest(): void;
        getRequest(): bosdyn_api_basic_command_pb.SafePowerOffCommand.Request | undefined;
        setRequest(value?: bosdyn_api_basic_command_pb.SafePowerOffCommand.Request): SafePowerOff;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SafePowerOff.AsObject;
        static toObject(includeInstance: boolean, msg: SafePowerOff): SafePowerOff.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SafePowerOff, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SafePowerOff;
        static deserializeBinaryFromReader(message: SafePowerOff, reader: jspb.BinaryReader): SafePowerOff;
    }

    export namespace SafePowerOff {
        export type AsObject = {
            request?: bosdyn_api_basic_command_pb.SafePowerOffCommand.Request.AsObject,
        }
    }

    export class ProceedIfAble extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProceedIfAble.AsObject;
        static toObject(includeInstance: boolean, msg: ProceedIfAble): ProceedIfAble.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProceedIfAble, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProceedIfAble;
        static deserializeBinaryFromReader(message: ProceedIfAble, reader: jspb.BinaryReader): ProceedIfAble;
    }

    export namespace ProceedIfAble {
        export type AsObject = {
        }
    }

    export class ReturnToStartAndTryAgainLater extends jspb.Message { 

        hasTryAgainDelay(): boolean;
        clearTryAgainDelay(): void;
        getTryAgainDelay(): google_protobuf_duration_pb.Duration | undefined;
        setTryAgainDelay(value?: google_protobuf_duration_pb.Duration): ReturnToStartAndTryAgainLater;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReturnToStartAndTryAgainLater.AsObject;
        static toObject(includeInstance: boolean, msg: ReturnToStartAndTryAgainLater): ReturnToStartAndTryAgainLater.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReturnToStartAndTryAgainLater, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReturnToStartAndTryAgainLater;
        static deserializeBinaryFromReader(message: ReturnToStartAndTryAgainLater, reader: jspb.BinaryReader): ReturnToStartAndTryAgainLater;
    }

    export namespace ReturnToStartAndTryAgainLater {
        export type AsObject = {
            tryAgainDelay?: google_protobuf_duration_pb.Duration.AsObject,
        }
    }

    export class ReturnToStartAndTerminate extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReturnToStartAndTerminate.AsObject;
        static toObject(includeInstance: boolean, msg: ReturnToStartAndTerminate): ReturnToStartAndTerminate.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReturnToStartAndTerminate, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReturnToStartAndTerminate;
        static deserializeBinaryFromReader(message: ReturnToStartAndTerminate, reader: jspb.BinaryReader): ReturnToStartAndTerminate;
    }

    export namespace ReturnToStartAndTerminate {
        export type AsObject = {
        }
    }


    export enum DefaultBehaviorCase {
        DEFAULT_BEHAVIOR_NOT_SET = 0,
        SAFE_POWER_OFF = 3,
        PROCEED_IF_ABLE = 4,
        RETURN_TO_START_AND_TRY_AGAIN_LATER = 5,
        RETURN_TO_START_AND_TERMINATE = 6,
    }

}

export class BatteryMonitor extends jspb.Message { 
    getBatteryStartThreshold(): number;
    setBatteryStartThreshold(value: number): BatteryMonitor;
    getBatteryStopThreshold(): number;
    setBatteryStopThreshold(value: number): BatteryMonitor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatteryMonitor.AsObject;
    static toObject(includeInstance: boolean, msg: BatteryMonitor): BatteryMonitor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatteryMonitor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatteryMonitor;
    static deserializeBinaryFromReader(message: BatteryMonitor, reader: jspb.BinaryReader): BatteryMonitor;
}

export namespace BatteryMonitor {
    export type AsObject = {
        batteryStartThreshold: number,
        batteryStopThreshold: number,
    }
}
