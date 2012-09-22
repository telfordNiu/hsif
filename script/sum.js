//sum.js计分模块

define(function(require,exports,module){

	var allSum = 0,
		elem = document.getElementById("sum"),
		timeman,
		interval = 1,
		targetSum = 0;


	function intervalFn(){
		if(allSum < targetSum){
			allSum++;
			exports.set(allSum);
		}
		else if(allSum < targetSum){
			allSum--;
			exports.set(allSum);
		}
		else{
			clearInterval(timeman);
			timeman = null;
		}
	}

	//动态设置分数值
	exports.to = function(num){
		if(timeman){
			clearInterval(timeman);
		}
		targetSum = num;
		timeman = setInterval(intervalFn, interval);
	}

	//直接设置分数值
	exports.set = function(num){
		elem && (elem.innerHTML = num);
		console.log(num);
		allSum = num;
	}

	exports.get = function(){
		return allSum;
	}

    
});
