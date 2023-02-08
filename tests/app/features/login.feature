@Sample
Feature: Browserstack Sample App

  Scenario Outline: As a user, I can log into the secure area

    Given I open the app
    When I am on the homepage
    Then I should see the headline

    Examples:
      | username | password             | message   |
      | tomsmith | SuperSecretPassword! | Logging in |
      | foobar   | barfoo               | Logging in |
