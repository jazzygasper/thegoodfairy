describe('thegoodfairy', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('The Good Fairy');
  });

});
