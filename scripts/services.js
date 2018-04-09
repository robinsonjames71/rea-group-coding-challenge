// Service to get the data from our data.json file
reaApp.service('dataService', ['$resource', function($resource) {

    this.GetData = function() {

        // Find the JSON file
        var reaAPI = $resource("./data.json");

        // Return the results of get
        return reaAPI.get();

    };

}]);