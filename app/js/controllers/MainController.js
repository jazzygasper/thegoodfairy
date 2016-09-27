thegoodfairyApp.controller('MainController',
  ['GeographicSearchService', function(GeographicSearchService) {
  var self = this;

  self.geographicCoordinates = [];

  self.findGeographicCoordinates = function(postcode){
    console.log(self.geographicCoordinates);
    GeographicSearchService.getData(postcode)
      .then(_storePostcodeData)
  };

  function _storePostcodeData(response){
    console.log('storing postcode data');
    console.log(response);
    self.geographicCoordinates.push(response);
}

}]);
