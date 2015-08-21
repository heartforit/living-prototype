require(['src/assets/js/test'], function(test){
	console.log("bootstrap", test);
	console.log('body is: ', test.getBody())
	test.loadTemplate('blog', function(template){
		console.log(template({blog: {
			posts: ['asfasdf', 'fasdfasdf']
		}}))
	});
})