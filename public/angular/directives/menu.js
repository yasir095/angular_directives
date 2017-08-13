/**
 * Created by yasirmahmood
 */

(function() {
    'use strict';

    angular.module("dash").directive("menu", menu);
    menu.$inject = ['$location', '$window'];

    function menu($location, $window)
    {
        return {
            restrict: 'EA',
            scope: false,
            link: function ($scope, element, attrs, ctrl)
            {
                //build menu here.
            },
            templateUrl: '/angular/templates/menu.html'
        };
    }
}());
