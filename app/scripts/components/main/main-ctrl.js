(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.welcome = "Hello!";
  }

})();
