Feature: ParaBank Status of accounts
    Background: 
        Given I am on the login page
        When I login with john and demo 
        Then I should see a text saying Accounts Overview

    Scenario Outline: As a user I want to see all my accounts in a table
        Given I am on the status page
        Then I see all my accounts in a table


        
