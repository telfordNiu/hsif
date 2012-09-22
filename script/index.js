//主入口脚本

seajs.config({
    alias:{
    }
});

define(function(require,exports,module){

	var module = require('./module');

	module.init();
    
});
