describe('GeographicSearchService', function() {
  beforeEach(module('thegoodfairyApp'));

  var GeographicSearchService, httpBackend;

  var searchData = {"result": [{ "lat": "51.5613656682057"},{ "long": "0.0392815942492772"}]};

  beforeEach(inject(function(_GeographicSearchService_, $httpBackend) {
    GeographicSearchService = _GeographicSearchService_;
    httpBackend = $httpBackend;
  }));

  it('Converts the postcode to a geo location', function(){
    httpBackend.expectGET('http://api.postcodes.io/postcodes/e125et').respond(searchData);
    GeographicSearchService.getData('e125et').then(function(result){
      expect(result).toEqual(['51.5613656682057','0.0392815942492772']);
    });

    httpBackend.flush();
  });

});
