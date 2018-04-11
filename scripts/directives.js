reaApp.directive('resultsData', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/results-data.html',
        replace: true,
        scope: {
            resultObject: '=',
            addProperty: '&'
        }
    }
})
reaApp.directive('savedData', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/saved-data.html',
        replace: true,
        scope: {
            savedObject: '=',
            removeProperty: '&'
        }
    }
})