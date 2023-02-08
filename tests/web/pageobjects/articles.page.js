class Articles extends Page {
    async open (path) {
        await browser.url(path);
        await browser.maximizeWindow();
    }

    get element () { 
        return selector({
            android: $(`element`),
            ios: $(`element`)
        });
    };
}

module.exports = new Articles();