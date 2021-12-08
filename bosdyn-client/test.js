class BaseClient {
	constructor(){
		console.log(this, this.constructor.a, this.prototype, this.__proto__)
	}
}

class RobotId extends BaseClient {
	static a = 'oui';
	constructor(){
		super();
	}
}

new RobotId();