Feature: To validated the login functionality of facebook application

Background:
Given To launch the chrome browser maximize window


@Regression @Sanity
Scenario: To validate login with empty username and empty password

When To launch the url of the facebook Application
And To pass validate username in email field
And To pass invalid username in password field
And To click the login button
And To check whether navigate to the home page or not
Then close the browser

@Smoke
Scenario Outline: To validate the positive and negative combination of login functionality

When has to hit the facebook url
And User has to pass the data "<emaildatas>" in email field
And User has to pass the data "<passworddatas>"in password field
And the user has to click the login button
Then  the user has to close the login button


Examples:
|emaildatas              |passworddatas|
|Selenium@gmail.com      |Inmakes     |
|abc@gmail.com           |00341      |            
|inmakes@gmail.com       |selenium   |
|iframe@gmail.com         |cucumber  |
|manualtestin@gmail.com   |676767    |
|apitesting@gmail.com     |gmail     |






 
