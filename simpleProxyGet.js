require('harmony-reflect');

var awesemeoThing= {};
var proxiedThing = new Proxy(awesemeoThing,{
	get: function(target, name){
		console.log("In Get Proxy");
		return target[name];
	}
});

var x = proxiedThing.any;
