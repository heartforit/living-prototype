var extendGruntPlugin = require('extend-grunt-plugin');
var glob = require("glob");
var path = require("path");

module.exports = function(grunt){
  grunt.registerTask('compile', 'handlebars precompile task', function() {
    //grunt.log.writeln(this.target + ': ' + this.data);
    // Force task into async mode and grab a handle to the "done" function.
    var done = this.async();
    // Run some sync stuff.
    grunt.log.writeln('start compile');
    
    var allFiles = {};
    var outputPath = 'dist/templates';
    // options is optional
    glob("src/templates/pages/**/*.hbs", function (er, result) {

      result.forEach(function(targetPath){
          var tmp = outputPath + '/' + path.basename(targetPath).replace('.hbs', '.js');
          allFiles[tmp] = targetPath;
      })

      extendGruntPlugin(grunt, require('../node_modules/grunt-contrib-handlebars/tasks/handlebars'), {
        'handlebars.compile': {
            files: allFiles
        }, 
      });

      grunt.task.run('handlebars');

      done();
    })
  });
}