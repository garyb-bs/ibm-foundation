<h1 align="center">   :zap: IBM WebdriverIO Cucumber For Web and App</a>  <img src="http://v4.webdriver.io/images/webdriverio.png" width="60" height="60" >
 <img src="https://cucumber.io/cucumber/media/images/logos/icons/cucumber-open-icon.svg" width="60" height="60" > :zap:</h1>


This project is meant to serve as the foundation for IBM's web and app automation platform. It is built using WebDriverIO, Appium and Cucumber.

The repository includes a sample configuration file for both web and app to run these on tests on BrowserStack platforms for all Browsers and Devices.

**NOTE:** This project is built using Webdriver V7 where the tests are written with `async`/`await` and TypeScript.

This project can run:

- iOS/Android Native App Tests
- iOS/Android Hybrid App Tests
- Web Based Tests on Desktop and Real Mobile Devices

## Based on

This boilerplate is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

* Open a terminal
* Copy the following command into the terminal, (you must have [Git](https://git-scm.com/downloads) installed)
```sh
git clone https://github.com/garyb-bs/ibm-foundation.git.
```
* Move into the directory that you just cloned by typing
```sh
cd ibm-foundation
```
* When inside this directory, copy the following command and run it:
```sh
npm install
```
* Once all the dependencies are installed, you will be able to run the tests by using the following commands:
```sh
# Run your web tests
npm run web

# Run your native app tests
npm run app
```

See the "scripts" section of the [package.json](./package.json) file for the location of these script tags. You can add more as your project grows and simply run:

```sh
npm run <insert script name>
```

## Configuration

Since we are running on BrowserStack, we do not need any local instance of Appium installed, we just specify the latest version in our BS capabilities using the `appiumVersion` capability. A local install of Appium can be useful for accurate debugging and finding the right locators however.

## Environment Variables

You can export the environment variables for the Username and Access Key of your BrowserStack account

```sh
export BROWSERSTACK_USERNAME=<browserstack-username> &&
export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
```

This will allow the config files to pick up the correct credentials when running the tests.

For more information on how to set up environment variables see [this](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) link.

## Page Objects

This project utilises the Page Object Model to reduce the amount of duplicated code across the project. See this link for documentation on the Page Object Model in WebDriverIO.

Basically if we are performing the same action more than once, it is best practice to turn that logic into a page object. So in the case of this project, things like [Login](./tests/pageobjects/Login.ts), [Search](./tests/pageobjects/Search.ts), [Alerts](./tests/pageobjects/Alerts.ts), [Orders](./tests/pageobjects/Orders.ts); will all be happening more than once so have been turned into Page Objects.

Each page object class file has a number of methods to perform the logic as well as "get" methods that will return the selector for that property. For example "getSearchSelector" will return the selector value for a Search bar that we can then enter text into.

## Specs

The specs (or test) files are where the logical flow of the tests will be stored. At the moment, they are separated into 2 buckets for [Web](./tests/web) and [App](./tests/app). The code structure is identical, but the selectors and page object will differ greatly.

The spec files will import the Page Objects that are needed for that specific test. For example, if our spec file is testing the Search, then we will need to import the [Search](./tests/web/pageobjects/search.page.js) object.

## Locator strategy for native apps

The locator strategy for this project is to use `accessibilityID`'s, see also the
[WebdriverIO docs](https://webdriver.io/docs/selectors#accessibility-id) or this newsletter on
[AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used, and for example only XPATH is available, then the following setup could be used to make cross-platform
selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

### BrowserStack

This project is setup for testing your sites and apps with BrowserStack.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
npm install --save-dev @wdio/browserstack-service
```

## Parallel Testing

This project is set up to run the tests in parallel on multiple devices. So if you kick off 5 files, and your configuration contains 5 devices, then 25 tests will be kicked off in total. We define the Android devices in our capabilities in the [Android Config for FX App](./config/fx-app/android) and [Android Config for Research App](./config/research-app/android).And we define the iOS devices in our [iOS Config for FX App](./config/research-app/ios) and [iOS Config for Research App](./config/research-app/ios) for the different devices.

Here is an example of the device capabilities for 5 different Android devices.

```js
  capabilities: [{
    "appium:deviceName": 'Samsung Galaxy S22 Ultra',
    "appium:os_version": "12.0"
  }, {
    "appium:deviceName": 'Samsung Galaxy S22',
    "appium:os_version": "12.0"
  }, {
    "appium:deviceName": 'Samsung Galaxy S10',
    "appium:os_version": "9.0"
  }, {
    "appium:deviceName": 'Huawei P30',
    "appium:os_version": "9.0"
  }, {
    "appium:os_version" : "10.0",
    "appium:device" : "Samsung Galaxy Note 20",
  }],
  ```

 And here is a set of 3 iOS capabilities:

 ```js
  capabilities: [{
    "appium:deviceName": 'iPhone XS',
    "appium:os_version": "15"
  }, {
    "appium:deviceName": 'iPhone 13 Pro Max',
    "appium:os_version": "15"
  }, {
    "appium:deviceName": 'iPhone 11',
    "appium:os_version": "13"
  }],
  ```

These devices were randomly selected and in a real scenario, we would choose the devices based on data from something like Dynatrace or App Dynamics that accurately reflects what your customer install base is using.

## Notes

Feel free to pull down the repo and play around and get to grips with how it all works. Breaking it is sometimes the best way to learn! Any questions, please reach out to me at any time.