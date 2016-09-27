describe('MainController', function() {
  beforeEach(module('thegoodfairyApp'));

  var ctrl, GeographicSearchService;
  var deferred, scope;

  var postcode = "e125et"
  var geographicData = [{ "lat": "51.5613656682057"},{ "long": "0.0392815942492772"}];

  beforeEach(inject(function($rootScope, $controller, $q) {
    deferred = $q.defer();

    GeographicSearchService = jasmine.createSpyObj('GeographicSearchService', ['getData']);
    GeographicSearchService.getData.and.returnValue($q.when(geographicData));

    scope = $rootScope;

  ctrl = $controller('MainController', {
    GeographicSearchService: GeographicSearchService
  });

  }));


  it('starts with empty array', function(){
    expect(ctrl.geographicCoordinates).toEqual([]);
  });

  it('fetches lat and long data based on a postcode', function() {
    ctrl.findGeographicCoordinates(postcode);
    scope.$apply();
    expect(ctrl.geographicCoordinates).toEqual([geographicData]);
  });


});
