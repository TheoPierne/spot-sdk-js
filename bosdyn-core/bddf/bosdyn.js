'use strict';

const { SeriesIdentifier } = require('./common');

/**
 * Data series for named channels containing a list of messages.
 */
class MessageChannel extends SeriesIdentifier {
  static SERIES_TYPE = 'bosdyn:channel';
  static CHANNEL = 'bosdyn:message-channel';
  static KEYS = [MessageChannel.CHANNEL];
}

/**
 * Data series for named channels containing a list of messages.
 */
class TypedMessageChannel extends SeriesIdentifier {
  static SERIES_TYPE = 'bosdyn:typed-message-channel';
  static CHANNEL = 'bosdyn:channel';
  static MESSAGE_TYPE = 'bosdyn:message-type';
  static KEYS = [TypedMessageChannel.CHANNEL, TypedMessageChannel.MESSAGE_TYPE];
}

/**
 * Data series for request protobuf messages to a grpc service.
 */
class GrpcRequests extends SeriesIdentifier {
  static SERIES_TYPE = 'bosdyn:grpc:requests';
  static SERVICE_NAME = 'bosdyn:grpc:service';
  static MESSAGE_TYPE = 'bosdyn:message-type';
  static KEYS = [GrpcRequests.SERVICE_NAME, GrpcRequests.MESSAGE_TYPE];
}

/**
 * Data series for response protobuf messages to a grpc service.
 */
class GrpcResponses extends SeriesIdentifier {
  static SERIES_TYPE = 'bosdyn:grpc:responses';
  static SERVICE_NAME = 'bosdyn:grpc:service';
  static MESSAGE_TYPE = 'bosdyn:message-type';
  static KEYS = [GrpcResponses.SERVICE_NAME, GrpcResponses.MESSAGE_TYPE];
}

module.exports = {
  MessageChannel,
  TypedMessageChannel,
  GrpcRequests,
  GrpcResponses,
};
