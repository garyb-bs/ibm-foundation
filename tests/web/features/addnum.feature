@Sample
Feature: Browserstack Sample App

  Scenario Outline: As a user, I can log into the secure area

    Given I have 2 numbers
    When Those numbers are <n1> and <n2>
    Then The total should be <total>

    Examples:
      | n1 | n2 | total |
      | 2  | 2  | 4     |
      | 6  | 5  | 11    |
