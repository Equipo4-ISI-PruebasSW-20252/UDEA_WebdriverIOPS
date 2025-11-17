Feature: ParaBank Loan Application Feature

  Background: Successful Login
    Given I am on the login page
    When I login with john and demo
    Then I should see a text saying Accounts Overview

  Scenario: Successful Loan Application and Approval
    Given I am on the Request Loan page
    When I request a loan for 1000 with down payment of 100
    And I select the first account for fund deposit
    And I click the apply now button
    Then I should see a loan confirmation message saying "Loan Request Processed"
    And the loan status should be "Approved"

  Scenario: Loan Application Rejection (High Amount)
    Given I am on the Request Loan page
    When I request a loan for 999999 with down payment of 100
    And I select the first account for fund deposit
    And I click the apply now button
    Then I should see a loan confirmation message saying "Loan Request Processed"
    And the loan status should be "Denied"
