/**
 * Created by yasirmahmood
 */

"use strict";
angular.module('dash',[ 'ngRoute', 'lr.upload'])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider)
    {
        // $mdThemingProvider.theme('altTheme')
        //     .primaryPalette('purple');

        //$locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: '../angular/templates/index.html',
            controller: 'indexController'
            //controllerAs: 'indexCtrl'
        })
            .otherwise({redirectTo: '/'});

    }]);