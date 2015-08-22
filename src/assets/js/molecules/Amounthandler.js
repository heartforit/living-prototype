define(['jquery', 'stabes', 'rxLite'], function($, Stapes, rxLite){

	var Module = Stapes.subclass({
        constructor : function() {
        	this.bindListeners();
        },
        setQuantityInput: function($el){
        	this.$el = $el;
        },
        bindListeners: function(){
        	var _that = this;
        	this.on({
			   	"increase": function($el){
			    	var currentQuantity = parseInt(_that.$el.val());
			    	currentQuantity++;
			    	_that.emit("quantity", currentQuantity);
			    },
			    "decrease": function($el){
			    	var currentQuantity = parseInt(_that.$el.val());
			    	currentQuantity--;
			    	_that.emit("quantity", currentQuantity)
			    },
			    "quantity": function(quantity){
			    	if(quantity === undefined || quantity === null){
			    		quantity = _that.$el.val();
			    	}

			    	quantity = parseInt(quantity);
			    	if(quantity < 1) return; 
			    	_that.$el.val(quantity)
			    	_that.emit("quantityChanged", quantity);
			    }
			});
        },
        
    });

    return {
    	bind: function(amounthandlers){
        	var _that = new Module();
			var bindings = amounthandlers.find('[data-bind]');
	        
	        bindings.each(function(){
	        		var $el = $(this);
	        		var binding = $el.data('bind');
	        		if(binding == "quantity"){
	        			_that.setQuantityInput($el);
	        		}

	        		if(binding == "quantity"){
	        			$el.keyup(function(e){
						    if(e.keyCode == 13){
						        _that.emit(binding, $el.val());
						    }
						});
	        		} else {
	        			$el.click(function(){
							_that.emit(binding);
						})
	        		}
		        			
	        	})
	        	return _that;
        	}
        };
})