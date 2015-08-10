(function() {
  'use strict';

  angular
    .module('app', [
    	'ngAnimate', 
    	'ngSanitize', 
    	'ngResource',
    	'ngTouch',
    	'ngCookies',
    	'ui.router', 
    	'ui.bootstrap'
    ]);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
})();

