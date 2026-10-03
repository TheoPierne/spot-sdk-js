// package: bosdyn.api
// file: bosdyn/api/gripper_camera_param.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GripperCameraParamRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GripperCameraParamRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): GripperCameraParams | undefined;
    setParams(value?: GripperCameraParams): GripperCameraParamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperCameraParamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GripperCameraParamRequest): GripperCameraParamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperCameraParamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperCameraParamRequest;
    static deserializeBinaryFromReader(message: GripperCameraParamRequest, reader: jspb.BinaryReader): GripperCameraParamRequest;
}

export namespace GripperCameraParamRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        params?: GripperCameraParams.AsObject,
    }
}

export class GripperCameraParamResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GripperCameraParamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperCameraParamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GripperCameraParamResponse): GripperCameraParamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperCameraParamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperCameraParamResponse;
    static deserializeBinaryFromReader(message: GripperCameraParamResponse, reader: jspb.BinaryReader): GripperCameraParamResponse;
}

export namespace GripperCameraParamResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GripperCameraGetParamRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GripperCameraGetParamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperCameraGetParamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GripperCameraGetParamRequest): GripperCameraGetParamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperCameraGetParamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperCameraGetParamRequest;
    static deserializeBinaryFromReader(message: GripperCameraGetParamRequest, reader: jspb.BinaryReader): GripperCameraGetParamRequest;
}

export namespace GripperCameraGetParamRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GripperCameraGetParamResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GripperCameraGetParamResponse;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): GripperCameraParams | undefined;
    setParams(value?: GripperCameraParams): GripperCameraGetParamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperCameraGetParamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GripperCameraGetParamResponse): GripperCameraGetParamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperCameraGetParamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperCameraGetParamResponse;
    static deserializeBinaryFromReader(message: GripperCameraGetParamResponse, reader: jspb.BinaryReader): GripperCameraGetParamResponse;
}

export namespace GripperCameraGetParamResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        params?: GripperCameraParams.AsObject,
    }
}

export class GripperCameraParams extends jspb.Message { 
    getCameraMode(): GripperCameraParams.CameraMode;
    setCameraMode(value: GripperCameraParams.CameraMode): GripperCameraParams;

