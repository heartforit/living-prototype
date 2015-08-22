var extendGruntPlugin = require('extend-grunt-plugin');
var glob = require("glob");
var path = require("path");

module.exports = function(grunt){
  grunt.registerMultiTask('compile', 'handlebars precompile task', function() {
    
    if(!this.data.dest){
      throw new Error("please provide a valid 'dest' param");
    }
    if(!this.data.src){
      throw new Error("please provide a valid 'src' param");
    }

    // Force task into async mode and grab a handle to the "done" function.
    var done = this.async();

    var allFiles = {};
    var outputPath = this.data.dest;
    // options is optional
    glob(this.data.src, function (er, result) {

      result.forEach(function(targetPath){
          var tmp = outputPath + '/' + path.basename(targetPath).replace('.hbs', '.js');
          allFiles[tmp] = targetPath;
      })
      
      extendGruntPlugin(grunt, require('../node_modules/grunt-contrib-handlebars/tasks/handlebars'), {
        'handlebars.compile': {
            files: allFiles,
            options: {
              namespace: false,
              wrapped: true
            }
        }, 
      });

      grunt.task.run('handlebars');

      done();
    })
  });
}