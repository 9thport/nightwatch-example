# Description

Nightwatchjs is a nodejs project that works with Selenium Standalone Server to test elements on website.

# How to use it

After you have downloaded this repository to a folder and installed FireFox, you need to start the Selenium Standalone Server. Once that is complete you can use the `nightwatch` program to run single tests or whole groups.

## First install Node.js

Package install from http://nodejs.org/download/

## Selenium Standalone Server

The selenium server no longer needs to be launched manually. But it is important to know if you have a problem and need stop the background process

### finding the process to stop

In the terminal type the following:

    kill `ps aux | grep selenium | awk '{print $1}'`

### starting the process manually

In your terminal, type the following in the directory root of this repository:

    java -jar selenium-2.39.0/selenium-server-standalone-2.39.0.jar

This will start the server and listen on the default port of `4444`.

## Running the sample test

To run the sample test provided by nightwatch:

    ./nightwatch -t tests/google.js

## Running a specific test

    ./nightwatch -c ./settings.json -e local -g tests/sections

## Running all the tests

    ./nightwatch -c ./settings.json -e local -g tests

## Running a test on production env

    ./nightwatch -c ./settings.json -e prod -g tests

# How to write tests

## looking for specific CSS attribute

    .assert.cssProperty('#content article div h3.pub_year.latest.hide-button', 'background-color', 'rgba(230, 230, 230, 1)')

## look for specific text in CSS path

    .assert.containsText('#site-title', 'Title of\nSite')

## resize a window

    .resizeWindow(320, 460)

## make sure an element is hidden

    .assert.hidden('#hero-image img')

## make sure an element is visible

    .assert.visible('li#home-mobile')

## assert that a element has an attribute that equals a value

    .assert.attributeEquals('li#home-mobile', 'class', 'current')

## if statement to check for production environment

    if (browser.launch_url.match(/.*www.*/g) ) {
      console.log('WE ARE PROD!');
      browser
        .url(browser.launch_url)
        .waitForElementVisible('body', 1000)
        .verify.containsText('#site-title', 'Title of\nSite')
        .verify.attributeEquals('head script:nth-of-type(2)', 'src', 'http://stats.g.doubleclick.net/dc.js')
      .end();
    } else {
      console.log('NO PROD! SKIPPING');
      browser
      .end();
    };

## test width and height of an image size

    // test icon size
    .getElementSize('div#page-title-icon a img', function(result) {
      this.assert.equal(typeof result, "object");
      this.assert.equal(result.status, 0);
      this.assert.equal(result.value.width, 45);
      this.assert.equal(result.value.height, 50);
    })

# click on a element

    .click('#access li[id=\'research\'] a')




# Additional resources

If you would like to learn more about the project, point your browser here:

http://nightwatchjs.org/

To write tests:

http://nightwatchjs.org/api