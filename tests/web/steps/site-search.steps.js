const Search = require("../pageobjects/search.page");
const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^I am on the Masters website$/, async () => {
    Search.open();
});

When("I am on the Search page", async () => {
    expect(await browser.getUrl()).toEqual("https://www.masters.com/en_US/search/index.html");
});

When("I click on the Search button", async () => {
    await Search.clickSearchButton();
});

When("I search for {string}", async (searchTerm) => {
    await Search.enterSearchDetails(searchTerm);
    await Search.clickSearchButton();
});

When(/^I click on the (.*) tab$/, async (mediaType) => {
    await Search.clickTab(mediaType);
});

Then("I should see the placeholder text", async () => {
    let searchFieldPlaceholderText = await Search.searchFieldSelector.getAttribute("placeholder");
    expect(searchFieldPlaceholderText).toEqual("Search for...");
});

Then("I should not see any results", async () => {
    let isItDisplayed = await Search.searchResultsSelector.isDisplayed();
    expect(isItDisplayed).toBeFalsy();
})

Then(/^I should receive no results$/, async () => {
    let resultsText = await Search.searchResultsSelector.getText();
    expect(resultsText).toEqual("All (0)");
});

Then(/^I should receive a number of search results$/, async () => {
    await Search.playerCardSelector.waitForDisplayed({ timeout: 30000 });
    let playerCardText = await Search.playerCardSelector.getAttribute("alt");
    expect(playerCardText).toEqual("Player - Tiger Woods");
});

Then(/^I should be able to verify the (.*) results$/, async (mediaType) => {
    let resultsSelector = await Search.selectCorrectTab(mediaType);

    await resultsSelector[0]?.waitForExist({ timeout: 30000 });

    expect(await resultsSelector.length).toBeGreaterThan(0);
});



