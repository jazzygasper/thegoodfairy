describe('MainController', function() {
  beforeEach(module('thegoodfairyApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
  ctrl = $controller('MainController');

}));


  it('starts with empty array', function(){
    // scope.$apply();
    ctrl.findServices();
    expect(ctrl.services).toEqual([]);
  });


});
