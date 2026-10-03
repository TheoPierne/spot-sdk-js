# bosdyn-core/bddf/index

Code for reading and writing 'bddf' data files.

```js
const { AddSeriesError, ChecksumError, DataError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { ParseError } = require('spot-sdk-js/src/bosdyn-core/bddf/index');
```

## Exports of other modules

| Export | Module |
|---|---|
| [`AddSeriesError`](/api/bosdyn-core/bddf/common?id=addserieserror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`ChecksumError`](/api/bosdyn-core/bddf/common?id=checksumerror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`DataError`](/api/bosdyn-core/bddf/common?id=dataerror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`DataFormatError`](/api/bosdyn-core/bddf/common?id=dataformaterror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`EOFError`](/api/bosdyn-core/bddf/common?id=eoferror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`LOGGER`](/api/bosdyn-core/bddf/common?id=constants) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`PROTOBUF_CONTENT_TYPE`](/api/bosdyn-core/bddf/common?id=constants) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`ParseError`](/api/bosdyn-core/bddf/common?id=parseerror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`SeriesNotUniqueError`](/api/bosdyn-core/bddf/common?id=seriesnotuniqueerror) | [bosdyn-core/bddf/common](/api/bosdyn-core/bddf/common) |
| [`DataReader`](/api/bosdyn-core/bddf/data_reader?id=datareader) | [bosdyn-core/bddf/data_reader](/api/bosdyn-core/bddf/data_reader) |
| [`DataWriter`](/api/bosdyn-core/bddf/data_writer?id=datawriter) | [bosdyn-core/bddf/data_writer](/api/bosdyn-core/bddf/data_writer) |
| [`GrpcReader`](/api/bosdyn-core/bddf/grpc_reader?id=grpcreader) | [bosdyn-core/bddf/grpc_reader](/api/bosdyn-core/bddf/grpc_reader) |
| [`GrpcServiceWriter`](/api/bosdyn-core/bddf/grpc_service_writer?id=grpcservicewriter) | [bosdyn-core/bddf/grpc_service_writer](/api/bosdyn-core/bddf/grpc_service_writer) |
| [`MessageReader`](/api/bosdyn-core/bddf/message_reader?id=messagereader) | [bosdyn-core/bddf/message_reader](/api/bosdyn-core/bddf/message_reader) |
| [`PodSeriesReader`](/api/bosdyn-core/bddf/pod_series_reader?id=podseriesreader) | [bosdyn-core/bddf/pod_series_reader](/api/bosdyn-core/bddf/pod_series_reader) |
| [`PodSeriesWriter`](/api/bosdyn-core/bddf/pod_series_writer?id=podserieswriter) | [bosdyn-core/bddf/pod_series_writer](/api/bosdyn-core/bddf/pod_series_writer) |
| [`ProtobufSeriesWriter`](/api/bosdyn-core/bddf/protobuf_series_writer?id=protobufserieswriter) | [bosdyn-core/bddf/protobuf_series_writer](/api/bosdyn-core/bddf/protobuf_series_writer) |
| [`ProtobufChannelReader`](/api/bosdyn-core/bddf/protobuf_channel_reader?id=protobufchannelreader) | [bosdyn-core/bddf/protobuf_channel_reader](/api/bosdyn-core/bddf/protobuf_channel_reader) |
| [`ProtobufReader`](/api/bosdyn-core/bddf/protobuf_reader?id=protobufreader) | [bosdyn-core/bddf/protobuf_reader](/api/bosdyn-core/bddf/protobuf_reader) |
| [`StreamDataReader`](/api/bosdyn-core/bddf/stream_data_reader?id=streamdatareader) | [bosdyn-core/bddf/stream_data_reader](/api/bosdyn-core/bddf/stream_data_reader) |
