// Test our home controller
describe('Controllers', function() {

    beforeEach(module('reaApp'));

    describe('homeController', function(){
        var homeController, scope;

        beforeEach(inject(function($controller, $rootScope){ //instantiate controller using $controller service
            scope = $rootScope.$new();
            homeController = $controller('homeController', {
                $scope: scope
            });
        }));

        it("should exist", function() {

            expect(homeController).toBeDefined();

        });

        it("should have a hello variable with a string of 'Hello world'", function() {

            expect(scope.hello).toEqual('Hello world');

        });
    })

});
