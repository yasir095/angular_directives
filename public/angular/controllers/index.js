/**
 * Created by yasirmahmood
 */

angular
    .module('dash')
    .controller('indexController', indexController);

indexController.$inject = [
    '$scope',
    'dataManager'
];

function indexController($scope, dataManager)
{
    // $scope.model.labels = ["January", "February", "March", "April", "May", "June", "July"];
    // $scope.model.data = [
    //     [65, 59, 80, 81, 56, 55, 40],
    //     [28, 48, 40, 19, 86, 27, 90],
    //     [32, 56, 23, 49, 72, 64, 100]
    // ];


    //you can also directly inject this service in directive and then you don't need watchers inside directives.
    //depends on the approach unless you want directive to be totally separated from dependancy then include watchers,
    //which will be an overhead if data is considerabley large.
    $scope.model = dataManager.graphData;

    $scope.model.selectIndex = {};

    $scope.updateResponse = function (itemClicked)
    {
        $scope.model.selectIndex = {};
        $scope.model.selectIndex[itemClicked.index+"."+itemClicked.subIndex] = true;
    };

    //runs on next digest cycle
    // $timeout(function () {
    //     $scope.model.data[itemClicked.index][itemClicked.subIndex] = 99;
    // });

    //runs on same diges cycle.
    // $scope.$evalAsync(function(){
    //     $scope.model.data[itemClicked.index][itemClicked.subIndex] = 99;
    // });
}