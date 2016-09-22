thegoodfairyApp.controller('MainController',
  ['CharitySearchService', function(CharitySearchService) {
  var self = this;

  self.charities = [];

  self.findCharities = function(postcode){
    CharitySearchService.getData(response, function(results) {
      _storeGitUserData(results);
  });
}

  function _storePostcodeData(response){
  self.charities.push(response);
}

}]);
