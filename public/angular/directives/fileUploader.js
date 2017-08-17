/**
 * Created by yasirmahmood
 */

(function() {
    'use strict';

    angular.module("dash").directive("fileUploader", fileUploader);
    fileUploader.$inject = ['dataManager'];

    /**
     * Directive just provide functionality for file upload and then store data through dataManager service.
     * You can inject dataManager in your directive or controller to access that data.
     * This directive has an isolated scope.
     * @param dataHandlerService
     * @returns {{restrict: string, scope: {}, link: link, templateUrl: string}}
     */
    function fileUploader(dataManager)
    {
        return {
            restrict: 'E',
            scope:{

            },
            link: function ($scope, element, attrs, ctrl)
            {
                $scope.model = dataManager.graphData;

                $scope.onUploadStart = function(file)
                {
                    //@todo: show loader here.
                    //console.log("start: ", file);
                };

                $scope.onComplete = function(response)
                {
                    if(Boolean(response.data.error))
                    {
                        //@todo: show error dialog.

                        $scope.model.data = [];
                        $scope.model.labels = [];

                        $scope.errorMessage = response.data.message;

                        //element.append(angular.element(html));
                    }
                    else
                    {
                        $scope.errorMessage = false;

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
