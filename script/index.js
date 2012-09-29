//主入口脚本

seajs.config({
    alias:{
    }
});

define(function(require,exports,module){
	var time = require('./timer')
	var module = require('./module');
	var sum = require('./sum');

	time.on("timeout", function(num){

	})

	module.init();

	sum.to(2000)
    
});
