describe('MainController', function() {
  beforeEach(module('thegoodfairyApp'));

  var ctrl, CharitySearchService;
  var deferred, scope;

  var postcode = "e125et"
  var charityData = [{ "lat": "51.5613656682057"},{ "long": "0.0392815942492772"}];

  beforeEach(inject(function($rootScope, $controller, $q) {
    deferred = $q.defer();

    CharitySearchService = jasmine.createSpyObj('CharitySearchService', ['getData']);
    CharitySearchService.getData.and.returnValue($q.when(postcode));

    scope = $rootScope;

  ctrl = $controller('MainController', {
    CharitySearchService: CharitySearchService
  });

  }));


  it('starts with empty array', function(){
    expect(ctrl.charities).toEqual([]);
  });

  it('fetches charity data based on a postcode using a promise', function() {
    ctrl.findCharities(postcode);
    scope.$apply();
    expect(ctrl.charities).toEqual(charityData);
  });


});
