/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function() {
    'use strict';

    angular.module("dash").factory("dataHandlerService", dataHandlerService);

    function dataHandlerService()
    {
        return {
            graphData:{
                data: '',
                labels: '',
                options: '',
                type: ''
            }
        };
    }
}());
