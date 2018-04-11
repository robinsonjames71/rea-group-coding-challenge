// Controller to display and modify our data
reaApp.controller('homeController', ['$scope', 'dataService', function($scope, dataService) {

    // Add the JSON object to the Scope
    var dataJSON = new dataService.GetData();

    $scope.data = dataJSON.get();

    // function to save or remove property
    $scope.addRemoveProperty = function(change, property){
        if (change === 'add') {
            // push the object to the saved array
            $scope.data.saved.push(property);
        }
        else if (change === 'remove') {
            // find the object in the saved array, remove it
            // and return the new array
            $scope.data.saved = $scope.data.saved.filter(function(el) {
                return el !== property;
            })
        }
    }

}]);
