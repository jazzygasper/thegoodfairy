describe('thegoodfairy', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('The Good Fairy');
  });

  it('has input box', function() {
    browser.get('/');
    $('#input').sendKeys('E125ET');
  })

});
