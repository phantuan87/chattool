'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require("browser-sync");
var conf = require('./conf');

function initBrowserSync(baseDir, watchFiles, browsers) {
	browsers = (browsers === undefined) ? 'default' : browsers;

	browserSync.instance = browserSync.init({
	    startPath: '/',
	    server: {
	      baseDir: baseDir
	    },
	    port: 3000,
	    logConnections: true,
	    browser: browsers,
	    files: watchFiles
  	});
}

gulp.task('serve', ['scripts', 'styles', 'inject', 'watch'], function() {
	initBrowserSync([
		'app', 
		'.tmp'
	], [
		'.tmp/styles/**/*.css',
		'app/*.html',
		'app/scripts/**/*.js',
		'app/scripts/**/*.html'
	]);
});

gulp.task('serve:dist', ['build'], function() {
	initBrowserSync(['dist']);
});

gulp.task('serve:e2e', ['inject'], function () {
  // TODO
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit('dist', []);
});