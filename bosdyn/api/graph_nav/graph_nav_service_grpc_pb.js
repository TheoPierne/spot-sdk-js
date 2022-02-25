// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).
//
'use strict';
var grpc = require('@grpc/grpc-js');
var bosdyn_api_graph_nav_graph_nav_pb = require('../../../bosdyn/api/graph_nav/graph_nav_pb.js');

function serialize_bosdyn_api_graph_nav_ClearGraphRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.ClearGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_ClearGraphRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_ClearGraphResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.ClearGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_ClearGraphResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_DownloadGraphRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.DownloadGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_DownloadGraphRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_DownloadGraphResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.DownloadGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_DownloadGraphResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_GetLocalizationStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.GetLocalizationStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_GetLocalizationStateRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_GetLocalizationStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.GetLocalizationStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_GetLocalizationStateResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigateRouteRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigateRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigateRouteRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigateRouteResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigateRouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigateRouteResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigateToAnchorRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigateToAnchorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigateToAnchorRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigateToAnchorResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigateToAnchorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigateToAnchorResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigateToRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigateToRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigateToRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigateToResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigateToResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigateToResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigationFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigationFeedbackRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_NavigationFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.NavigationFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_NavigationFeedbackResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_SetLocalizationRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.SetLocalizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_SetLocalizationRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_SetLocalizationResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.SetLocalizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_SetLocalizationResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UploadEdgeSnapshotRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UploadEdgeSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UploadEdgeSnapshotRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UploadEdgeSnapshotResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UploadEdgeSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UploadEdgeSnapshotResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UploadGraphRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UploadGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UploadGraphRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UploadGraphResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UploadGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UploadGraphResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UploadWaypointSnapshotRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UploadWaypointSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UploadWaypointSnapshotRequest(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UploadWaypointSnapshotResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UploadWaypointSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UploadWaypointSnapshotResponse(buffer_arg) {
  return bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The GraphNav service service is a place-based localization and locomotion service. The service can
// be used to get/set the localization, upload and download the current graph nav maps, and send navigation
// requests to move around the map.
var GraphNavServiceService = exports.GraphNavServiceService = {
  // Trigger a manual localization. Typically done to provide the initial localization.
setLocalization: {
    path: '/bosdyn.api.graph_nav.GraphNavService/SetLocalization',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_SetLocalizationRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_SetLocalizationRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_SetLocalizationResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_SetLocalizationResponse,
  },
  // Tell GraphNav to navigate/traverse a given route.
navigateRoute: {
    path: '/bosdyn.api.graph_nav.GraphNavService/NavigateRoute',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_NavigateRouteRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_NavigateRouteRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_NavigateRouteResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_NavigateRouteResponse,
  },
  // Tell GraphNav to navigate to a waypoint along a route it chooses.
navigateTo: {
    path: '/bosdyn.api.graph_nav.GraphNavService/NavigateTo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_NavigateToRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_NavigateToRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_NavigateToResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_NavigateToResponse,
  },
  // Tell GraphNav to navigate to a goal with respect to the current anchoring.
navigateToAnchor: {
    path: '/bosdyn.api.graph_nav.GraphNavService/NavigateToAnchor',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_NavigateToAnchorRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_NavigateToAnchorRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_NavigateToAnchorResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_NavigateToAnchorResponse,
  },
  // Get feedback on active navigation command.
navigationFeedback: {
    path: '/bosdyn.api.graph_nav.GraphNavService/NavigationFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_NavigationFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_NavigationFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_NavigationFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_NavigationFeedbackResponse,
  },
  // Get the localization status and data.
getLocalizationState: {
    path: '/bosdyn.api.graph_nav.GraphNavService/GetLocalizationState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_GetLocalizationStateRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_GetLocalizationStateRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_GetLocalizationStateResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_GetLocalizationStateResponse,
  },
  // Clears the local graph structure. Also erases any snapshots currently in RAM.
clearGraph: {
    path: '/bosdyn.api.graph_nav.GraphNavService/ClearGraph',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_ClearGraphRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_ClearGraphRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_ClearGraphResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_ClearGraphResponse,
  },
  // Download the graph structure.
downloadGraph: {
    path: '/bosdyn.api.graph_nav.GraphNavService/DownloadGraph',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_DownloadGraphRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_DownloadGraphRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_DownloadGraphResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_DownloadGraphResponse,
  },
  // Upload the full list of waypoint IDs, graph topology and other small info.
uploadGraph: {
    path: '/bosdyn.api.graph_nav.GraphNavService/UploadGraph',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_UploadGraphRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_UploadGraphRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_UploadGraphResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_UploadGraphResponse,
  },
  // Uploads large waypoint snapshot as a stream for a particular waypoint.
uploadWaypointSnapshot: {
    path: '/bosdyn.api.graph_nav.GraphNavService/UploadWaypointSnapshot',
    requestStream: true,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_UploadWaypointSnapshotRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_UploadWaypointSnapshotRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_UploadWaypointSnapshotResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_UploadWaypointSnapshotResponse,
  },
  // Uploads large edge snapshot as a stream for a particular edge.
uploadEdgeSnapshot: {
    path: '/bosdyn.api.graph_nav.GraphNavService/UploadEdgeSnapshot',
    requestStream: true,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_UploadEdgeSnapshotRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_UploadEdgeSnapshotRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_UploadEdgeSnapshotResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_UploadEdgeSnapshotResponse,
  },
  // Download waypoint data from the server. If the snapshot exists in disk cache, it will be loaded.
downloadWaypointSnapshot: {
    path: '/bosdyn.api.graph_nav.GraphNavService/DownloadWaypointSnapshot',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_DownloadWaypointSnapshotResponse,
  },
  // Download edge data from the server. If the snapshot exists in disk cache, it will be loaded.
downloadEdgeSnapshot: {
    path: '/bosdyn.api.graph_nav.GraphNavService/DownloadEdgeSnapshot',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest,
    responseType: bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_DownloadEdgeSnapshotResponse,
  },
};

exports.GraphNavServiceClient = grpc.makeGenericClientConstructor(GraphNavServiceService);
