// Controller to display and modify our data
reaApp.controller('homeController', ['$scope', 'dataService', function($scope, dataService) {

    $scope.hello = 'Hello world';

    // Add the JSON object to the Scope
    $scope.data = dataService.GetData();

}]);
