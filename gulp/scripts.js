'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/*
Scripts Task

Check style/grammar of all js files
*/
gulp.task('scripts', function() {
	return gulp.src(['app/scripts/**/*.js'])
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.size());;
});