'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'event-stream']
});

/* 
templates Task
1. Minize all html files. 
2. Put all angular template files into same angular module named 'app'.
*/
gulp.task('templates', function () {
  return gulp.src('app/scripts/**/*.html')
    .pipe($.minifyHtml({
      empty : true,
      spare : true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'app',
      prefix    : 'scripts/'
    }))
    .pipe(gulp.dest('.tmp/templates'))
    .pipe($.size());
});

/*
minify task

1. Inject all template js files into all html files.
2. Compress js files.
3. Replace js links by minified link.
4. Minify CSS files.
5. Replace CSS links by minified link.
6. Create dist (production folder).

*/
gulp.task('minify', ['scripts', 'styles', 'templates'], function() {
	 var assets = $.useref.assets();

	return gulp.src('app/*.html')
		.pipe($.inject(gulp.src('.tmp/templates/**/*.js'), {
	    	read        : false,
	    	starttag    : '<!-- inject:templates -->',
	    	addRootSlash: false,
	    	addPrefix   : '../'
	    }))
		.pipe(assets)
    .pipe($.rev()) // Rename the concatenated files
		.pipe($.if('**/*.js', $.ngAnnotate()))
		.pipe($.if('**/*.js', $.uglify({preserveComments: $.uglifySaveLicense}))).on('error', conf.errorHandler('Uglify'))
    .pipe($.if('**/*.css', $.replace('../img/', '../images/')))
    .pipe($.if('**/*.css', $.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', 'fonts')))
    .pipe($.if('**/*.css', $.csso()))
		.pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace()) // Substitute in new filenames
    .pipe($.minifyHtml({
      empty : true,
      spare : true,
      quotes: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function () {
	return $.eventStream.merge(
		gulp.src('app/images/**/*'),
		gulp.src($.mainBowerFiles())
			.pipe($.filter('**/*.{jpg,jpeg,png,gif}'))
			.pipe($.flatten())
	)
		.pipe(gulp.dest('dist/images'))
		.pipe($.size());
});

gulp.task('fonts', function () {
  	return $.eventStream.merge(
    	gulp.src('app/fonts/**/*'),
    	gulp.src($.mainBowerFiles())
      	.pipe($.filter('**/*.{woff,woff2,eot,ttf,svg}'))
      	.pipe($.flatten())
  	)
    	.pipe(gulp.dest('dist/fonts'))
    	.pipe($.size());
});

gulp.task('resources', function () {
  return gulp.src('app/resources/**/*')
      .pipe(gulp.dest('dist/resources'))
      .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], {read: false}).pipe($.rimraf());
});

gulp.task('build', ['images', 'fonts', 'resources', 'minify']);