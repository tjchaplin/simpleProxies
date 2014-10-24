require('harmony-reflect');

var Logger = function(){
	return function(target, receiver, args) {
		var startTime = new Date();
		var result = target(args);
		var endTime = new Date();
		console.log("called " + target.name + " " + Date() + " with params:" + args + " executed in:" + (endTime - startTime));
		return result;
	};
};

@Logger
function simpleFunction () {
	return 'any';
}

var createProxy = function(anyFunction){
	return new Proxy(anyFunction,
					{
						apply : anyFunction.annotations[0]
					});
};

simpleFunction = createProxy(simpleFunction);
simpleFunction();