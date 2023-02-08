const Page = require("./page");

// Login.js
class Login extends Page {
    constructor() {}

    async open (path) {
        await browser.url(path);
        await browser.maximizeWindow();
    }

    get element () { return $("element"); };
}

module.exports = new Login();