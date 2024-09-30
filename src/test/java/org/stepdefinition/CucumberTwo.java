package org.stepdefinition;

import org.sam.BaseClass;
import org.sample.FbLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CucumberTwo extends BaseClass {
	
	
	FbLoginPojo f;
	@Given("User has to launch the browser and maximise the window")
	public void user_has_to_launch_the_browser_and_maximise_the_window() {
		launchBrowser();
		windowMaximize();
		
	   
	    
	}

	@When("has to hit the facebook url")
	public void has_to_hit_the_facebook_url() {
		launchUrl("https://en-gb.facebook.com/");
	    
	   
	}

	@When("User has to pass the data {string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String em) {
		f=new FbLoginPojo();
		passText(em, f.getEmail());
	  
	    
	}

	@When("User has to pass the data {string}in password field")
	public void user_has_to_pass_the_data_in_password_field(String password) {
		f=new FbLoginPojo();
		passText(password, f.getPaasword());
	   
	   
	}

	@When("the user has to click the login button")
	public void the_user_has_to_click_the_login_button() {
		f=new FbLoginPojo();
		clickBtn(f.getLoginBtn());
	   
	    
	}

	@Then("the user has to close the login button")
	public void the_user_has_to_close_the_login_button() {
		closeEntireBrowser();
	   
	    
	}


}
