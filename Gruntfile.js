'use strict';

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
        tasks: ['build']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      requirejs: {
        files: [
          '<%= config.src %>/assets/**/*.js',
        ],
        tasks: ['requirejs']
      },
      compile: {
        files: [
          '<%= config.dist %>/templats/**/**.hbs',
        ],
        tasks: ['build']
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          preserveLicenseComments: false,
          generateSourceMaps: true,
          optimize: "uglify2",
          // only for debugging and debelopment mode purposes here
          //useSourceUrl: true,
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
        hostname: '0.0.0.0'
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
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.dist %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/assembled/pages/': ['<%= config.dist %>/templates/pages/*.hbs'],
          '<%= config.dist %>/assembled/molecules/': ['<%= config.dist %>/templates/molecules/*.hbs'],
        }
      }
    },
    compile: {
      handlebars: {
        src: 'dist/templates/pages/**/*.hbs',
        dest: 'dist/templates/compiled'
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
    'requirejs',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
