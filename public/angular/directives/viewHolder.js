/**
 * Created by yasirmahmood
 */

(function() {
    'use strict';

    angular.module("dash").directive("viewBinder", viewBinder);

    function viewBinder()
    {
        function viewBinderController($scope)
        {
            this.labels     = $scope.labels;
            this.data       = $scope.data;
            this.options    = $scope.options;
            this.tableFormattedData = [];

            var dataSize = this.data.length;

            for(var index = 0; index<dataSize; index++)
            {
                var subArraySize = this.data[index].length;
                var subArray = [];

                for(var subIndex=0; subIndex<subArraySize; subIndex++)
                {
                    var dataObject =
                    {
                        selected: false,
                        value:this.data[index][subIndex]
                    };

                    subArray.push(dataObject);
                }

                this.tableFormattedData.push(subArray);
            }

            console.log("holder: ",$scope);
        };

        viewBinderController.prototype.updateData = function (data) {
            this.tableFormattedData = data;
            console.log("Data: ", this.getData());
        };

        viewBinderController.prototype.getData = function () {
            return this.tableFormattedData;
        };

        return {
            restrict: 'E',
            scope: {
                labels: '=',
                data: '=',
                options: '='
            },
            controller: ['$scope', viewBinderController]
        };
    }
}());
