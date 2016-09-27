describe('thegoodfairy', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('The Good Fairy');
  });

  it('shows geographic coordinates', function() {
    browser.get('/');
    $('#input').sendKeys('E125ET');
    $('#submit').click();
    var geographicCoordinates = element.all(by.repeater('geographicCoordinates in controller.geographicCoordinates'));
    expect(geographicCoordinates.first().element(by.css('.lat')).getText()).toEqual('51.5613656682057');
  })

});
