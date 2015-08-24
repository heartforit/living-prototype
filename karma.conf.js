module.exports = function(config) {
  config.set({
    basePath: '.',
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'requirejs', 'fixture'],
    files: [
      {pattern: 'dist/assembled/**/*.html', included: true},
      {pattern: 'src/assets/js/lib/**/*.js', included: false},
    	{pattern: 'src/assets/js/molecules/**/*.js', included: false},
    	{pattern: 'src/assets/js/test/component/**/*Spec.js', included: false},
  		'src/assets/js/test/main-test.js'
  	],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/assets/js/molecules/**/*.js': ['coverage']
    },
    coverageReporter: {
      dir: 'src/assets/js/reports/coverage',
      reporters: [
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' }
        ]
      }
  })
}
