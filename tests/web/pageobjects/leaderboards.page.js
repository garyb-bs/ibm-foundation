class Leaderboards extends Page {

    async open (path) {
        await browser.url(path);
        await browser.maximizeWindow();
    }

    get element () { 
        return selector({
            android: $(`//android.widget.EditText[contains(@content-desc,"UserName")]`),
            ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    };
}

module.exports = new Leaderboards();