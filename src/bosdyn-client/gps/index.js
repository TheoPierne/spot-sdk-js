/**
 * @file The GPS: the clients of the GPS services, the listener of a GPS device and the NTRIP client, like the package
 * bosdyn.client.gps of Python.
 */

'use strict';

const { NMEAParser } = require('./NMEAParser');
const { AggregatorClient } = require('./aggregator_client');
const { GpsListener, NMEAStreamReader, StreamTimeoutError } = require('./gps_listener');
const {
  DEFAULT_NTRIP_PORT,
  DEFAULT_NTRIP_SERVER,
  DEFAULT_NTRIP_TLS_PORT,
  NtripClient,
  NtripClientParams,
  SERVER_RECONNECT_DELAY,
  SOCKET_MAX_RECV_TIMEOUTS,
  SOCKET_TIMEOUT,
} = require('./ntrip_client');
const { RegistrationClient } = require('./registration_client');

module.exports = {
  AggregatorClient,
  GpsListener,
  NMEAStreamReader,
  StreamTimeoutError,
  NMEAParser,
  DEFAULT_NTRIP_PORT,
  DEFAULT_NTRIP_SERVER,
  DEFAULT_NTRIP_TLS_PORT,
  NtripClient,
  NtripClientParams,
  SERVER_RECONNECT_DELAY,
  SOCKET_MAX_RECV_TIMEOUTS,
  SOCKET_TIMEOUT,
  RegistrationClient,
};
