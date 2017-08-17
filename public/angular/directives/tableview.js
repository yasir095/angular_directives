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
            scope: {
                labels: '=',
                data: '=',
                selectIndex:'='
            },
            link: function ($scope, element, attrs, ctrl)
            {
                $scope.tableFormattedData = updateTableData($scope.data, $scope.selectIndex);

                //These watchers can be removed if data is injected through service,
                //if watchers become expensive then use service for data sharing and save those object
                //so that these object doesn't need to be formed on each change.
                $scope.$watch("selectIndex", function (value)
                {
                    $scope.tableFormattedData = updateTableData($scope.data, $scope.selectIndex);

                }, true);

                $scope.$watch("data", function (value)
                {
                    $scope.tableFormattedData = updateTableData($scope.data, $scope.selectIndex);
                });

                function updateTableData(data, selectIndex)
                {
                    var tableFormattedData = [];
                    var dataSize = data.length;

                    for(var index = 0; index<dataSize; index++)
                    {
                        var subArraySize = data[index].length;
                        var subArray = [];

                        for(var subIndex=0; subIndex<subArraySize; subIndex++)
                        {
                            var dataObject =
                            {
                                selected: (selectIndex !== undefined) ? Boolean(selectIndex[index+"."+subIndex]) : false,
                                value: data[index][subIndex]
                            };

                            subArray.push(dataObject);
                        }

                        tableFormattedData.push(subArray);
                    }

                    return tableFormattedData;
                }

            },
            templateUrl: '/angular/templates/tableview.html'
        };
    }
    
})();