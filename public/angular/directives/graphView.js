/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function() {
    'use strict';

    angular.module("dash").directive("graphView", graphView);
    graphView.$inject = ['chartJs', 'colorGenerator'];

    function graphView(ChartJs, color)
    {
        return {
            restrict: 'E',
            scope: {
                onClick: '&',
                labels: '=',
                data: '='
            },
            link: function ($scope, element, attrs, ctrl)
            {
                $scope.$watch("data", function()
                {
                    generateGraph($scope.data, $scope.labels, {}, $scope.onClick);
                });


                function generateGraph(data, labels, scopeOptions, onClickFunc, type)
                {
                    if(data !== undefined && labels !== undefined && data.length>0)
                    {
                        var dataSets = [];

                        var options = {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            },
                            onClick: function (evt, pt)
                            {
                                var activeElement = myChart.getElementAtEvent(evt);

                                if(activeElement[0] !== undefined)
                                {
                                    $scope.$apply(function()
                                    {
                                        onClickFunc()({index: activeElement[0]._datasetIndex, subIndex:activeElement[0]._index});
                                    });
                                }

                            }
                        };

                        var context = element.find('canvas')[0].getContext("2d");

                        var dataSize = data.length;
                        var labelSize = labels.length;

                        var dataSetColors = color.getColorArray(labelSize);

                        for(var i=0; i<dataSize; i++)
                        {
                            var dataObject =
                            {
                                label: '#'+i,
                                data: data[i],
                                backgroundColor: dataSetColors,
                                borderColor: dataSetColors,
                                borderWidth: 1
                            };

                            dataSets.push(dataObject);
                        }

                        var myChart = new ChartJs(context, {
                            type: Boolean(type) ? type : 'bar',
                            data: {
                                labels:  labels,
                                datasets: dataSets
                            },
                            options: angular.merge(options, scopeOptions)
                        });
                    }
                }

            },
            templateUrl: '/angular/templates/graph_view.html'
        };
    }
}());


