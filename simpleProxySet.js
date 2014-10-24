require('harmony-reflect');

var awesemeoThing= {};
var proxiedThing = new Proxy(awesemeoThing,{
	set: function(target, name, value){
		console.log("In Set Proxy");
		target[name] = value;
	}
});

proxiedThing.any = 'thing';
