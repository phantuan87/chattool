'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/*
Styles Task

Convert all scss files to css files.
*/
gulp.task('styles', function() {
	return gulp.src(['app/styles/**/*.scss'])
		.pipe($.sass({outputStyle: 'compressed'}))
		.pipe($.autoprefixer('last 1 version'))
		.pipe(gulp.dest('.tmp/styles'))
		.pipe($.size());;
});