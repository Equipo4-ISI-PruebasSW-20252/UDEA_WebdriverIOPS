Feature: Para Bank Login Feature

  Scenario: As a user, I want to watch username and password input in the login page
    Given I am on the login page
    Then I should see the username and the password input

  Scenario: Login button should be disabled when fields are empty
    Given I am on the login page
    Then the login button should be disabled

  Scenario Outline: As a user, I can log into the Parabank Accounts Service Page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a text saying <message>

    Examples:
      | username                | password                   | message           |
      | cualquierUsuario1007458 | cualquierPassword100756324 | Error!            |
      | john                    | demo                       | Accounts Overview |
