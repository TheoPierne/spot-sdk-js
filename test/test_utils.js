'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const { StoreImageRequest } = require('../src/bosdyn/api/data_acquisition_store_pb');
const { ImageCapture, Image } = require('../src/bosdyn/api/image_pb');
const { stripLargeBytesFields } = require('../src/bosdyn-client/server_util');
const { GetLocalGridsResponse, LocalGridResponse, LocalGrid } = require('../src/bosdyn/api/local_grid_pb');

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
  
  grid1.setLocalGrid(
    new LocalGrid().setData(Buffer.from('mybytes', 'utf8')).setFrameNameLocalGridData('my_frame')
  );
  
  grid2.setLocalGrid(
    new LocalGrid().setData(Buffer.from('mybytes', 'utf8')).setFrameNameLocalGridData('my_frame')
  );
  
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
