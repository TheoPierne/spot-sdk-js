const { Worker, isMainThread, workerData, parentPort } = require('node:worker_threads');
const { setTimeout: sleep } = require('node:timers/promises');

class TokenManager {

    /**
    * Create an instance of TokenManager's class.
    * @param {object} robot Robot object.
    * @param {number} [timestamp=null] The date in timestamp to use.
    */
    constructor(robot, timestamp = null) {
    	this.robot = robot;
    	this._last_timestamp = timestamp || Date.now();

    	this._loopStart = true;
    	// this._loop = setImmediate(this.update.bind(this)).unref();
    }

    is_alive() {
    	return this._loopStart;
    }

    stop() {
    	// clearImmediate(this._loop);
    	this._loopStart = false;
    }

    /**
    * Refresh the user token as needed.
    */
    async update() {
    	const USER_TOKEN_REFRESH_TIME_DELTA = 3_600;
    	const USER_TOKEN_RETRY_INTERVAL_START = 1_000;

    	let retry_interval = USER_TOKEN_RETRY_INTERVAL_START;
    	while (this._loopStart) {
    		let elapsed_time = Date.now() - this._last_timestamp;
    		if (elapsed_time >= USER_TOKEN_REFRESH_TIME_DELTA) {

    			try {
    				await this.robot.authenticate_with_token(this.robot.user_token);
    			} catch (e) {
    				if (e instanceof WriteFailedError) {
    					console.error('[TokenManager] Failed to save the token to the cache. Continuing without caching.');
    				} else if (e instanceof InvalidTokenError || e instanceof ResponseError || e instanceof RpcError) {
    					console.error(`[TokenManager] Error refreshing the token. Retry in ${retry_interval}`);
    					await sleep(retry_interval);
    					retry_interval = Math.min(2 * retry_interval, USER_TOKEN_REFRESH_TIME_DELTA);
    					continue;
    				}
    			}

    			retry_interval = USER_TOKEN_RETRY_INTERVAL_START;
    			this._last_timestamp = Date.now();
    			elapsed_time = USER_TOKEN_REFRESH_TIME_DELTA;
    		}
    		await sleep(elapsed_time);
    	}
    	console.debug(`[TokenManager] Shutting down monitoring of token belonging to robot ${this.robot.address}`);
    }
};


if (isMainThread) {

	class TokenManagerRunner {
		constructor(robot, timestamp){
			this.runner = new TokenManager(robot, timestamp);
			console.log(this.runner)
			this.worker = new Worker(__filename, {workerData: {runner: this.runner}});
			this._stop = false;
		}

		is_alive(){
			return !this._stop;
		}

		stop(){
			this._stop = true;
			this.worker.postMessage({t: 'stopUpdate'});
			return this.worker.terminate();
		}

		update(){
			this.worker.postMessage({t: 'startUpdate'});
		}
	}

	module.exports = {TokenManager: TokenManagerRunner};

	console.log('Outside Worker !', isMainThread);
} else {
	console.log('Inside Worker !', isMainThread);

	const {runner} = workerData;
	Object.setPrototypeOf(runner, TokenManager.prototype)

	parentPort.on('message', e => {
		if(e.t === 'startUpdate'){
			runner.update();
		}else if(e.t === 'stopUpdate'){
			runner.stop();
		}
	});
}