require([
	'src/assets/js/test', 
	'src/assets/js/molecules/Amounthandler'
	], function(test, Amounthandler){
	
	$(document).ready(function(){
		var amounthandlers = $('[data-bind="amounthandler"]');
		amounthandlers.each(function(){
			var boundAmounthandler = Amounthandler.bind($(this));
			boundAmounthandler.on('quantityChanged', function(newQuantity){
				console.log("quantityChanged event triggerd succesfully");
				console.log("new quantity is:", newQuantity);
			})
		})
	});

	/*test.loadTemplate('blog', function(template){
		console.log(template({blog: {
			posts: ['asfasdf', 'fasdfasdf']
		}}))
	});*/
})