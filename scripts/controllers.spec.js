// Test our home controller
describe('Controllers', function() {

    beforeEach(module('reaApp'));

    describe('homeController', function(){
        var homeController, scope;

        // Add controller and scope to each test
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            homeController = $controller('homeController', {
                $scope: scope
            });
        }));

        it("should exist", function() {

            expect(homeController).toBeDefined();

        });

        // it("should have a hello variable with a string of 'Hello world'", function() {

        //     expect(scope.hello).toEqual('Hello world');

        // });

        // it("call to json first id key of data.json file should be 1", function() {

        //     expect(scope.data.results).toEqual(1);

        // });

    })

});
