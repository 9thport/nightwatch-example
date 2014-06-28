var currentTime = new Date();
module.exports = {
  "Testing microdata" : function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .resizeWindow(1366, 768)
      
      .verify.attributeEquals('#main section article header h6 a:nth-child(3)', 'itemprop', 'author')
      .verify.attributeEquals('#main section article header h6 a:nth-child(3)', 'itemtype', 'http://schema.org/Person')
      .verify.attributeEquals('#main section article header h6 a:nth-child(3)', 'rel', 'author')
      
      .end();
  }
};