Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n"
    + ((stack1 = this.invokePartial(partials['navbar-fixed-top'],depth0,{"name":"navbar-fixed-top","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n    <div class=\"container theme-showcase\" role=\"main\">\n      <div class=\"jumbotron\">\n		  <h1>"
    + this.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h1>\n		  <p>This is a Assemble Generator template using <a href=\"http://getbootstrap.com\">Bootstrap</a>. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n		  <p><a href=\"blog.html\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n		</div>\n    </div>\n\n    \n";
},"usePartial":true,"useData":true})