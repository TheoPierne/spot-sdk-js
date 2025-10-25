'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const imagePb = require('../src/bosdyn/api/image_pb');
const { ImageServiceClient, ImageServiceService } = require('../src/bosdyn/api/image_service_grpc_pb');
const serviceCustomizationPb = require('../src/bosdyn/api/service_customization_pb');
const { TimedOutError, UnsetStatusError, CustomParamError } = require('../src/bosdyn-client/exceptions');
const { ImageClient, UnknownImageSourceError, SourceDataError, ImageDataError } = require('../src/bosdyn-client/image');

class MockImageServicer extends ImageServiceClient {
  constructor(rpcDelay = 0, imageSources = [], imageResponses = [], expectedImageSources = []) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
    this._imageSources = imageSources;
    this._expectedImageSources = expectedImageSources;
    this._imageResponses = imageResponses;
  }

  async listImageSources({ request }, callback) {
    const res = new imagePb.ListImageSourcesResponse();
    helpers.addCommonHeader(res, request);
    if (this._imageSources) {
      res.setImageSourcesList(this._imageSources);
    }

    if (this._rpcDelay > 0) {
      await sleep(this._rpcDelay);
    }

    return callback(null, res);
  }

  async getImage({ request }, callback) {
    const res = new imagePb.GetImageResponse();
    helpers.addCommonHeader(res, request);

    assert.ok(this._expectedImageSources.length === request.getImageRequestsList().length);

    for (const imageRequest of request.getImageRequestsList()) {
      assert.ok(this._expectedImageSources.includes(imageRequest.getImageSourceName()));
    }

    if (this._imageResponses) {
      res.setImageResponsesList(this._imageResponses);
    }

    if (this._rpcDelay > 0) {
      await sleep(this._rpcDelay);
    }

    return callback(null, res);
  }
}

function _setup(rpcDelay = 0, imageSources = [], imageResponses = [], expectedImageSources = []) {
  const client = new ImageClient();
  const service = new MockImageServicer(rpcDelay, imageSources, imageResponses, expectedImageSources);
  const server = helpers.setupClientAndService(client, {
    servicer: ImageServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_list_sources_empty', async () => {
  const { client, server } = _setup();
  const result = await client.listImageSources();
  assert.ok(result.length === 0);

  server.forceShutdown();
});

test('test_list_sources_timeout', async () => {
  const timeout = 100;
  const { client, server } = _setup(timeout * 2);

  try {
    await client.listImageSources({ timeout });
  } catch (err) {
    assert.ok(err instanceof TimedOutError);
  } finally {
    server.forceShutdown();
  }
});

test('test_list_sources_single', async () => {
  const imageSource = new imagePb.ImageSource();
  const { client, server } = _setup(0, [imageSource]);
  const res = await client.listImageSources();
  assert.ok(res.length === 1);

  server.forceShutdown();
});

test('test_list_sources_multiple', async () => {
  const imageSourceA = new imagePb.ImageSource();
  const imageSourceB = new imagePb.ImageSource();
  const { client, server } = _setup(0, [imageSourceA, imageSourceB]);
  const res = await client.listImageSources();
  assert.ok(res.length === 2);

  server.forceShutdown();
});

test('test_get_image_sources_empty', async () => {
  const { client, server } = _setup();
  await client.getImageFromSources([]);

  server.forceShutdown();
});

test('test_get_image_source_unset', async () => {
  const imageResponse = new imagePb.ImageResponse();
  const { client, server } = _setup(0, [], [imageResponse], ['foo']);

  try {
    await client.getImageFromSources(['foo']);
  } catch (err) {
    assert.ok(err instanceof UnsetStatusError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_image_source_ok', async () => {
  const imageResponse = new imagePb.ImageResponse().setStatus(imagePb.ImageResponse.Status.STATUS_OK);
  const { client, server } = _setup(0, [], [imageResponse], ['foo']);

  const res = await client.getImageFromSources(['foo']);
  assert.ok(res.length === 1);

  server.forceShutdown();
});

test('test_get_image_source_unknown_camera', async () => {
  const imageResponse = new imagePb.ImageResponse().setStatus(imagePb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA);
  const { client, server } = _setup(0, [], [imageResponse], ['foo']);

  try {
    await client.getImageFromSources(['foo']);
  } catch (err) {
    assert.ok(err instanceof UnknownImageSourceError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_image_source_unknown_and_known_camera', async () => {
  const imageResponseUnknown = new imagePb.ImageResponse().setStatus(
    imagePb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA,
  );
  const imageResponseOk = new imagePb.ImageResponse().setStatus(imagePb.ImageResponse.Status.STATUS_OK);
  const { client, server } = _setup(0, [], [imageResponseOk, imageResponseUnknown], ['foo', 'bar']);

  try {
    await client.getImageFromSources(['foo', 'bar']);
  } catch (err) {
    assert.ok(err instanceof UnknownImageSourceError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_image_source_data_error', async () => {
  const imageResponse = new imagePb.ImageResponse().setStatus(imagePb.ImageResponse.Status.STATUS_SOURCE_DATA_ERROR);
  const { client, server } = _setup(0, [], [imageResponse], ['foo']);

  try {
    await client.getImageFromSources(['foo']);
  } catch (err) {
    assert.ok(err instanceof SourceDataError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_image_image_data_error', async () => {
  const imageResponse = new imagePb.ImageResponse().setStatus(imagePb.ImageResponse.Status.STATUS_IMAGE_DATA_ERROR);
  const { client, server } = _setup(0, [], [imageResponse], ['foo']);

  try {
    await client.getImageFromSources(['foo']);
  } catch (err) {
    assert.ok(err instanceof ImageDataError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_image_custom_params_errror', async () => {
  const imageResponse = new imagePb.ImageResponse().setStatus(imagePb.ImageResponse.Status.STATUS_CUSTOM_PARAMS_ERROR);
  imageResponse.setCustomParamError(
    new serviceCustomizationPb.CustomParamError()
      .setStatus(serviceCustomizationPb.CustomParamError.Status.STATUS_UNSUPPORTED_PARAMETER)
      .setErrorMessagesList(['Bad param added.']),
  );
  const { client, server } = _setup(0, [], [imageResponse], ['foo']);

  try {
    await client.getImageFromSources(['foo']);
  } catch (err) {
    assert.ok(err instanceof CustomParamError);
    assert.ok(
      err.customParamError.getStatus() === serviceCustomizationPb.CustomParamError.Status.STATUS_UNSUPPORTED_PARAMETER,
    );
  } finally {
    server.forceShutdown();
  }
});
