require([
	'src/assets/js/test', 
	'src/assets/js/molecules/Amounthandler'
	], function(test, Amounthandler){
	
	//new Amounthandler().emit('setValue', {value: 0});
	//new Amounthandler().emit('setValue', {value: "0"});
	
	$(document).ready(function(){
		var amounthandlers = $('[data-bind="amounthandler"]');
		Amounthandler.bind(amounthandlers)
	});

	/*test.loadTemplate('blog', function(template){
		console.log(template({blog: {
			posts: ['asfasdf', 'fasdfasdf']
		}}))
	});*/
})