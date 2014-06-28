var currentTime = new Date();
module.exports = {
  "Testing Form" : function (browser) {
    browser
      .url(browser.launch_url + '/contact/')
      .waitForElementVisible('body', 1000)
      .resizeWindow(1366, 768)

      .setValue('input[id=sender_name]', 'nightwatch')
      .setValue('input[id=sender_email]', 'nightwatch')
      .setValue('textarea[id=sender_message]', 'nightwatch')
      // fill in a sender name
      .verify.valueContains('input[id=sender_name]', 'nightwatch')
      // fill in a false email address
      .verify.valueContains('input[id=sender_email]', 'nightwatch')
      .verify.valueContains('textarea[id=sender_message]', 'nightwatch')
      .submitForm('form#contactform')
      
      // verify sending message failed due to invalid email address
      .assert.containsText('div#content div#post-753 div.entry-content form#contactform p.error', 'Please enter a valid email address.')

      // set valid email form
      .setValue('input[id=sender_email]', 'nightwatch@aaronaddleman.com')
      .submitForm('form#contactform')

      // verify message was sent successfully
      .verify.containsText('div#main header.entry-header div#publications-title div#title-bar h1.entry-title', 'Contact Us')
      .verify.containsText('div#main div#primary-er div#content div#post-753 h2.entry-title', 'Contact')
      .assert.containsText('div.entry-content div.thanks p', 'Your message sent successfully.')

      .end();
  }
};