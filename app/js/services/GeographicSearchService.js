thegoodfairyApp.service('GeographicSearchService', ['$http', function($http){
  var self = this;

  self.getData = function(postcode){
    return $http.get('http://api.postcodes.io/postcodes/' + postcode)
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi(response) {
    console.log("handeling response fron api");
    console.log(response.data.result.latitude);
    console.log(response.data.result)
    return {lat: response.data.result.latitude,
            long: response.data.result.longitude}
  };
}]);
