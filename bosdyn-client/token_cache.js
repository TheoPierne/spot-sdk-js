const {join} = require('path');
const {homedir, constant} = require('os');
const tmp = require('tmp');
const {readFileSync, unlinkSync, readdirSync, writeFileSync, existsSync, mkdirSync, chmodSync} = require('fs');


class TokenCacheError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'TokenCacheError';
	}
};

class ClearFailedError extends TokenCacheError {
	constructor(msg){
		super(msg);
		this.name = 'ClearFailedError';
	}
};

class NotInCacheError extends TokenCacheError {
	constructor(msg){
		super(msg);
		this.name = 'NotInCacheError';
	}
};

class WriteFailedError extends TokenCacheError {
	constructor(msg){
		super(msg);
		this.name = 'WriteFailedError';
	}
};


function atomicFileWrite(data, filename, permissions=0o600){
	const temp = tmp.fileSync({ mode: permissions });
	writeFileSync(temp.name, data);

	const original_umask = process.umask(0);

	try{
		const directory = path.dirname(filename);
		if(!existsSync(directory)){
			mkdirSync(directory, {mode: 0o700});
		}
	}catch(e){
		console.error(e);
	}

	process.umask(original_umask);

	try{
		copyFileSync(temp.name, filename);
	}catch(e){
		if(e.errno != constant.errno.EEXIST){
			throw e;
		}
		unlinkSync(filename);
        copyFileSync(temp.name, filename);
	}

	temp.removeCallback();
	chmodSync(filename, permissions);
}

/**
* No-op default cache that serves as an interface.
* @class TokenCache
*/
class TokenCache {
	constructor(){
	};

	read(name){
		throw new NotInCacheError();
	};

	clear(name){
		return;
	};

	write(name, token){
		return;
	};

	match(name){
		return [];
	};
};

/**
* Handles transfer from in memory tokens to arbitrary storage e.g. filesystem.
* @class TokenCacheFilesystem
*/
class TokenCacheFilesystem {

	/**
    * @param {string} [cache_directory]
    */
	constructor(cache_directory = `${homedir()}/.bosdyn/user_tokens`){
		this.directory = join(cache_directory);
	}

	/**
    * @param {string} name
    * @return {string|Buffer}
    * @throws {NotInCacheError}
    */
	read(name){
		const filename = this._name_to_filename(name);
		try {
			const data = readFileSync(filename, 'utf8');
			return data;
		}catch(err){
			throw new NotInCacheError(err);
		}
	}

	/**
    * @param {string} name
    * @return {void}
    * @throws {ClearFailedError}
    */
	clear(name){
		const filename = this._name_to_filename(name);
		try{
			unlinkSync(filename);
		}catch(err){
			throw new ClearFailedError(err);
		}
	}

	/**
    * @param {string} name
    * @param {string} token
    * @return {void}
    * @throws {WriteFailedError}
    */
	write(name, token){
		const filename = this._name_to_filename(name);
		try{
			atomicFileWrite(token, filename);
		}catch(err){
			throw new WriteFailedError(err);
		}
	}

	/**
    * @param {string} name
    * @return {Array<string>|array}
    */
	match(name){
		const matching_tokens = [];
		readdirSync(this.directory).forEach(e => {
			if(e == name || e.includes(name)){
				matching_tokens.push(this._filename_to_name(e));
			}
		});
		return matching_tokens;
	}

	/**
    * @param {string} name
    * @return {string}
    * @private
    */
	_name_to_filename(name){
		return `${join(this.directory, name)}.jwt`;
	}

	/**
    * @param {string} filename
    * @return {string}
    * @private
    */
	_filename_to_name(filename){
		return join(filename).split('.')[0];
	}
};

module.exports = {
	TokenCache, 
	TokenCacheFilesystem
};