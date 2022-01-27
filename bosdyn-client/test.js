/*const { Worker, isMainThread, workerData } = require('node:worker_threads');

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(__filename, {workerData: {a: 1}});
  console.log('Outside Worker !', isMainThread);
} else {
  console.log('Inside Worker !', isMainThread, workerData);
}*/

const {TokenManager} = require('./token_manager');

const a = new TokenManager({address: '127.0.0.1'});

a.stop().then(() => {
	console.log('Thread stop !');
});