Feature: Allow user to get data from Get data query

  I have to get data ith name and email

  Background: User login into portal
    When User is hitting login endpoint with valid details
  # Then User should get the token

  Scenario: User fetches data using valid details
    When User hitting get data endpoint with valid details
    Then User should get data

  Scenario: User fetches data with invalid details
    When User hitting get data endpoint with invalid limit
    Then User should get error of limit is invalid
    When User hitting get data endpoint with invalid skip
    Then User should get error of skip is invalid

# Scenario: USer fetches data with blank details
#   When User hitting get data endpoint with blank limit
#   Then User should get error of limit is required
#   When User hitting get data endpoint with blank skip
#   Then User should get error of skip is required