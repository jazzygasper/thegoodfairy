describe('MainController', function() {
  beforeEach(module('thegoodfairyApp'));

  var ctrl;
  var deferred, scope;

  var postcode = "E12 5ET"
  var charityData = "charityData"

  beforeEach(inject(function($rootScope, $controller, $q) {
    deferred = $q.defer();

    scope = $rootScope;

  ctrl = $controller('MainController');

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
