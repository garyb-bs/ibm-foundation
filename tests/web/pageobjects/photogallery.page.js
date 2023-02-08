const Page = require("./page");

// PhotoGallery.js
class PhotoGallery extends Page {
    constructor() {}

    async open (path) {
        await browser.url(path);
        await browser.maximizeWindow();
    }

    get element () { return $("element"); };
}

module.exports = new PhotoGallery();