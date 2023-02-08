/**
 * sub page containing specific selectors and methods for a specific page
 */
class ArticlesApp extends AppPage {
    /**
     * define selectors using getter methods
     */
    get aSelector () {
        return selector({
            android: $(`//android.widget.EditText[contains(@content-desc,"UserName")]`),
            ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async someFunction () {
        //
    }
}

module.exports = new ArticlesApp();
