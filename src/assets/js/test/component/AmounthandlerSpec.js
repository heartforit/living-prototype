define(["molecules/Amounthandler"], function(Amounthandler){
	
	describe("should test Amounthandler ", function(){


		it("is an object", function(){
			expect(typeof Amounthandler).toBe("object")
		})

		describe("start to test bindings", function(){
			
			var amounthandlerInstance;
			// setup an instance of Amounthandler
			beforeEach(function(done){
				// load fixutures
				var testContainer = $("<div id='testContainer'></div>");
				$("body").append(testContainer);
				// set fixutures
				$(testContainer).load( "base/dist/assembled/molecules/amounthandler.html", function() {
				  // bind Amounthandler
				  amounthandlerInstance = Amounthandler.bind(testContainer);
				  done();
				});
			})

			afterEach(function(){
		  	  $('#testContainer').empty();
		  	});

			it("should increase the amound", function(done){
				// then tirgger click
				amounthandlerInstance.getIncraseButton().trigger('click');
				

				// wait for the browser to calculate the result
				setTimeout(function(){
					expect(amounthandlerInstance.getQuantity()).toEqual(2);
					done();
				}, 500)
			})
		})


	})
})