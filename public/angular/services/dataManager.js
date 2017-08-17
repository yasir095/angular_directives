/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function() {
    'use strict';

    angular.module("dash").factory("dataManager", dataManager);

    /**
     * A service to share data across all components.
     * @returns {{graphData: {data: Array, labels: Array, options: Array, type: Array}}}
     */
    function dataManager()
    {
        return {
            graphData:{
                data: [],
                labels: [],
                options: [],
                type: []
            }
        };
    }
}());
