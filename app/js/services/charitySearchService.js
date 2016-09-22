thegoodfairyApp.service('CharitySearchService', ['$http', function($http){
  var self = this;

  self.getData = function(postcode){
    return postcode.map(_getApiData);
  };

  function _getApiData(postcode){
    return $http.get('http://api.postcodes.io/postcodes/' + postcode);
  }

  function _handleResponseFromApi(response){
    var postcodeData = response.data;
    return ({lat: postcodeData.latitude,
            long: postcodeData.longitude});
  }
}]);
