const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPageApp = require('../pageobjects/login.page');

Given("I open the app", async () => {
    console.log("1");
});

When("I am on the homepage", async () => {
    console.log("2");
});

Then("I should see the headline", async () => {
    await LoginPageApp.outputSize();
});

