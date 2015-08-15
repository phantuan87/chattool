import appModule from 'scripts/app-module';

(function() {

  var _bootstrap = angular.bootstrap;

  angular.bootstrap = function (document, modules) {
    /*
     We can prepare some steps before angular bootstrap.
     Ex Login, Load other module, configuration...
     */

    _bootstrap(document, modules);
  };

})();

// jshint ignore: start
angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name]);
});
// jshint ignore: end
