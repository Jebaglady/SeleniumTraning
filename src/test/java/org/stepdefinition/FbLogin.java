package org.stepdefinition;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.sam.BaseClass;

import org.sample.FbLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbLogin extends BaseClass {

	FbLoginPojo f;// global declaration

	@Given("To launch the chrome browser maximize window")
	public void to_launch_the_chrome_browser_maximize_window() {
		launchBrowser();
		windowMaximize();

	}

	@When("To launch the url of the facebook Application")
	public void to_launch_the_url_of_the_facebook_Application() {
		launchUrl("https://en-gb.facebook.com/");

	}

	@When("To pass validate username in email field")
	public void to_pass_validate_username_in_email_field() {
		FbLoginPojo f=new FbLoginPojo();
		passText("selenium@gmail.com", f.getEmail());
		
		//WebElement email = driver.findElement(By.id("email"));
		//passText("Selenium@gmail.com", email);
		
		
	}

	@When("To pass invalid username in password field")
	public void to_pass_invalid_username_in_password_field() {
		//WebElement password = driver.findElement(By.name("pass"));
		//passText("Inmakes", password);
		FbLoginPojo f = new FbLoginPojo();
		passText("Inmakes", f.getPaasword());

	}

	@When("To click the login button")
	public void to_click_the_login_button() {
		f = new FbLoginPojo();
		clickBtn(f.getLoginBtn());

	}

	@When("To check whether navigate to the home page or not")
	public void to_check_whether_navigate_to_the_home_page_or_not() {
		System.out.println("To check your login credentials ");

	}

	@Then("close the browser")
	public void close_the_browser() {
		closeEntireBrowser();

	}

}
