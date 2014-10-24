require('harmony-reflect');

var awesemeoFunction = function(){};
var proxiedObject = new Proxy(awesemeoFunction,{
	apply: function(target, receiver, args){
		var startTime = new Date();
		var result = target(args);

		var endTime = new Date();

		console.log("called awesomeThing "+Date()+" with params:"+args+" executed in:"+(endTime-startTime));
		return result;
	}
});

proxiedObject();
