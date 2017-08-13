/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function() {
    'use strict';

    angular.module("dash").factory("chartJs", chartJs);
    chartJs.$inject = ['$window'];

    function chartJs($window)
    {
        if(!$window.Chart)
        {
            //@todo: implement fallback here.
            //show error , library required
        }

        return $window.Chart;
    }
}());