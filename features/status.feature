Feature: ParaBank Status of accounts
    Background: 
        Given I am on the login page
        When I login with john and demo 

    Scenario Outline: As a user I want to see all my accounts in a table
        Given I am on the status page
        Then I see all my accounts in a table
        And I see the balance of each account

    Scenario: As a user I want each account to have its balance
        Given I am on the status page
        Then I see all my accounts
        
