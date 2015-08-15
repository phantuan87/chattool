class RouteConfig {

  constructor() {}

  static init($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'scripts/components/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        });

    $urlRouterProvider.otherwise('/');
  }
}

RouteConfig.init.$inject = ['$stateProvider', '$urlRouterProvider'];
export default RouteConfig;