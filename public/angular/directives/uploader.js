/**
 * Created by yasirmahmood
 */

(function() {
    'use strict';

    angular.module("dash").directive("fileUploader", fileUploader);
    fileUploader.$inject = ['dataHandlerService'];

    function fileUploader(dataHandlerService)
    {
        return {
            restrict: 'EA',
            link: function ($scope, element, attrs, ctrl)
            {
                $scope.model = dataHandlerService.graphData;

                $scope.onUploadStart = function(file)
                {
                    //console.log("start: ", file);
                };

                $scope.onComplete = function(response)
                {
                    if(Boolean(response.data.error))
                    {

                    }
                    else
                    {
                        var data = response.data.data;
                        var labels = response.data.headers;

                        $scope.model.data = data;
                        $scope.model.labels = labels;
                    }

                    //console.log("complete: ", response);
                };
            },
            templateUrl: '/angular/templates/file_uploader.html'
        };
    }
}());
