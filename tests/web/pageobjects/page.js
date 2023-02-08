// Page.js
module.exports = class Page {
    constructor () {}

    async open (path) {
        await browser.url(path)
        await browser.maximizeWindow();
    }

    async closeCookieConsent() {
        await this.cookieCloseIcon.waitForDisplayed({ timeout: 30000 });
        await this.cookieCloseIcon.click();
    }

    async sleep(seconds) 
    {
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

    get cookieCloseIcon () { 
        return $("");
    };
}