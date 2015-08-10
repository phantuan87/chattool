'use strict';

module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/lodash/lodash.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-messages/angular-messages.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/scripts/app-module.js',
      'app/scripts/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,
    colors: true,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],

    plugins : [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]

  });
};
