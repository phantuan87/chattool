'use strict';

import appModule from 'scripts/app-module';

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name]);
});

//(function() {
//  var _bootstrap = angular.bootstrap;
//
//  angular.bootstrap = function (document, modules) {
//    /*
//      We can prepare some steps before angular bootstrap.
//      Ex Login, Load other module, configuration...
//    */
//
//    _bootstrap(document, modules);
//  };
//
//})();