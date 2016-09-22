describe('CharitySearchService', function() {
  beforeEach(module('thegoodfairyApp'));

  var CharitySearchService, httpBackend;

  var searchData = {"items": [{ "lat": "51.5613656682057"},{ "long": "0.0392815942492772"}]};

  beforeEach(inject(function(_CharitySearchService_, $httpBackend) {
    CharitySearchService = _CharitySearchService_;
    httpBackend = $httpBackend;
  }));

  it('Converts the postcode to a geo location', function(){
    httpBackend.expectGET('http://api.postcodes.io/postcodes/e125et').respond(searchData);
    UserSearchService.searchFor('E12 5ET').then(function(results){
      expect(results).toEqual(['51.5613656682057','0.0392815942492772']);
    });

    httpBackend.flush();
  });

});
