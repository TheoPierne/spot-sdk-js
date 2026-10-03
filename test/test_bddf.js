'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const { unlinkSync } = require('node:fs');
const { open } = require('node:fs/promises');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const process = require('node:process');
const test = require('node:test');

const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { PodTypeEnum } = require('../src/bosdyn/api/bddf_pb');
const { OperatorComment } = require('../src/bosdyn/api/data_buffer_pb');
const { RequestHeader, ResponseHeader } = require('../src/bosdyn/api/header_pb');
const { RobotIdRequest, RobotIdResponse } = require('../src/bosdyn/api/robot_id_pb');
const { buildProtoIndex, getProtoTypeName } = require('../src/bosdyn-client/util');
const {
  DataWriter,
  ProtobufSeriesWriter,
  PodSeriesWriter,
  StreamDataReader,
  DataReader,
  ProtobufReader,
  ProtobufChannelReader,
  PodSeriesReader,
  GrpcServiceWriter,
  GrpcReader,
} = require('../src/bosdyn-core/bddf');

const { nowNsec, nowTimestamp, timestampToNsecBigInt, nsecToTimestamp } = require('../src/bosdyn-core/util');

function getTempDir() {
  if ('TEST_TMPDIR' in process.env) {
    return process.env.TEST_TMPDIR;
  }
  return tmpdir();
}

