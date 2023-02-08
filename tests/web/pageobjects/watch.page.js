const Page = require("./page");

// Watch.js
class Watch extends Page {
    constructor() {}

    async open (path) {
        await browser.url(path);
        await browser.maximizeWindow();
    }

    get element () { return $("element"); };
}

module.exports = new Watch();