define(['jquery'], function($){
	
	return {
		sayHello: function(){
			console.log("hello world 2");
		},
		getBody: function(){
			return $('body');
		}
	}
})