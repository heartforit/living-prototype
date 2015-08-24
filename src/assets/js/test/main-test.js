var tests = [];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

fixture.setBase('/base/dist/assembled');

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/assets/js/',

    paths: {
        "jquery": "lib/jquery-1.11.3.min",
        "handlebarsRuntime": "lib/handlebars.runtime",
        "stabes": "lib/stapes.min",
        "rxLite": "lib/rx.lite"
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
