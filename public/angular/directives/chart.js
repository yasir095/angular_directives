/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function() {
    'use strict';

    angular.module("dash").directive("chart", chart);
    chart.$inject = ['chartJs', 'colorGenerator'];

    function chart(ChartJs, color)
    {
        return {
            restrict: 'E',
            require: '^viewBinder',
            scope: {
                labels: '=?',
                data: '=?',
                options: '=?',
                type: '=?',
                onClick: '&'
            },
            link: function ($scope, element, attrs, parentCtrl)
            {
                var dataSets = [];

                $scope.data = parentCtrl.data;
                $scope.labels = parentCtrl.labels;

                console.log("ChartScope: ", $scope);

                if($scope.data !== undefined && $scope.labels !== undefined)
                {
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
                                console.log(dataSets[activeElement[0]._datasetIndex].data[activeElement[0]._index]);

                                //console.log("|| ", activeElement[0]._datasetIndex, activeElement[0]._index);
                                //parentCtrl.tableFormattedData[activeElement[0]._datasetIndex][activeElement[0]._index].selected = true;
                                //parentCtrl.tableFormattedData[activeElement[0]._datasetIndex][activeElement[0]._index].none = true;
                                //parentCtrl.updateData(parentCtrl.tableFormattedData);

                                //$scope.onClick()(dataSets, activeElement[0]._datasetIndex , activeElement[0]._index);

                                console.log({index: activeElement[0]._datasetIndex, subIndex:activeElement[0]._index}, " |||");

                                $scope.onClick()({index: activeElement[0]._datasetIndex, subIndex:activeElement[0]._index});
                            }

                        }
                    };

                    var context = element.find('canvas')[0].getContext("2d");

                    var dataSize = parentCtrl.data.length;
                    var labelSize = parentCtrl.labels.length;

                    var dataSetColors = color.getColorArray(labelSize);

                    for(var i=0; i<dataSize; i++)
                    {
                        var dataObject =
                        {
                            label: '#'+i,
                            data: parentCtrl.data[i],
                            backgroundColor: dataSetColors,
                            borderColor: dataSetColors,
                            borderWidth: 1
                        };

                        dataSets.push(dataObject);
                    }

                    var myChart = new ChartJs(context, {
                        type: parentCtrl.type ? parentCtrl.type : 'bar',
                        data: {
                            labels: parentCtrl.labels,
                            datasets: dataSets
                        },
                        options: angular.merge(options, parentCtrl.options)
                    });
                }
            },
            templateUrl: '/angular/templates/chart.html'
        };
    }
}());


