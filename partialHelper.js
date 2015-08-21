module.exports.register = function(Handlebars, options){
    Handlebars.templates = Handlebars.partials;

	// instead of {{> partialName}} use {{partial "templateName"}}
	Handlebars.registerHelper('partial', function (templateName) {
		
	    return new Handlebars.SafeString(Handlebars.templates[templateName](this));
	});

}