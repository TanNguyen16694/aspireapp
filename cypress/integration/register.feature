Feature: Aspire Register

    Background: As a User, I want resgister new account, so that I can access to landing page of Aspire
        Given User access Aspire website

    Scenario: User can register new account viva Phone successfully
        When User input invalid Phone Number
        Then User can not register Account with invalid Phone
        When User input valid Phone Number
        Then User can register account by Phone Successfully

    Scenario: User can register new account viva Email successfully
        When User input invalid Email
        Then User can not register Account with invalid Email
        When User input valid Email
        Then User can register account by Email Successfully

    Scenario: User can completed register new Business Account Successfully
        When User input valid user information
        Then User can request Buisess Account Successfully
        When User input valid register ACRA information
        Then User can register Buisess Account Successfully