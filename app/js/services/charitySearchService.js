gitCoreApp.service('CharitySearchService', ['$http', function($http){
  var self = this;

  self.searchFor = function(username) {
    return $http.get('')
    .then(_handleResponseFromJson);
  };

  function _handleResponseFromJson(response) {
    return response.data.items.map(function(searchResults){
      return searchResults.name;
    });
  };
}]);
