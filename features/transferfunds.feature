Feature: ParaBank Fund Transfer Feature

  Background: Successful Login
    # Reutilizamos los pasos de login ya definidos
    Given I am on the login page
    When I login with john and demo
    Then I should see a text saying Accounts Overview

  Scenario: Successful transfer of funds between two accounts
    When I navigate to the Transfer Funds page
    And I transfer 100 from the first account to the second account
    Then I should see the transfer confirmation message
