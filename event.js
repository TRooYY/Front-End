var Event = {
	on: function(eventName, callback){
		if(!this.handles){
			//this.handles = {};
			Object.defineProperty(this, 'handles', {
				value: {},
				enumerable: false,
				configurable: true,
				writable: true
		})
		}
		if(! this.handles[eventName]){
			this.handles[eventName] = [];
		}
		this.handles[eventName].push(callback);
	},

	emit: function(eventName){
		if(this.handles[arguments[0]]){
			for (var i = 0; i <= this.handles[arguments[0]].length; i++) {
				this.handles[arguments[0]][i](arguments[1]);
			}
	}
}
