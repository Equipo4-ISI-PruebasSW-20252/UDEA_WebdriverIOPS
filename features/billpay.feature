Feature: Bill Payment Service
  Background: Successful Login
    Given I am on the login page
    When I login with john and demo
    Then I should see a text saying Accounts Overview

  Scenario: View bill payment page
    Given I am on the status page 
    When I navigate to the bill payment page
    Then I should see a text saying Bill Payment Service

  Scenario Outline: Make a successful bill payment
    Given I navigate to the bill payment page
    When I enter payee name "<payeeName>"
    And I enter address "<address>"
    And I enter city "<city>"
    And I enter state "<state>"
    And I enter zip code "<zipCode>"
    And I enter phone number "<phone>"
    And I enter account number "<account>"
    And I enter verify account number "<verifyAccount>"
    And I enter payment amount "<amount>"
    And I select account "<fromAccount>"
    And I click the send payment button
    Then I should see the payment details with payee "<payeeName>"

  Examples:
    | payeeName | address | city | state | zipCode | phone | account | verifyAccount | amount | fromAccount | 
    | EPM SAS   | Prado   | DIM  | Ant   | 1250    | 13522 | 16008   | 16008         | 2500   | 17340       | 

