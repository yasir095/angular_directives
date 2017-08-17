/**
 * Created by yasirmahmood
 */

(function() {
    'use strict';

    angular.module("dash").directive("menu", menu);
    menu.$inject = ['$location'];

    function menu($location)
    {
        return {
            restrict: 'EA',
            scope: {

            },
            link: function ($scope, element, attrs, ctrl)
            {
                //build menu here.
            },
            templateUrl: '/angular/templates/menu.html'
        };
    }
}());
