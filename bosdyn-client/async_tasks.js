const {ResponseError} = require('./exceptions');

/**
* Manages a set of tasks which work by periodically calling an update() method.
* @class AsyncTasks
*/
class AsyncTasks {

	/**
    * @param {array} [tasks=null] List of tasks to manage.
    */
    constructor(tasks = null){
    	this._tasks = (tasks != null) ? tasks : [];
    }

	/**
	* Add a task to be managed by this object. 
    * @param task Task to add.
    * @return {void}
    */
    add_task(task){
    	this._tasks.push(task);
    }

	/**
	* Call this periodically to manage execution of tasks owned by this object.
	* @return {void}
	*/ 
	update(){
		for(const task of this._tasks){
			task.update();
		}
	}

};

/**
* Task to be accomplished using asynchronous GRPC calls.
* When it is time to run the task, an async GRPC call is run resulting in a FutureWrapper object.
* The FutureWrapper is monitored for completion, and then an action is taken in response.
* @class AsyncGRPCTask
*/
class AsyncGRPCTask {

	constructor(){
		this._last_call = 0;
		this._future = null;
	}

	/**
	* Override to start async grpc query and return future-wrapper for result.
	* @abstract
	*/ 
	_start_query(){

	}

	/**
	* Called on update() when no query is running to determine whether to start a new query.
	* @param {number} now_sec Time now in seconds.
	* @abstract
	*/ 
	_should_query(now_sec){

	}

	/**
	* Override to handle result of grpc query when it is available.
	* @param result Result to handle.
	* @abstract
	*/ 
	_handle_result(result){

	}

	/**
	* Override to handle any exception raised in handling GRPC result.
	* @param exception Error exception to handle.
	* @abstract
	*/ 
	_handle_error(exception){

	}

	/**
	* Call this periodically to manage execution of task represented by this object
	* @return {void}
	*/ 
	update(){
		const now_sec = Date.now();
		if(this._future != null){
			if(this._future.original_future.done()){
				try{
					this._handle_result(this._future.result());
				}catch(err){
					this._handle_error(err);
				}
			}
		}else if(this._should_query(now_sec)){
			this._last_call = now_sec;
			this._future = this._start_query();
		}
	}
};

/**
* Periodic task to be accomplished using asynchronous GRPC calls.
* When it is time to run the task, an async GRPC call is run resulting in a FutureWrapper object.
* The FutureWrapper is monitored for completion, and then an action is taken in response.
* @class AsyncPeriodicGRPCTask
* @extends AsyncGRPCTask
*/
class AsyncPeriodicGRPCTask extends AsyncGRPCTask {

	/**
	* @param {number} period_sec Time to wait in seconds between queries.
	*/
	constructor(period_sec){
		super();
		this._period_sec = period_sec;
	}

	/**
	* Check if it is time to query again.
	* @param now_sec Time now in seconds.
	* @return {boolean} True if it is time to query again based on now_sec, False otherwise.
	*/
	_should_query(now_sec){
		return (now_sec - this._last_call) > this._period_sec
	}

	/**
	* Override to start async grpc query and return future-wrapper for result.
	* @abstract
	*/
	_start_query(){

	}

	/**
	* Override to handle result of grpc query when it is available. 
	* @param result Result to handle.
	* @abstract
	*/
	_handle_result(result){

	}

	/**
	* Override to handle any exception raised in handling GRPC result. 
	* @param exception Error exception to handle.
	* @abstract
	*/
	_handle_error(exception){

	}
};

/**
* Query for robot data at some regular interval.
* @class AsyncPeriodicQuery
* @extends AsyncPeriodicGRPCTask
*/
class AsyncPeriodicQuery extends AsyncPeriodicGRPCTask {

	/**
	* @param {string} query_name Name of the query.
	* @param client SDK client for the query.
	* @param logger Logger to use for logging errors.
	* @param {number} period_sec Time in seconds between running the query.
	*/
	constructor(query_name, client, logger, period_sec){
		super(period_sec);
		this._query_name = query_name;
		this._client = client;
		this._logger = logger;
		this._proto = null;
	}

	/**
	* Override to start async grpc query and return future-wrapper for result.
	* @abstract
	*/
	_start_query(){

	}

	/**
	* Get latest response proto.
	*/
	get proto(){
		return this._proto;
	}

	/**
	* Handle result of grpc query when it is available.
	* @param result Result to handle.
	* @return {void}
	*/
	_handle_result(result){
		this._proto = result;
	}

	/**
	* Log exception.
	* @param exception Error exception to log.
	* @return {void}
	*/
	_handle_error(exception){
		this._logger.error(`Failure getting ${this._query_name}: ${exception}`);
	}

};

module.exports = {
	AsyncTasks,
	AsyncGRPCTask,
	AsyncPeriodicGRPCTask,
	AsyncPeriodicQuery
};