test('write_read', async () => {
  const fileAnnotations = { robot: 'spot', individual: 'spot-BD-99990001' };
  const channelAnnotations = { ccc: '3', d: '4444' };

  const filename = join(getTempDir(), 'test1.bdf');

  const series1Type = 'bosdyn/test/1';
  const series1Spec = { channel: 'channel_a' };
  const series1ContentType = 'text/plain';
  const series1AdditionalIndexes = ['idxa', 'idxb'];

  const timestampNsec = nowNsec();
  const expectedTimestamp = nsecToTimestamp(timestampNsec);
  const msgData = 'This is some data';

  const operatorMessage = new OperatorComment().setMessage('End of test').setTimestamp(nowTimestamp());

  const podSeriesType = 'bosdyn/test/pod';
  const podSpec = { varname: 'test_var' };

  {
    const outfile = await open(filename, 'w');
    const dataWriter = new DataWriter(outfile.createWriteStream(), fileAnnotations);

    const series1Index = dataWriter.addMessageSeries(
      series1Type,
      series1Spec,
      series1ContentType,
      'test_type',
      false,
      channelAnnotations,
      series1AdditionalIndexes,
    );

    dataWriter.writeData(series1Index, timestampNsec, msgData, [1, 2]);

    const protoWriter = new ProtobufSeriesWriter(dataWriter, OperatorComment);
    // The nanoseconds as BigInt are exact, like timestamp_to_nsec() in Python.
    protoWriter.write(timestampToNsecBigInt(operatorMessage.getTimestamp()), operatorMessage);

    const podWriter = new PodSeriesWriter(dataWriter, podSeriesType, podSpec, PodTypeEnum.TYPE_FLOAT32, null, {
      units: 'm/s^2',
    });

    for (const val of [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) {
      podWriter.write(timestampNsec, val);
    }

    await dataWriter.close();
    await outfile.close();
  }

  {
    const infile = await open(filename, 'r');
    const dataReader = await DataReader.create({ infile });

    assert.ok(dataReader.version.getMajorVersion() === 1);
    assert.ok(dataReader.version.getMinorVersion() === 0);
    assert.ok(dataReader.version.getPatchLevel() === 0);
    assert.deepStrictEqual(Object.fromEntries(dataReader.annotations.toObject()), fileAnnotations);

    const seriesBlockIndex = await dataReader.seriesBlockIndex(0);

    assert.deepStrictEqual(
      seriesBlockIndex.getBlockEntriesList()[0].getTimestamp().toObject(),
      expectedTimestamp.toObject(),
    );
    // The int64 additional indexes are exact decimal strings, like the other 64 bits fields (JS_STRING_FIELDS of
    // build.js): the ints of Python.
    assert.ok(seriesBlockIndex.getBlockEntriesList()[0].getAdditionalIndexesList()[0] === '1');
    assert.ok(seriesBlockIndex.getBlockEntriesList()[0].getAdditionalIndexesList()[1] === '2');

    // Check that there are 3 series in the file.
    assert.ok(dataReader.fileIndex.getSeriesIdentifiersList().length === 3);

    // Read generic message data from the file.
    const seriesAIndex = dataReader.seriesSpecToIndex(series1Spec);
    assert.ok((await dataReader.numDataBlocks(seriesAIndex)) === 1);
    assert.ok((await dataReader.totalBytes(seriesAIndex)) === msgData.length);

    const [desc, timestamp, data] = await dataReader.read(seriesAIndex, 0);
    // The timestamps are read as BigInt.
    assert.ok(timestamp === BigInt(timestampNsec));
    assert.ok(data.equals(Buffer.from(msgData)));
    assert.deepStrictEqual(desc.getTimestamp().toObject(), expectedTimestamp.toObject());
    assert.ok(desc.getAdditionalIndexesList()[0] === '1');
    assert.ok(desc.getAdditionalIndexesList()[1] === '2');

    // Read a protobuf from the file.
    const protoReader = await ProtobufReader.create(dataReader);
    const operatorMessageReader = await ProtobufChannelReader.create(protoReader, OperatorComment);

    assert.ok((await operatorMessageReader.numMessages) === 1);

    const [timestamp_, protobuf] = await operatorMessageReader.getMessage(0);
    assert.deepStrictEqual(protobuf.toObject(), operatorMessage.toObject());
    assert.ok(timestamp_ === timestampToNsecBigInt(operatorMessage.getTimestamp()));

    // Read POD (float) data from the file.
    await assert.rejects(async () => await PodSeriesReader.create(dataReader, { spec: 'bogus' }));

    const podReader = await PodSeriesReader.create(dataReader, podSpec);

    assert.ok(podReader.podType.getPodType() === PodTypeEnum.TYPE_FLOAT32);
    assert.ok(podReader.seriesDescriptor.getAnnotationsMap().get('units') === 'm/s^2');
    assert.ok((await podReader.numDataBlocks) === 1);

    const [timestampSample, samples] = await podReader.readSamples(0);

    assert.ok(timestampSample === BigInt(timestampNsec));
    assert.deepStrictEqual(samples, [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    await dataReader.close();
    await infile.close();
  }

  {
    const infile = await open(filename, 'r');
    const dataReader = await StreamDataReader.create({ infile });

    assert.ok(dataReader.version.getMajorVersion() === 1);
    assert.ok(dataReader.version.getMinorVersion() === 0);
    assert.ok(dataReader.version.getPatchLevel() === 0);
    assert.deepStrictEqual(Object.fromEntries(dataReader.annotations.toObject()), fileAnnotations);

    let [desc_, sdesc_, data_] = await dataReader.readDataBlock();

    assert.deepStrictEqual(desc_.getTimestamp().toObject(), expectedTimestamp.toObject());
    assert.ok(desc_.getAdditionalIndexesList()[0] === '1');
    assert.ok(desc_.getAdditionalIndexesList()[1] === '2');
    assert.ok(sdesc_.getMessageType().getContentType() === series1ContentType);
    assert.ok(sdesc_.getMessageType().getTypeName() === 'test_type');
    assert.ok(data_.equals(Buffer.from(msgData)));

    [desc_, sdesc_, data_] = await dataReader.readDataBlock();

    // The generated messages register themselves in the global namespace proto (goog.exportSymbol).
    const typeIndex = buildProtoIndex(globalThis.proto.bosdyn.api, 'bosdyn.api');
    const typeName = getProtoTypeName(new OperatorComment(), typeIndex);

    assert.deepStrictEqual(desc_.getTimestamp().toObject(), operatorMessage.getTimestamp().toObject());
    assert.ok(sdesc_.getMessageType().getContentType() === 'application/protobuf');
    assert.ok(sdesc_.getMessageType().getTypeName() === typeName);
    const decMsg = OperatorComment.deserializeBinary(data_);
    assert.deepStrictEqual(decMsg.toObject(), operatorMessage.toObject());

    [desc_, sdesc_, data_] = await dataReader.readDataBlock();

    assert.deepStrictEqual(desc_.getTimestamp().toObject(), expectedTimestamp.toObject());
    assert.ok(sdesc_.getPodType().getPodType() === PodTypeEnum.TYPE_FLOAT32);

    assert.ok(!dataReader.eof);

    // The normal end of the file, like the EOFError of Python (any error passed: it hid the checksum errors).
    await assert.rejects(async () => await dataReader.readDataBlock(), /Normal end of bddf file/);

    assert.ok(dataReader.eof);

    // Check that there are 3 series in the file.
    assert.ok(dataReader.fileIndex?.getSeriesIdentifiersList().length === 3);
    assert.ok(dataReader.seriesBlockIndex(0).getBlockEntriesList()[0].getAdditionalIndexesList()[0] === '1');
    assert.ok(dataReader.seriesBlockIndex(0).getBlockEntriesList()[0].getAdditionalIndexesList()[1] === '2');

    assert.deepStrictEqual(
      dataReader.fileIndex.getSeriesIdentifiersList(),
      dataReader.streamFileIndex.getSeriesIdentifiersList(),
    );

    await dataReader.close();
    await infile.close();
  }

  unlinkSync(filename);
});

test('grpc_read_write', async () => {
  const fileAnnotations = { robot: 'spot', individual: 'spot-BD-99990001' };
  const serviceName = 'robot-id';

  const filename = join(getTempDir(), `${serviceName}.bddf`);

  const request = new RobotIdRequest().setHeader(
    new RequestHeader().setClientName('test_bddf').setRequestTimestamp(nowTimestamp()),
  );

  const any = new Any();
  any.pack(request.serializeBinary(), 'bosdyn.api.RobotIdRequest');

  const response = new RobotIdResponse().setHeader(
    new ResponseHeader().setRequest(any).setResponseTimestamp(nowTimestamp()),
  );

  {
    const outfile = await open(filename, 'w');
    const dataWriter = new DataWriter(outfile.createWriteStream(), fileAnnotations);

    const grpcLog = new GrpcServiceWriter(dataWriter, serviceName);
    grpcLog.logRequest(request);
    grpcLog.logResponse(response);

    await dataWriter.close();
    await outfile.close();

    const infile = await open(filename, 'r');
    const dataReader = await DataReader.create({ infile });

    const grpcReader = await GrpcReader.create(dataReader, [RobotIdRequest, RobotIdResponse]);

    // The generated messages register themselves in the global namespace proto (goog.exportSymbol).
    const typeIndex = buildProtoIndex(globalThis.proto.bosdyn.api, 'bosdyn.api');

    let protoReader = grpcReader.getProtoReader(getProtoTypeName(new RobotIdRequest(), typeIndex));

    assert.ok((await protoReader.numMessages) === 1);

    let [nsec, msg] = await protoReader.getMessage(0);
    assert.deepStrictEqual(msg.toObject(), request.toObject());
    assert.deepStrictEqual(nsecToTimestamp(nsec).toObject(), msg.getHeader().getRequestTimestamp().toObject());

    protoReader = grpcReader.getProtoReader(getProtoTypeName(new RobotIdResponse(), typeIndex));

    [nsec, msg] = await protoReader.getMessage(0);
    assert.deepStrictEqual(msg.toObject(), response.toObject());
    assert.deepStrictEqual(nsecToTimestamp(nsec).toObject(), msg.getHeader().getResponseTimestamp().toObject());

    await dataReader.close();
    await infile.close();
  }

  unlinkSync(filename);
});
