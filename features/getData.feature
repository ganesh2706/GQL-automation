Feature: Allow user to get user data

    I have to get data with name and email


    Scenario: User fetches data using valid details
        When User hitting get data endpoint with valid details
        Then User should get data

    Scenario: User fetches data with invalid details
        When User hitting get data endpoint with invalid limit
        Then User should get error of limit is invalid
        When User hitting get data endpoint with invalid skip
        Then User should get error of skip is invalid


