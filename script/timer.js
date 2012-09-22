//time.js

define(function(require,exports,module){
var timeoutFns = [];

	exports.on = function(type, fn){
		switch (type){
			case "timeout":
				timeoutFns.push(fn);
		}
	}
    
});
