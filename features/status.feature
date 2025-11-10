Feature: ParaBank Status of accounts

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user I want to see all my accounts in a table with their balance
    Given I am on the status page
    Then I see all my accounts in a table
    And I see the balance of each account

  Scenario Outline: As a user I want to click an account to see more details about it
    Given I am on the status page
    Then I see all my accounts in a table
    And I can click over every account
    And I should see a text saying "Account Details"
