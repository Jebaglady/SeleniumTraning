package org.sample;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.sam.BaseClass;

public class FbLoginPojo extends BaseClass {

	// 1.non parameterizes constructor

	public FbLoginPojo() {
	
		PageFactory.initElements(driver, this);
		

	}

	// 2.private webelements
	 //webElement email= driver.findElemnt(By.id("email"));
	
	@FindBy(id = "email")
	private WebElement email;


	//@FindAll({ @FindBy(xpath = "//input[@id='email']"), @FindBy(xpath = "//input[@name='email']"),
		//	@FindBy(xpath = "//input[@data-testid='royal_email']") })
	//private WebElement varRef;

	@FindBy(xpath = "//input[@name='pass']")
	private WebElement paasword;

	@FindBy(name = "login")
	private WebElement loginBtn;

	// 3.getter to access login webelement outside the class

	public WebElement getEmail() {
		return email;
	}

	//public WebElement getVarRef() {
		//return varRef;
	//}

	public WebElement getPaasword() {
		return paasword;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

}
