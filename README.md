# angular-starter-kit
Starting points for building a new Angular single page app.

# Getting Started

- Run `npm install` to install npm dependencies
- Run `bower install` to install frontend dependencies
- Run `gulp serve` to launch brower-sync and watch for any changes
- Run `gulp serve:unit_test` to run the unit tests
- Run `gulp serve:dist` to build your webapp for production 

# Features included in gulpfile
- useref : Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.
- angular-filesort: Automatically sort AngularJS app files depending on module definitions and usage
- ng-html2js: pre-load your HTML code into the $templateCache. Please **change your model name** to make it work correctly.
- uglify : optimize all your JavaScript
- csso: optimize all your CSS
- sass: compile SASS to CSS.
- autoprefixer: Prefix CSS with [Autoprefixer](https://github.com/postcss/autoprefixer-core)
- jshint : Detect errors and potential problems in JavaScript code.
- minify-html: Minify html with minimize.
- Unit test (karma) : out of the box unit test configuration with karma
- browser sync : full-featured development web server with livereload and devices sync
- And more...

# Directory structure
The root directory is **app/**
