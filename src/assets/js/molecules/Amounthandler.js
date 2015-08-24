define(['jquery', 'stabes', 'rxLite'], function($, Stapes, rxLite){

	var _EVENT_INCREASE = 'increase';
	var _EVENT_DECREASE = 'decrease';
	var _EVENT_QUANTITY = 'quantity';
	var _EVENT_QUANTITY_CHANGED = 'quantityChanged';

	var Module = Stapes.subclass({
        constructor : function() {
        	this.bindListeners();
        },
        setQuantityInput: function($el){
        	this.$el = $el.eq(0);;
        },
        getQuantity: function(){
        	return parseInt(this.$el.val());
        },
        setIncraseButton: function($el){
        	this.$increaseButton = $el.eq(0);
        },
        setDecraseButton: function($el){
        	this.$decreaseButton = $el.eq(0);
        },
        getQuantityInput: function(){
        	return this.$el;
        },
        getIncraseButton: function(){
        	return this.$increaseButton;
        },
        getDecraseButton: function(){
        	return this.$decreaseButton;
        },
        bindListeners: function(){
        	var _that = this;
        	this.on({
			   	'increase': function(){
			    	var currentQuantity = _that.getQuantity();
			    	currentQuantity++;
			    	_that.emit(_EVENT_QUANTITY, currentQuantity);
			    },
			    'decrease': function(){
			    	var currentQuantity = _that.getQuantity();
			    	currentQuantity--;
			    	_that.emit(_EVENT_QUANTITY, currentQuantity)
			    },
			    'quantity': function(quantity){
			    	if(quantity === undefined || quantity === null){
			    		quantity = _that.$el.val();
			    	}

			    	quantity = parseInt(quantity);
			    	if(quantity < 1) return; 
			    	_that.$el.val(quantity)
			    	_that.emit('quantityChanged', quantity);
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
	        		if(binding == _EVENT_QUANTITY){
	        			$el.keyup(function(e){
						    if(e.keyCode == 13){
						        _that.emit(binding, $el.val());
						    }
						});
	        			_that.setQuantityInput($el);
	        		} else if(binding == _EVENT_INCREASE){
	        			$el.click(function(){
	        				console.log("increase")
							_that.emit(binding);
						})
	        			_that.setIncraseButton($el);
	        		} else if(binding == _EVENT_DECREASE){
	        			$el.click(function(){
							_that.emit(binding);
						})
	        			_that.setDecraseButton($el);
	        		}		        			
	        	})
	        	return _that;
        	}
        };
})