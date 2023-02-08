class Watch {
    constructor() {}

    async open (path) {
        await browser.url(path);
        await browser.maximizeWindow();
    }

    get element () { return $("element"); };
}

module.exports = new Watch();