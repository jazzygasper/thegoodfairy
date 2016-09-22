thegoodfairyApp.controller('MainController',
  ['CharitySearchService', function(CharitySearchService) {
  var self = this;

  self.charities = [];

  self.findCharities = function(postcode){
    console.log(self.charities);
    CharitySearchService.getData(postcode)
      .then(_storePostcodeData)
  };

  function _storePostcodeData(response){
    console.log('storing postcode data');
    console.log(response);
    self.charities.push(response);
  }

}]);
