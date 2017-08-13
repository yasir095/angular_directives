/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function(){
    'use strict';
    
    angular.module('dash').directive('tableview', tableView);
    
    function tableView()
    {
        return {
            restrict: 'E',
            require: '^viewBinder',
            link: function ($scope, element, attrs, viewBinderController)
            {
                $scope.tableData = viewBinderController.tableFormattedData;
                $scope.labels = viewBinderController.labels;

                $scope.$watchCollection("tableData", function (value) {
                   console.log("upate| : ", value);
                });

                $scope.$watchCollection(function () {
                    return viewBinderController.tableFormattedData;
                }, function (value) {
                    console.log("upate| : ", value);
                });

                console.log("tableScope: ", $scope);
            },
            templateUrl: '/angular/templates/tableview.html'
        };
    }
    
})();