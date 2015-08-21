Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.myPartial,depth0,{"name":"myPartial","data":data,"indent":"\t\t   ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['navbar-fixed-top'],depth0,{"name":"navbar-fixed-top","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n    <div class=\"container theme-showcase\" role=\"main\">\n      <h1>Posts</h1>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.blog : depth0)) != null ? stack1.posts : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    ";
},"usePartial":true,"useData":true})