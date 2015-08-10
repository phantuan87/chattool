'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var conf = require('./conf');
var wiredep = require('wiredep').stream;

/*
Inject task

1. Inject dependences(*.scss) for all scss files from bower components folder.
2. Inject dependences(*.js) for all html files from bower components folder.
3. Inject dependences (*.js, *.css) for all html files from script, .tmp/styles folder.
*/
gulp.task('inject', function() {
	gulp.src('app/styles/*.scss')
	    .pipe(wiredep({
	      directory: 'app/bower_components'
	    }))
	    .pipe(gulp.dest('app/styles'));

	gulp.src('app/*.html')
		.pipe(wiredep({
			directory: 'app/bower_components',
			exclude: [
	        '/bootstrap-sass-official/assets/javascripts/' // already use by angular-bootstrap
	      ]
		}))
		.pipe($.inject(gulp.src(['.tmp/styles/*.css']), {
			read: false,
			ignorePath: '.tmp'
		}))
		.pipe($.inject(
			gulp.src(['app/scripts/**/*.js']).pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort')),
			{
				relative: true
			}
		))		
		.pipe(gulp.dest('app'));
});