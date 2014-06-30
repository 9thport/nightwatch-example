module.exports = {
  "Testing Resume" : function (browser) {
    switch(browser.desiredCapabilities.browserName)
    {
    case "chrome":
      var font_family_value = 'Georgia, serif';
      var font_weight_value = '300';
      var font_size_value = '41px';
      var height_value = '57px';
      var line_hight_value = '56.7465934753418px';
      var text_decoration_value = 'none solid rgb(34, 34, 34)';
      var margin_top_value = '3.200000047683716px';
      var width_value = '679.09375px';
      break;
    case "firefox":
      var font_family_value = 'Georgia,serif';
      var font_size_value = '40.5333px';
      var font_weight_value = '300';
      var height_value = '56.75px';
      var line_hight_value = '56.75px';
      var margin_top_value = '3.2px';
      var text_decoration_value = 'none';
      var width_value = '679.1px';
      break;
    case "safari":
      var font_family_value = 'Georgia, serif';
      var font_size_value = '41px';
      var font_weight_value = '300';
      var height_value = '57px';
      var line_hight_value = '56px';
      var margin_top_value = '3.200000047683716px';
      var text_decoration_value = 'none';
      var width_value = '678px';
      break;
    };

    browser
      .url(browser.launch_url.concat('/resume'))
      .waitForElementVisible('body', 1000)
      .resizeWindow(1366, 768)

      // assert the header exists
      .assert.containsText('#headline', 'Resume')
      // assert the header is visible
      .assert.visible('#headline')

      // test css properties of Blog header
      .verify.cssProperty('#headline', 'clear', 'none')
      .verify.cssProperty('#headline', 'color', 'rgba(34, 34, 34, 1)')
      .verify.cssProperty('#headline', 'display', 'block')
      .verify.cssProperty('#headline', 'font-family', font_family_value)
      .verify.cssProperty('#headline', 'font-size', font_size_value)
      .verify.cssProperty('#headline', 'font-style', 'normal')
      .verify.cssProperty('#headline', 'font-weight', font_weight_value)
      .verify.cssProperty('#headline', 'height', height_value)
      .verify.cssProperty('#headline', 'line-height', line_hight_value)
      .verify.cssProperty('#headline', 'margin-bottom', '8px')
      .verify.cssProperty('#headline', 'margin-left', '0px')
      .verify.cssProperty('#headline', 'margin-right', '0px')
      .verify.cssProperty('#headline', 'margin-top', margin_top_value)
      .verify.cssProperty('#headline', 'padding-bottom', '0px')
      .verify.cssProperty('#headline', 'padding-right', '0px')
      .verify.cssProperty('#headline', 'padding-top', '0px')
      .verify.cssProperty('#headline', 'text-decoration', text_decoration_value)
      .verify.cssProperty('#headline', 'text-rendering', 'optimizelegibility')
      .verify.cssProperty('#headline', 'width', width_value)

      .end();
  }
};