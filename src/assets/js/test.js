define(['jquery', 'handlebarsRuntime'], function($, handlebarsRuntime){
	console.log(handlebarsRuntime);
	window.Handlebars = handlebarsRuntime;

	handlebarsRuntime.registerHelper('bold', function(options) {
	  return new Handlebars.SafeString(
	      '<div class="mybold">'
	      + options.fn(this)
	      + '</div>');
	});
	
	return {
		sayHello: function(){
			console.log("hello world 2");
		},
		getBody: function(){
			return $('body');
		},
		loadTemplate: function(name, cb){
			$.getScript( "templates/"+ name +".js" )
			  .done(function( script, textStatus ) {
			  	var template = eval(script);
			    cb(template);
			  })
			  .fail(function( jqxhr, settings, exception ) {
			    console.log( "Triggered ajaxError handler." );
			    console.log(jqxhr, settings, exception)
			});
		}
	}
})