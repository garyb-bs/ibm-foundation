const AppPage = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPageApp extends AppPage {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    };

    async outputSize () {
        await this.favouriteSelector.waitForDisplayed({ timeout: 30000 });
        var size = await this.favouriteSelector.length;
        console.log("\"The size is: \"" + size);
    };

    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return selector({
            android: $('android=new UiSelector().resourceId("com.ibm.events.android.masters.pre:id/title")'),
            ios: $('//XCUIElementTypeTextField[@name="UserName"]')
        });
    };

    get favouriteSelector () { 
        const selectorAndroid = '=new UiSelector().resourceId("com.ibm.events.android.masters.pre:id/title")';
        const selectorIOS = 'label == "" AND name == "mark-favourite-12"';
        const selectorType = driver.isAndroid ? 'android' : '-ios predicate string:';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selectorType}${selector}`);
     };

    get inputPassword () {
        return selector({
            android: $(`//android.widget.EditText[contains(@content-desc,"Password")]`),
            ios: $(`//XCUIElementTypeTextField[@name="Password"]`)
        });
    };

    get btnSubmit () {
        return selector({
            android: $(`//android.widget.Button[contains(@content-desc,'LoginButton')]`),
            ios: $(`//XCUIElementTypeButton[@name="LoginButton"]`)
        })
    };

    get statusLabel(){
        return selector({
            android: $(`//android.widget.TextView[contains(@content-desc,"StatusLabel")]`),
            ios: $(`//XCUIElementTypeStaticText[@name="StatusLabel"]`)
        })
    };
}

module.exports = new LoginPageApp();