    hasBrightness(): boolean;
    clearBrightness(): void;
    getBrightness(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setBrightness(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasContrast(): boolean;
    clearContrast(): void;
    getContrast(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setContrast(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasSaturation(): boolean;
    clearSaturation(): void;
    getSaturation(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setSaturation(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasGain(): boolean;
    clearGain(): void;
    getGain(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setGain(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasExposureAuto(): boolean;
    clearExposureAuto(): void;
    getExposureAuto(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExposureAuto(value?: google_protobuf_wrappers_pb.BoolValue): GripperCameraParams;

    hasExposureAbsolute(): boolean;
    clearExposureAbsolute(): void;
    getExposureAbsolute(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setExposureAbsolute(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasExposureRoi(): boolean;
    clearExposureRoi(): void;
    getExposureRoi(): RoiParameters | undefined;
    setExposureRoi(value?: RoiParameters): GripperCameraParams;

    hasFocusAuto(): boolean;
    clearFocusAuto(): void;
    getFocusAuto(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setFocusAuto(value?: google_protobuf_wrappers_pb.BoolValue): GripperCameraParams;

    hasFocusAbsolute(): boolean;
    clearFocusAbsolute(): void;
    getFocusAbsolute(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setFocusAbsolute(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasFocusRoi(): boolean;
    clearFocusRoi(): void;
    getFocusRoi(): RoiParameters | undefined;
    setFocusRoi(value?: RoiParameters): GripperCameraParams;

    hasDrawFocusRoiRectangle(): boolean;
    clearDrawFocusRoiRectangle(): void;
    getDrawFocusRoiRectangle(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDrawFocusRoiRectangle(value?: google_protobuf_wrappers_pb.BoolValue): GripperCameraParams;
    getHdr(): HdrParameters;
    setHdr(value: HdrParameters): GripperCameraParams;
    getLedMode(): GripperCameraParams.LedMode;
    setLedMode(value: GripperCameraParams.LedMode): GripperCameraParams;

    hasLedTorchBrightness(): boolean;
    clearLedTorchBrightness(): void;
    getLedTorchBrightness(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setLedTorchBrightness(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasWhiteBalanceTemperatureAuto(): boolean;
    clearWhiteBalanceTemperatureAuto(): void;
    getWhiteBalanceTemperatureAuto(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setWhiteBalanceTemperatureAuto(value?: google_protobuf_wrappers_pb.BoolValue): GripperCameraParams;

    hasGamma(): boolean;
    clearGamma(): void;
    getGamma(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setGamma(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasWhiteBalanceTemperature(): boolean;
    clearWhiteBalanceTemperature(): void;
    getWhiteBalanceTemperature(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setWhiteBalanceTemperature(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

    hasSharpness(): boolean;
    clearSharpness(): void;
    getSharpness(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setSharpness(value?: google_protobuf_wrappers_pb.FloatValue): GripperCameraParams;

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
        cameraMode: GripperCameraParams.CameraMode,
        brightness?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        contrast?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        saturation?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        gain?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        exposureAuto?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        exposureAbsolute?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        exposureRoi?: RoiParameters.AsObject,
        focusAuto?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        focusAbsolute?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        focusRoi?: RoiParameters.AsObject,
        drawFocusRoiRectangle?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        hdr: HdrParameters,
        ledMode: GripperCameraParams.LedMode,
        ledTorchBrightness?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        whiteBalanceTemperatureAuto?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        gamma?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        whiteBalanceTemperature?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        sharpness?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }

    export enum CameraMode {
    MODE_UNKNOWN = 0,
    MODE_640_480 = 11,
    MODE_640_480_120FPS_UYVY = 11,
    MODE_1280_720 = 1,
    MODE_1280_720_60FPS_UYVY = 1,
    MODE_1920_1080 = 14,
    MODE_1920_1080_60FPS_MJPG = 14,
    MODE_3840_2160 = 15,
    MODE_3840_2160_30FPS_MJPG = 15,
    MODE_4096_2160 = 17,
    MODE_4096_2160_30FPS_MJPG = 17,
    MODE_4208_3120 = 16,
    MODE_4208_3120_20FPS_MJPG = 16,
    }

    export enum LedMode {
    LED_MODE_UNKNOWN = 0,
    LED_MODE_OFF = 1,
    LED_MODE_TORCH = 2,
    }

}

export class RoiParameters extends jspb.Message { 

    hasRoiPercentageInImage(): boolean;
    clearRoiPercentageInImage(): void;
    getRoiPercentageInImage(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setRoiPercentageInImage(value?: bosdyn_api_geometry_pb.Vec2): RoiParameters;
    getWindowSize(): RoiParameters.RoiWindowSize;
    setWindowSize(value: RoiParameters.RoiWindowSize): RoiParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoiParameters.AsObject;
    static toObject(includeInstance: boolean, msg: RoiParameters): RoiParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoiParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoiParameters;
    static deserializeBinaryFromReader(message: RoiParameters, reader: jspb.BinaryReader): RoiParameters;
}

export namespace RoiParameters {
    export type AsObject = {
        roiPercentageInImage?: bosdyn_api_geometry_pb.Vec2.AsObject,
        windowSize: RoiParameters.RoiWindowSize,
    }

    export enum RoiWindowSize {
    ROI_WINDOW_SIZE_UNKNOWN = 0,
    ROI_WINDOW_SIZE_1 = 1,
    ROI_WINDOW_SIZE_2 = 2,
    ROI_WINDOW_SIZE_3 = 3,
    ROI_WINDOW_SIZE_4 = 4,
    ROI_WINDOW_SIZE_5 = 5,
    ROI_WINDOW_SIZE_6 = 6,
    ROI_WINDOW_SIZE_7 = 7,
    ROI_WINDOW_SIZE_8 = 8,
    }

}

export class GripperDepthCameraCalibrationParams extends jspb.Message { 

    hasWr1TformSensor(): boolean;
    clearWr1TformSensor(): void;
    getWr1TformSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setWr1TformSensor(value?: bosdyn_api_geometry_pb.SE3Pose): GripperDepthCameraCalibrationParams;

    hasIntrinsics(): boolean;
    clearIntrinsics(): void;
    getIntrinsics(): GripperDepthCameraCalibrationParams.DepthCameraIntrinsics | undefined;
    setIntrinsics(value?: GripperDepthCameraCalibrationParams.DepthCameraIntrinsics): GripperDepthCameraCalibrationParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperDepthCameraCalibrationParams.AsObject;
    static toObject(includeInstance: boolean, msg: GripperDepthCameraCalibrationParams): GripperDepthCameraCalibrationParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperDepthCameraCalibrationParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperDepthCameraCalibrationParams;
    static deserializeBinaryFromReader(message: GripperDepthCameraCalibrationParams, reader: jspb.BinaryReader): GripperDepthCameraCalibrationParams;
}

export namespace GripperDepthCameraCalibrationParams {
    export type AsObject = {
        wr1TformSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        intrinsics?: GripperDepthCameraCalibrationParams.DepthCameraIntrinsics.AsObject,
    }


    export class DepthCameraIntrinsics extends jspb.Message { 

        hasPinhole(): boolean;
        clearPinhole(): void;
        getPinhole(): bosdyn_api_image_pb.ImageSource.PinholeModel | undefined;
        setPinhole(value?: bosdyn_api_image_pb.ImageSource.PinholeModel): DepthCameraIntrinsics;

        hasPinholeBrownConrady(): boolean;
        clearPinholeBrownConrady(): void;
        getPinholeBrownConrady(): bosdyn_api_image_pb.ImageSource.PinholeBrownConrady | undefined;
        setPinholeBrownConrady(value?: bosdyn_api_image_pb.ImageSource.PinholeBrownConrady): DepthCameraIntrinsics;

        hasKannalaBrandt(): boolean;
        clearKannalaBrandt(): void;
        getKannalaBrandt(): bosdyn_api_image_pb.ImageSource.KannalaBrandtModel | undefined;
        setKannalaBrandt(value?: bosdyn_api_image_pb.ImageSource.KannalaBrandtModel): DepthCameraIntrinsics;

        getCameraModelsCase(): DepthCameraIntrinsics.CameraModelsCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DepthCameraIntrinsics.AsObject;
        static toObject(includeInstance: boolean, msg: DepthCameraIntrinsics): DepthCameraIntrinsics.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DepthCameraIntrinsics, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DepthCameraIntrinsics;
        static deserializeBinaryFromReader(message: DepthCameraIntrinsics, reader: jspb.BinaryReader): DepthCameraIntrinsics;
    }

    export namespace DepthCameraIntrinsics {
        export type AsObject = {
            pinhole?: bosdyn_api_image_pb.ImageSource.PinholeModel.AsObject,
            pinholeBrownConrady?: bosdyn_api_image_pb.ImageSource.PinholeBrownConrady.AsObject,
            kannalaBrandt?: bosdyn_api_image_pb.ImageSource.KannalaBrandtModel.AsObject,
        }

        export enum CameraModelsCase {
            CAMERA_MODELS_NOT_SET = 0,
            PINHOLE = 1,
            PINHOLE_BROWN_CONRADY = 2,
            KANNALA_BRANDT = 3,
        }

    }

}

export class GripperColorCameraCalibrationParams extends jspb.Message { 

    hasWr1TformSensor(): boolean;
    clearWr1TformSensor(): void;
    getWr1TformSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setWr1TformSensor(value?: bosdyn_api_geometry_pb.SE3Pose): GripperColorCameraCalibrationParams;
    clearIntrinsicsList(): void;
    getIntrinsicsList(): Array<GripperColorCameraCalibrationParams.ColorCameraIntrinsics>;
    setIntrinsicsList(value: Array<GripperColorCameraCalibrationParams.ColorCameraIntrinsics>): GripperColorCameraCalibrationParams;
    addIntrinsics(value?: GripperColorCameraCalibrationParams.ColorCameraIntrinsics, index?: number): GripperColorCameraCalibrationParams.ColorCameraIntrinsics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperColorCameraCalibrationParams.AsObject;
    static toObject(includeInstance: boolean, msg: GripperColorCameraCalibrationParams): GripperColorCameraCalibrationParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperColorCameraCalibrationParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperColorCameraCalibrationParams;
    static deserializeBinaryFromReader(message: GripperColorCameraCalibrationParams, reader: jspb.BinaryReader): GripperColorCameraCalibrationParams;
}

export namespace GripperColorCameraCalibrationParams {
    export type AsObject = {
        wr1TformSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        intrinsicsList: Array<GripperColorCameraCalibrationParams.ColorCameraIntrinsics.AsObject>,
    }


    export class ColorCameraIntrinsics extends jspb.Message { 

        hasPinhole(): boolean;
        clearPinhole(): void;
        getPinhole(): bosdyn_api_image_pb.ImageSource.PinholeModel | undefined;
        setPinhole(value?: bosdyn_api_image_pb.ImageSource.PinholeModel): ColorCameraIntrinsics;
        getCameraMode(): GripperCameraParams.CameraMode;
        setCameraMode(value: GripperCameraParams.CameraMode): ColorCameraIntrinsics;

        hasFocusAbsolute(): boolean;
        clearFocusAbsolute(): void;
        getFocusAbsolute(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setFocusAbsolute(value?: google_protobuf_wrappers_pb.DoubleValue): ColorCameraIntrinsics;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ColorCameraIntrinsics.AsObject;
        static toObject(includeInstance: boolean, msg: ColorCameraIntrinsics): ColorCameraIntrinsics.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ColorCameraIntrinsics, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ColorCameraIntrinsics;
        static deserializeBinaryFromReader(message: ColorCameraIntrinsics, reader: jspb.BinaryReader): ColorCameraIntrinsics;
    }

    export namespace ColorCameraIntrinsics {
        export type AsObject = {
            pinhole?: bosdyn_api_image_pb.ImageSource.PinholeModel.AsObject,
            cameraMode: GripperCameraParams.CameraMode,
            focusAbsolute?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
    }

}

export class GripperCameraCalibrationProto extends jspb.Message { 

    hasDepth(): boolean;
    clearDepth(): void;
    getDepth(): GripperDepthCameraCalibrationParams | undefined;
    setDepth(value?: GripperDepthCameraCalibrationParams): GripperCameraCalibrationProto;

    hasColor(): boolean;
    clearColor(): void;
    getColor(): GripperColorCameraCalibrationParams | undefined;
    setColor(value?: GripperColorCameraCalibrationParams): GripperCameraCalibrationProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperCameraCalibrationProto.AsObject;
    static toObject(includeInstance: boolean, msg: GripperCameraCalibrationProto): GripperCameraCalibrationProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperCameraCalibrationProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperCameraCalibrationProto;
    static deserializeBinaryFromReader(message: GripperCameraCalibrationProto, reader: jspb.BinaryReader): GripperCameraCalibrationProto;
}

export namespace GripperCameraCalibrationProto {
    export type AsObject = {
        depth?: GripperDepthCameraCalibrationParams.AsObject,
        color?: GripperColorCameraCalibrationParams.AsObject,
    }
}

export class SetGripperCameraCalibrationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetGripperCameraCalibrationRequest;

    hasGripperCamCal(): boolean;
    clearGripperCamCal(): void;
    getGripperCamCal(): GripperCameraCalibrationProto | undefined;
    setGripperCamCal(value?: GripperCameraCalibrationProto): SetGripperCameraCalibrationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGripperCameraCalibrationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetGripperCameraCalibrationRequest): SetGripperCameraCalibrationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGripperCameraCalibrationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGripperCameraCalibrationRequest;
    static deserializeBinaryFromReader(message: SetGripperCameraCalibrationRequest, reader: jspb.BinaryReader): SetGripperCameraCalibrationRequest;
}

export namespace SetGripperCameraCalibrationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        gripperCamCal?: GripperCameraCalibrationProto.AsObject,
    }
}

export class SetGripperCameraCalibrationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetGripperCameraCalibrationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGripperCameraCalibrationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetGripperCameraCalibrationResponse): SetGripperCameraCalibrationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGripperCameraCalibrationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGripperCameraCalibrationResponse;
    static deserializeBinaryFromReader(message: SetGripperCameraCalibrationResponse, reader: jspb.BinaryReader): SetGripperCameraCalibrationResponse;
}

export namespace SetGripperCameraCalibrationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetGripperCameraCalibrationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetGripperCameraCalibrationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGripperCameraCalibrationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGripperCameraCalibrationRequest): GetGripperCameraCalibrationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGripperCameraCalibrationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGripperCameraCalibrationRequest;
    static deserializeBinaryFromReader(message: GetGripperCameraCalibrationRequest, reader: jspb.BinaryReader): GetGripperCameraCalibrationRequest;
}

export namespace GetGripperCameraCalibrationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetGripperCameraCalibrationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetGripperCameraCalibrationResponse;

    hasGripperCamCal(): boolean;
    clearGripperCamCal(): void;
    getGripperCamCal(): GripperCameraCalibrationProto | undefined;
    setGripperCamCal(value?: GripperCameraCalibrationProto): GetGripperCameraCalibrationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGripperCameraCalibrationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetGripperCameraCalibrationResponse): GetGripperCameraCalibrationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGripperCameraCalibrationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGripperCameraCalibrationResponse;
    static deserializeBinaryFromReader(message: GetGripperCameraCalibrationResponse, reader: jspb.BinaryReader): GetGripperCameraCalibrationResponse;
}

export namespace GetGripperCameraCalibrationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        gripperCamCal?: GripperCameraCalibrationProto.AsObject,
    }
}

export enum HdrParameters {
    HDR_UNKNOWN = 0,
    HDR_OFF = 1,
    HDR_AUTO = 2,
    HDR_MANUAL_1 = 3,
    HDR_MANUAL_2 = 4,
    HDR_MANUAL_3 = 5,
    HDR_MANUAL_4 = 6,
}
