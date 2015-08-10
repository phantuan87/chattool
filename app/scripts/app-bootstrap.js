(function() {
  'use strict';

  var _bootstrap = angular.bootstrap;

  angular.bootstrap = function (document, modules) {
    /* 
      We can prepare some steps before angular bootstrap.
      Ex Login, Load other module, configuration...
    */

    _bootstrap(document, modules);
  };

})();