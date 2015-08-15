import 'scripts/app-vendor';
import RouteConfig from 'scripts/app-route';
import Configuration from 'scripts/app-config';
import RunPhase from 'scripts/app-run';

import MainController from 'scripts/components/main/main-ctrl';

let appModule = angular.module('app', [
        'ui.router'
    ])
    .config(Configuration.init)
    .config(RouteConfig.init)
    .run(RunPhase.init)
    .controller('MainController', MainController);

export default appModule;