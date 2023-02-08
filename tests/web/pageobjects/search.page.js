const Page = require("./page");

class Search extends Page {
    async open() {
        await super.open("https://www.masters.com/en_US/search/index.html")
    }

    /**
     * Carry out a Search
     * @param searchText
     */
    async enterSearchDetails (searchText) {
        await this.searchFieldSelector.waitForDisplayed({ timeout: 30000 });
        await this.searchFieldSelector.setValue(searchText);
        await browser.pause(5000);
    }

    /**
     * Click on the Search button
     * @param searchText
     */
    async clickSearchButton() {
        await this.searchButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.searchButtonSelector.click();
    }

    async verifyPlaceholderText() {
        await this.searchFieldSelector.waitForDisplayed({ timeout: 30000 });
        let searchFieldText = await this.searchFieldSelector.getAttribute("placeholder");

        await browser.waitUntil(async () => (
            await searchFieldText).includes("Search for..."), 
            { timeout: 5000 }
        );
    }

    async clickTab(tabText) {
        if (tabText.includes("video")) {
            await this.videoTabSelector.waitForDisplayed({ timeout: 30000 });
            await this.videoTabSelector.click();
        } else if (tabText.includes("news")) {
            await this.newsTabSelector.waitForDisplayed({ timeout: 30000 });
            await this.newsTabSelector.click();
        } else if (tabText.includes("photo")) {
            await this.photosTabSelector.waitForDisplayed({ timeout: 30000 });
            await this.photosTabSelector.click();
        } else {
            throw "Tab text parameter does not match any valid values";
        }

        await browser.pause(5000);
    }

    async closeVideo() {
        await this.videoCloseSelector.waitForDisplayed({ timeout: 30000 });
        await this.videoCloseSelector.click();
    }

    async selectCorrectTab(mediaType) {
        switch(mediaType) {
            case "video":
                return this.videoResultsSelector;
                break;
            case "news":
                return this.newsResultsSelector;
                break;
            case "photo":
                return this.photosResultsSelector;
                break;
            default:
                break;
        }
    }

    // Various getter methods for all of the selectors that will be used in this Object
    get searchFieldSelector () { return $("#searchField") };
    get searchButtonSelector () { return $("//div[@class=\"search-icon\"]") };
    get searchResultsSelector () { return $("//button[@class=\"option selected\"]") };
    get playerCardSelector () { return $("//div[@class=\"image\"]/img") };

    get videoTabSelector () { return $("//span[contains(text(), 'Videos')]") };
    get newsTabSelector () { return $("//span[contains(text(), 'News')]") };
    get photosTabSelector () { return $("//span[contains(text(), 'Photo')]") };
    get searchResultsBarSelector () { return $$(".select-menu-dropdown2tabs-dropdown") };    
    get videoResultsSelector () { return $$("//div[@class=\"search-video\"]") };
    get newsResultsSelector () { return $$("//div[@class=\"search-link\"]") };
    get photosResultsSelector () { return $$("//i[@class=\"icon-camera\"]") };

    get videoTitleSelector () { return $("//h4") };
    get videoDateSelector () { return $("//div[@class=\"date\"]") };
    get videoPlayerSelector () { return $("//div[@class=\"vod-video\"]") };

    get newsTitleSelector () { return $("") };
    get newsSubtitleSelector () { return $("") };
    get newsDateSelector () { return $("") };
    get newsLinkSelector () { return $("") };

    get photoTitleSelector () { return $("") };
    get photoSubtitleSelector () { return $("") };
    get photoDateSelector () { return $("") };
    get photoLinkSelector () { return $("") };

    get videoPlaySelector () { return $$("//div[@class=\"info\"]/h4") };
    get videoCloseSelector () { return $("//button[@class=\"modal__close\"]") };

    get videoDescriptionSelector () { return $(".vod-video__description") };
}

module.exports = new Search();