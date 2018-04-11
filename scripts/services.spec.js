describe('dataService', function () {
    var mockDataServiceResource, $httpBackend;
    beforeEach(module('reaApp'));

    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mockDataServiceResource = $injector.get('dataService');
        })
    });

    describe('getDataService', function () {
        it('should call GetData and return an object', inject(function (dataService) {
            $httpBackend.expectGET('./data.json').respond();

            var result = mockDataServiceResource.GetData().get();

            $httpBackend.flush();

            expect(result).toEqual(jasmine.any(Object));
        }));

    });

});