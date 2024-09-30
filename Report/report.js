$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FbRegistration.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the browser maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegistration.to_launch_the_browser_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegistration.to_launch_the_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the firstname in firstname text box",
  "rows": [
    {
      "cells": [
        "Selenium",
        "Python",
        "Java",
        "PHP"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_the_firstname_in_firstname_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the secondname in secondname text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_the_secondname_in_secondname_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "Selinium@gmail.com",
        "87548754",
        "inmakes@gmail.com",
        "6222215"
      ]
    },
    {
      "cells": [
        "8754622215",
        "glady@gmail.com",
        "softwareTestin@gmail.com",
        "67676767"
      ]
    },
    {
      "cells": [
        "automation@gmail.com",
        "67676767",
        "8787878",
        "9898989"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_mobileno_or_email_in_email_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To create new password using new password text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_create_new_password_using_new_password_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegistration.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Sample.feature");
formatter.feature({
  "name": "To validated the login functionality of facebook application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty username and empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url of the facebook Application",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.to_launch_the_url_of_the_facebook_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass validate username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_pass_validate_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid username in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_pass_invalid_username_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to the home page or not",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_check_whether_navigate_to_the_home_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data \"\u003cpassworddatas\u003e\"in password field",
  "keyword": "And "
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "Selenium@gmail.com",
        "Inmakes"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "00341"
      ]
    },
    {
      "cells": [
        "inmakes@gmail.com",
        "selenium"
      ]
    },
    {
      "cells": [
        "iframe@gmail.com",
        "cucumber"
      ]
    },
    {
      "cells": [
        "manualtestin@gmail.com",
        "676767"
      ]
    },
    {
      "cells": [
        "apitesting@gmail.com",
        "gmail"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTwo.has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"Selenium@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"Inmakes\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_close_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTwo.has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"abc@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"00341\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_close_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTwo.has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"inmakes@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"selenium\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_close_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTwo.has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"iframe@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"cucumber\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_close_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTwo.has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"manualtestin@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"676767\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_close_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_chrome_browser_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTwo.has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"apitesting@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"gmail\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to close the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTwo.the_user_has_to_close_the_login_button()"
});
formatter.result({
  "status": "passed"
});
});