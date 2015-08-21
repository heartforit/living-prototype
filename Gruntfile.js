/*
 * Generated on 2015-08-21
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */


'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  require('./tasks/compile')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{hbs}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      requirejs: {
        files: [
          '<%= config.src %>/assets/js/*.js',
        ],
        tasks: ['requirejs']
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          preserveLicenseComments: false,
          generateSourceMaps: true,
          optimize: "uglify2",
          mainConfigFile: "src/assets/js/require-main.js",
          name: "bower_components/almond/almond.js", // assumes a production build using almond
          out: "<%= config.dist %>/assets/js/bundle.js",
          include: ['src/assets/js/require-bootstrap'],
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          helpers: ['./partialHelper.js' ],
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.dist %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
    compile: {
      handlebars: {
        src: "src/templates/pages/**/*.hbs",
        dest: 'dist/templates'
      }
    },
    includereplace: {
            concat: {
                options: {
                    includesDir: './src/templates',
                    prefix: '{{@',
                    suffix: '}}',
                    globals: {}
                },
                files: [{
                    src: './**/*.hbs',
                    dest: './dist/templates/',
                    cwd: './src/templates',
                    expand: true
                }]
            }
        },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: '**',
        dest: '<%= config.dist %>/assets/'
      },
      theme: {
        expand: true,
        cwd: 'src/assets/',
        src: '**',
        dest: '<%= config.dist %>/assets/css/'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'includereplace:concat',
    'compile:handlebars',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
