'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'event-stream']
});

gulp.task('unit_test', function() {
  return gulp.src('./something')
      .pipe($.karma({
        configFile: 'test/karma.conf.js',
        action: 'run'
      }))
      .on('error', function(err) {
        // Make sure failed tests cause gulp to exit non-zero
        throw err;
      });
});
