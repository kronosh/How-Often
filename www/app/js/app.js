/* How Often application */

'use strict';

/* App Module */

angular.module('howOftenApp', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/main', {templateUrl: 'app/partials/main.html', controller: HowOftenCtrl}).
        otherwise({redirectTo: '/main'});
}]);