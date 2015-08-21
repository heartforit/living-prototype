define(['jquery', 'handlebarsRuntime'], function($, handlebarsRuntime){
	console.log(handlebarsRuntime);
	return {
		sayHello: function(){
			console.log("hello world 2");
		},
		getBody: function(){
			return $('body');
		}
	}
})