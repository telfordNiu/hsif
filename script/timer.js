//time.js

define(function(require,exports,module){
var timeoutFns = [];
var timeStar = 60;

	exports.on = function(type, fn){
		switch (type){
            case "timeout":
                timeoutFns.push(fn);
                break;
		}
	}

    exports.init = function(){
        setTimeout(function(){
            for(var n = 0 ; n < timeoutFns ; n++){
                timeoutFns[n] && timeoutFns[n](timeStar--);
//                timeoutFns.pop(timeoutFns[n]);
            }
        },1000);
    }

    exports.add = function(num,fn){
        var timeStar = timeStar + parseInt(num,10);
        fn && fn(timeStar);
    }
});
