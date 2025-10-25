'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const headerPb = require('../src/bosdyn/api/header_pb');
const audioPb = require('../src/bosdyn/api/spot_cam/audio_pb');
const { AudioServiceClient, AudioServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { AudioClient } = require('../src/bosdyn-client/spot_cam/audio');

class MockAudioService extends AudioServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async listSounds(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new audioPb.ListSoundsResponse();
    response.addSounds(new audioPb.Sound().setName('good'));
    response.addSounds(new audioPb.Sound().setName('bad'));

    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async setVolume(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new audioPb.SetVolumeResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async getVolume(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new audioPb.GetVolumeResponse().setVolume(50);
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async playSound(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new audioPb.PlaySoundResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async deleteSound(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new audioPb.DeleteSoundResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async loadSound(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new audioPb.LoadSoundResponse();

    let data = [];
    let firstRequestHeader = null;

    call.on('data', request => {
      firstRequestHeader = firstRequestHeader || request;
      data = data.concat(...request.getData().getData());
    });

    call.on('end', () => {
      const originalLength = data.length;
      let char = '';

      if (Buffer.isBuffer(data)) {
        data = data.toString();
      } else {
        data = String.fromCharCode(...data);
      }

      char = data.charAt(0);

      if (
        (char === 'a' && originalLength === 10) ||
        (char === 'b' && originalLength === 100) ||
        (char === 'c' && originalLength === 200)
      ) {
        helpers.addCommonHeader(response, firstRequestHeader);
      } else {
        helpers.addCommonHeader(
          response,
          firstRequestHeader,
          headerPb.CommonError.Code.CODE_INVALID_REQUEST,
          `Unexpected test data ${data.length}`,
        );
      }

      callback(null, response);
    });
  }
}

function _setup(rpcDelay = 0) {
  const client = new AudioClient();
  const service = new MockAudioService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: AudioServiceService,
    service: service,
  });
  return { client, service, server };
}

function _createFakeSound(name = 'fake-sound') {
  return new audioPb.Sound().setName(name);
}

test('test_list_sounds', async () => {
  const { client, server } = _setup();
  const sounds = await client.listSounds();
  assert.ok(sounds.length === 2);
  assert.ok(sounds[0].getName() === 'good');
  assert.ok(sounds[1].getName() === 'bad');
  server.forceShutdown();
});

test('test_set_volume', async () => {
  const { client, server } = _setup();
  await client.setVolume(100);
  server.forceShutdown();
});

test('test_play_sound', async () => {
  const { client, server } = _setup();
  const sound = _createFakeSound();
  await client.playSound(sound, 100);
  server.forceShutdown();
});

test('test_play_sound_no_gain', async () => {
  const { client, server } = _setup();
  const sound = _createFakeSound();
  await client.playSound(sound);
  server.forceShutdown();
});

test('test_delete_sound', async () => {
  const { client, server } = _setup();
  const sound = _createFakeSound();
  await client.deleteSound(sound);
  server.forceShutdown();
});

test('test_load_sound_small_chunk', async () => {
  const { client, server } = _setup();
  const sound = _createFakeSound();
  const data = Buffer.alloc(10, 'a');
  await client.loadSound(sound, data, 100);
  server.forceShutdown();
});

test('test_load_sound_exact_large_chunk', async () => {
  const { client, server } = _setup();
  const sound = _createFakeSound();
  const data = Buffer.alloc(100, 'b');
  await client.loadSound(sound, data, 100);
  server.forceShutdown();
});

test('test_load_sound_large_chunk', async () => {
  const { client, server } = _setup();
  const sound = _createFakeSound();
  const data = Buffer.alloc(200, 'c');
  await client.loadSound(sound, data, 100);
  server.forceShutdown();
});
