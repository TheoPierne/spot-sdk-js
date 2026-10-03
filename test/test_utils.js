'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const test = require('node:test');

const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { StoreImageRequest } = require('../src/bosdyn/api/data_acquisition_store_pb');
const { ImageCapture, Image } = require('../src/bosdyn/api/image_pb');
const { GetLocalGridsResponse, LocalGridResponse, LocalGrid } = require('../src/bosdyn/api/local_grid_pb');
const { stripLargeBytesFields } = require('../src/bosdyn-client/server_util');
const { RobotTimeConverter, timestampToSec } = require('../src/bosdyn-core/util');

test('test_strip_large_bytes', () => {
  const req = new StoreImageRequest();
  const tempData = Buffer.from('mybytes', 'utf8');

  const image = new Image().setData(tempData).setCols(21);

  req.setImage(new ImageCapture().setImage(image));

  assert.ok(req.getImage().getImage().getData().length > 0);
  assert.ok(req.getImage().getImage().getCols() === 21);

  stripLargeBytesFields(req);

  assert.ok(req.getImage().getImage().getData().length === 0);
  assert.ok(req.getImage().getImage().getCols() === 21);
});

test('test_strip_large_bytes_repeated_msg', () => {
  const req = new GetLocalGridsResponse();
  const grid1 = new LocalGridResponse();
  const grid2 = new LocalGridResponse();

  grid1.setLocalGrid(new LocalGrid().setData(Buffer.from('mybytes', 'utf8')).setFrameNameLocalGridData('my_frame'));

  grid2.setLocalGrid(new LocalGrid().setData(Buffer.from('mybytes', 'utf8')).setFrameNameLocalGridData('my_frame'));

  req.setLocalGridResponsesList([grid1, grid2]);

  for (const g of req.getLocalGridResponsesList()) {
    assert.ok(g.getLocalGrid().getData().length > 0);
    assert.ok(g.getLocalGrid().getFrameNameLocalGridData() === 'my_frame');
  }

  stripLargeBytesFields(req);

  for (const g of req.getLocalGridResponsesList()) {
    assert.ok(g.getLocalGrid().getData().length === 0);
    assert.ok(g.getLocalGrid().getFrameNameLocalGridData() === 'my_frame');
  }
});

test('time_converter', () => {
  const converter = new RobotTimeConverter(100);
  const timestamp = converter.robotTimestampFromLocalNsecs(100);

  assert.ok(timestamp.getNanos() === 200);
  assert.ok(timestamp.getSeconds() === 0);

  const timestamp2 = converter.robotTimestampFromLocalSecs(100);

  assert.ok(timestamp2.getNanos() === 100);
  assert.ok(timestamp2.getSeconds() === 100);
});

test('timestamp_conversion', () => {
  const sec = timestampToSec(new Timestamp().setSeconds(2).setNanos(5 * 10 ** 8));
  assert.ok(sec === 2.5);
});
