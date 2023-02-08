const { Given, When, Then } = require('@wdio/cucumber-framework');

let num1 = 0;
let num2 = 0;

Given(/^I have 2 numbers$/, async () => {
    // we should have 2 numbers
});

When(/^Those numbers are (\w+) and (.+)$/, async (number1, number2) => {
    console.log("The first number is: ", number1);
    console.log("The second number is: ", number2);
    num1 = parseInt(number1);
    num2 = parseInt(number2);
});

Then(/^The total should be (.*)$/, async (total) => {
    const theTotal = parseInt(num1 + num2);
    expect(theTotal).toEqual(parseInt(total));
});

