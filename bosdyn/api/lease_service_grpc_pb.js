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
var bosdyn_api_lease_pb = require('../../bosdyn/api/lease_pb.js');

function serialize_bosdyn_api_AcquireLeaseRequest(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.AcquireLeaseRequest)) {
    throw new Error('Expected argument of type bosdyn.api.AcquireLeaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AcquireLeaseRequest(buffer_arg) {
  return bosdyn_api_lease_pb.AcquireLeaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_AcquireLeaseResponse(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.AcquireLeaseResponse)) {
    throw new Error('Expected argument of type bosdyn.api.AcquireLeaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AcquireLeaseResponse(buffer_arg) {
  return bosdyn_api_lease_pb.AcquireLeaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListLeasesRequest(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.ListLeasesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListLeasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListLeasesRequest(buffer_arg) {
  return bosdyn_api_lease_pb.ListLeasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListLeasesResponse(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.ListLeasesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListLeasesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListLeasesResponse(buffer_arg) {
  return bosdyn_api_lease_pb.ListLeasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RetainLeaseRequest(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.RetainLeaseRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RetainLeaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RetainLeaseRequest(buffer_arg) {
  return bosdyn_api_lease_pb.RetainLeaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RetainLeaseResponse(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.RetainLeaseResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RetainLeaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RetainLeaseResponse(buffer_arg) {
  return bosdyn_api_lease_pb.RetainLeaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ReturnLeaseRequest(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.ReturnLeaseRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ReturnLeaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ReturnLeaseRequest(buffer_arg) {
  return bosdyn_api_lease_pb.ReturnLeaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ReturnLeaseResponse(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.ReturnLeaseResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ReturnLeaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ReturnLeaseResponse(buffer_arg) {
  return bosdyn_api_lease_pb.ReturnLeaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TakeLeaseRequest(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.TakeLeaseRequest)) {
    throw new Error('Expected argument of type bosdyn.api.TakeLeaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TakeLeaseRequest(buffer_arg) {
  return bosdyn_api_lease_pb.TakeLeaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TakeLeaseResponse(arg) {
  if (!(arg instanceof bosdyn_api_lease_pb.TakeLeaseResponse)) {
    throw new Error('Expected argument of type bosdyn.api.TakeLeaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TakeLeaseResponse(buffer_arg) {
  return bosdyn_api_lease_pb.TakeLeaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// LeaseService provides Leases of shared resources to clients.
// An example of a shared resource is the set of leg motors on Spot, which
// has the resource name of "body".
// Clients can delegate out the Leases they receive from the LeaseService
// to additional clients or services by generating sub-leases.
// Leases obtained from the LeaseService may be revoked if the Lease holder
// does not check in frequently to the LeaseService, or if another client
// force-acquires a Lease.
var LeaseServiceService = exports.LeaseServiceService = {
  // Acquire a lease to a specific resource if the resource is available.
acquireLease: {
    path: '/bosdyn.api.LeaseService/AcquireLease',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_lease_pb.AcquireLeaseRequest,
    responseType: bosdyn_api_lease_pb.AcquireLeaseResponse,
    requestSerialize: serialize_bosdyn_api_AcquireLeaseRequest,
    requestDeserialize: deserialize_bosdyn_api_AcquireLeaseRequest,
    responseSerialize: serialize_bosdyn_api_AcquireLeaseResponse,
    responseDeserialize: deserialize_bosdyn_api_AcquireLeaseResponse,
  },
  // Take a lease for a specific resource even if another client has a lease.
takeLease: {
    path: '/bosdyn.api.LeaseService/TakeLease',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_lease_pb.TakeLeaseRequest,
    responseType: bosdyn_api_lease_pb.TakeLeaseResponse,
    requestSerialize: serialize_bosdyn_api_TakeLeaseRequest,
    requestDeserialize: deserialize_bosdyn_api_TakeLeaseRequest,
    responseSerialize: serialize_bosdyn_api_TakeLeaseResponse,
    responseDeserialize: deserialize_bosdyn_api_TakeLeaseResponse,
  },
  // Return a lease to the LeaseService.
returnLease: {
    path: '/bosdyn.api.LeaseService/ReturnLease',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_lease_pb.ReturnLeaseRequest,
    responseType: bosdyn_api_lease_pb.ReturnLeaseResponse,
    requestSerialize: serialize_bosdyn_api_ReturnLeaseRequest,
    requestDeserialize: deserialize_bosdyn_api_ReturnLeaseRequest,
    responseSerialize: serialize_bosdyn_api_ReturnLeaseResponse,
    responseDeserialize: deserialize_bosdyn_api_ReturnLeaseResponse,
  },
  // List state of all leases managed by the LeaseService.
listLeases: {
    path: '/bosdyn.api.LeaseService/ListLeases',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_lease_pb.ListLeasesRequest,
    responseType: bosdyn_api_lease_pb.ListLeasesResponse,
    requestSerialize: serialize_bosdyn_api_ListLeasesRequest,
    requestDeserialize: deserialize_bosdyn_api_ListLeasesRequest,
    responseSerialize: serialize_bosdyn_api_ListLeasesResponse,
    responseDeserialize: deserialize_bosdyn_api_ListLeasesResponse,
  },
  // Retain possession of a lease.
retainLease: {
    path: '/bosdyn.api.LeaseService/RetainLease',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_lease_pb.RetainLeaseRequest,
    responseType: bosdyn_api_lease_pb.RetainLeaseResponse,
    requestSerialize: serialize_bosdyn_api_RetainLeaseRequest,
    requestDeserialize: deserialize_bosdyn_api_RetainLeaseRequest,
    responseSerialize: serialize_bosdyn_api_RetainLeaseResponse,
    responseDeserialize: deserialize_bosdyn_api_RetainLeaseResponse,
  },
};

exports.LeaseServiceClient = grpc.makeGenericClientConstructor(LeaseServiceService);
