'use strict';

const net = require('node:net');
const tls = require('node:tls');
const { Buffer } = require('node:buffer');

const SERVER_RECONNECT_DELAY = 60000;
const SOCKET_TIMEOUT = 10000;
const SOCKET_MAX_RECV_TIMEOUTS = 12;

const DEFAULT_NTRIP_SERVER = '';
const DEFAULT_NTRIP_PORT = 2101;
const DEFAULT_NTRIP_TLS_PORT = 2102;

class NtripClientParams {
  constructor(
    server = DEFAULT_NTRIP_SERVER,
    port = DEFAULT_NTRIP_PORT,
    user = '',
    password = '',
    mountPoint = '',
    tls = false
  ) {
    this.server = server;
    this.port = port;
    this.user = user;
    this.password = password;
    this.mountPoint = mountPoint;
    this.tls = tls;
  }
}

class NtripClient {
  constructor(device, params, logger) {
    this.device = device;
    this.host = params.server;
    this.port = params.port;
    this.user = params.user;
    this.password = params.password;
    this.mountPoint = params.mountPoint;
    this.tls = params.tls;

    this.streaming = false;

    this.logger = logger;
  }

  /**
   * Make a connection request to an NTRIP server.
   * @returns {Buffer}
   */
  makeRequest() {
    const authStr = Buffer.from(`${this.user}:${this.password}`, 'utf-8').toString('base64');

    const lines = [
      `GET /${this.mountpoint} HTTP/1.1`,
      `Host: ${this.host}:${this.port}`,
      'User-Agent: NTRIP Node.js Client',
      'Accept: */*',
      `Authorization: Basic ${authStr}`,
      'Connection: close',
      '',
      ''
    ];

    const request = lines.join('\r\n');

    return Buffer.from(request, 'utf8');
  }

  /**
   * Start streaming data from an NTRIP server to a GPS receiver.
   */
  startStream() {
    if (this.streaming) {
      this.stopStream();
    }

    this.streaming = true;

    this._streamDataWorker();
  }

  stopStream() {
    this.streaming = false;
  }

  isStreaming() {
    return this.streaming;
  }

  sendGGA(gga) {
    if (!this.sock) return false;
    try {
      this.sock.write(Buffer.from(gga, 'utf-8'));
      return true;
    } catch (err) {
      this.logger.warning('Error sending GGA');
      return false;
    }
  }

  async createIcySession() {
    return new Promise((resolve) => {
      let sock;

      const onError = (err) => {
        this.logger.warning(`Connection error to ${this.host}:${this.port}`, err);
        cleanup();
        resolve(false);
      };

      const onTimeout = () => {
        this.logger.warning('Connection timeout');
        cleanup();
        resolve(false);
      };

      const cleanup = () => {
        if (sock) {
          sock.removeAllListener();
          sock.destroy();
        }
      };

      if (this.tls) {
        this.logger.info('Using secure connection');
        sock = tls.connect({
          host: this.host,
          port: this.port,
          servername: this.host,
          timeout: SOCKET_TIMEOUT
        }, () => {
          this.logger.info('Connected to NTRIP Server (TLS).');
          sendRequest();
        });
      } else {
        sock = net.createConnection({
          host: this.host,
          port: this.port,
          timeout: SOCKET_TIMEOUT,
        }, () => {
          this.logger.info('Connected to NTRIP Server.');
          sendRequest();
        });
      }

      sock.on('error', onError);
      sock.on('timeout', onTimeout);

      const sendRequest = () => {
        this.logger.info('Sending NTRIP Request.');
        sock.write(this.makeRequest());

        sock.once('data', (chunk) => {
          let parts = chunk.toString('binary').split('\r\n');
          if (parts.length < 2) {
            this.logger.error('Invalid response from server:', chunk);
            return resolve(false);
          }

          const statusLine = parts.shift();
          this.logger.info(statusLine);
          const statusCode = statusLine.split(' ')[1];
          if (statusCode !== '200') {
            this.logger.error(`HTTP Error: ${statusLine}, retrying in ${SERVER_RECONNECT_DELAY / 1000}s`);
            cleanup();
            setTimeout(() => resolve(false), SERVER_RECONNECT_DELAY);
            return;
          }
          this.logger.info('NTRIP Request Response received.');

          let idx = parts.indexOf('');
          const body = idx >= 0
            ? Buffer.from(parts.slice(idx + 1).join('\r\n'), 'binary')
            : Buffer.alloc(0);

          if (body.length) {
            this.handleNtripData(body);
          }

          sock.removeListener('error', onError);
          sock.removeListener('timeout', onTimeout);
          this.sock = sock;
          resolve(true);
        });
      };
    });
  }

  async streamData() {
    const ok = await this.createIcySession();

    if (!ok) {
      this.logger.error('Failed to create NTRIP Rev1 ICY session.');
      return;
    }

    let timeouts = 0;
    let hasData = false;

    while (this.streaming && timeouts < SOCKET_MAX_RECV_TIMEOUTS) {
      try {
        const chunk = await new Promise((res, rej) => {
          this.sock.once('data', res);
          this.sock.once('timeout', () => rej(new Error('timeout')));
          this.sock.once('error', rej);
        });

        if (chunk && chunk.length) {
          timeouts = 0;
          this.handleNtripData(chunk);
          if (!hasData) {
            this.logger.info('Received NTRIP data.');
            hasData = true;
          }
        } else {
          this.logger.warning('Connection closed by server');
          break;
        }
      } catch (err) {
        if (err.message === 'timeout') {
          this.logger.exception('Socket timeout.');
          timeouts++;
        } else {
          this.logger.warning(`Error receiving data: ${err.message}`);
        }
      }
    }

    this.logger.info('NTRIP stream closed. Closing socket.');

    try {
      this.sock.end();
    } catch (e) { /* ignore */ }

    this.sock = null;
    this.logger.info('NTRIP client finished.');
  }

  async _streamDataWorker() {
    while (this.streaming) {
      await this.streamData();

      if (this.streaming) {
        await new Promise(r => setTimeout(r, SERVER_RECONNECT_DELAY));
      }
    }
  }

  handleNtripData(data) {
    // Forward to the device
    try {
      this.device.write(data);
    } catch (e) {
      this.logger.error('Error forwarding NTRIP data to device', e);
    }
  }

  handleNmeaGga(sentence) {
    const fields = sentence.split(',');
    if (fields.length < 7) return;
    const quality = parseInt(fields[6] || '0', 10);
    if (![0, 6].includes(quality)) {
      const ok = this.sendGGA(sentence + '\r\n');
      if (!ok) {
        // si envoi échoue, on redémarre le stream
        this.startStream();
      }
    }
  }
}

module.exports = {
  NtripClient,
  NtripClientParams,
};
