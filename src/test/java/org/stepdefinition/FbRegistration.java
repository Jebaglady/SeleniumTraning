package org.stepdefinition;

import io.cucumber.datatable.*;

import java.util.List;

import org.sam.BaseClass;
import org.sample.SignInPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbRegistration extends BaseClass {
	
	
	
	SignInPojo s;
	@Given("To launch the browser maximise the window")
	public void to_launch_the_browser_maximise_the_window() {
		launchBrowser();
		windowMaximize();
	   
	}

	@When("To launch the url of fb application")
	public void to_launch_the_url_of_fb_application() {
		launchUrl("https://en-gb.facebook.com/");
	 
	}

	@When("To click the create new account button")
	public void to_click_the_create_new_account_button() {
		s=new SignInPojo();
		clickBtn(s.getCreateNewAcc());
	    
	}

	@When("To pass the firstname in firstname text box")
	public void to_pass_the_firstname_in_firstname_text_box(DataTable  d) throws InterruptedException {
		Thread.sleep(3000);
		List<String> l = d.asList();
		s=new SignInPojo();
		passText(l.get(2), s.getFirstNameTxtBox());
		
		
		//passText("glady", s.getFirstNameTxtBox());
	
	    
	}

	@When("To pass the secondname in secondname text box")
	public void to_pass_the_secondname_in_secondname_text_box() {
		s=new SignInPojo();
		passText("raj", s.getSecondNameTxtBox());
	
	   
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box(DataTable d) {
		s=new SignInPojo();
		
	          List<List<String>> l = d.asLists();
	          passText(l.get(1).get(2), s.getMobileorEmailTextBox());
		
		//passText("selenium@gmail.com", s.getMobileorEmailTextBox());
	    
	}

	@When("To create new password using new password text box")
	public void to_create_new_password_using_new_password_text_box() {
		s=new SignInPojo();
		passText("adcvghj", s.getNewPassword());
	
	    
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
		//closeEntireBrowser();
	    
	}



}
