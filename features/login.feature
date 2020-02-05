Feature: Allow user to login in account

  I have to login with email with password

  Scenario: User login into portal
    When User is hitting login endpoint with valid details
    Then User should get the token

  Scenario: User login into the account with valid detalis
    When User is hitting login endpoint with valid details
    Then User should get the token

  Scenario: User login into the account with invalid email address
    When User is hitting login endpoint with invalid email address
    Then User should get error message for invalid email

  Scenario: User login into the account with invalid password
    When User is hitting login endpoint with invalid password
    Then User should get error message for invalid password


# /////////////////////////////////////////////////////////////////////////