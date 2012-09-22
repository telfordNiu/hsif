//主入口脚本

seajs.config({
    alias:{
    }
});

define(function(require,exports,module){
	var time = require('./timer')
	var module = require('./module');

	time.on("timeout", function(num){

	})

	module.init();
    
});
