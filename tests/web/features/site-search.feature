Feature: Site Search

  Background:
    Given I am on the Masters website

  Scenario Outline: As a user, I can observe the placeholder text in the Search bar.
    When I am on the Search page
    Then I should see the placeholder text

  Scenario Outline: As a user, i want to search for an invalid item
    When I search for "invalid"
    Then I should receive no results

  Scenario Outline: As a user, i want to search for a valid item
    When I search for "Tiger"
    Then I should receive a number of search results

  Scenario Outline: As a user, I should observe nothing happening when I search for empty text
    When I click on the Search button
    Then I should not see any results

  Scenario Outline: As a user, i want to observe valid video results
    When I search for "Tiger"
    When I click on the <tab> tab
    Then I should be able to verify the <tab> results

  Examples:
    | tab |
    | video  |
    | news   |
    | photo  | 