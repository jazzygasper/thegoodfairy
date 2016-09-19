describe('CharitySearchService', function() {
  beforeEach(module('thegoodfairyApp'));

  var CharitySearchService, httpBackend;

  var searchData = {"items": [{ "charity": "Oxfam"},{ "charity": "Borderline"}]};

  beforeEach(inject(function(_CharitySearchService_, $httpBackend) {
    CharitySearchService = _CharitySearchService_;
    httpBackend = $httpBackend;
  }));

  it('returns list of charities based on parameter', function(){
    httpBackend.expectGET('data.json').respond(searchData);
    UserSearchService.searchFor('E12 5ET').then(function(results){
      expect(results).toEqual(['Oxfam','Borderline']);
    });

    httpBackend.flush();
  });

});
