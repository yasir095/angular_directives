/**
 * Created by yasirmahmood
 */

angular
    .module('dash')
    .controller('indexController', indexController);

indexController.$inject = [
    '$scope',
    'dataHandlerService'
];

function indexController($scope, dataHandlerService)
{
    $scope.model = dataHandlerService.graphData;

    $scope.model.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.model.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [32, 56, 23, 49, 72, 64, 100]
    ];

    console.log("indexScope: ", $scope);

    $scope.updateResponse = function (itemClicked)
    {
        $scope.tableData[itemClicked.index][itemClicked.subIndex].selected = true;

        console.log("|Clicked| ", itemClicked, $scope.tableData[itemClicked.index][itemClicked.subIndex]);
    };

    // $scope.$watchCollection("model.tableFormattedData", function (value) {
    //    console.log("upate: ", value);
    // });

    // $scope.onClick = function(dataSet, index, subIndex)
    // {
    //     $scope.model.tableFormattedData[index][subIndex].selected = true;
    //     $scope.model.data[index][subIndex].value = 99;
    //
    //     console.log("R: ", index, subIndex);
    //     console.log($scope.model.tableFormattedData[index][subIndex]);
    // }

}