'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('app/scripts/**/*.js', ['scripts']);
	gulp.watch('app/styles/**/*.scss', ['styles']);
	gulp.watch('bower.json', ['inject']);
});