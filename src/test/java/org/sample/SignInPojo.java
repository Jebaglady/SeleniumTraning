package org.sample;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.sam.BaseClass;

public class SignInPojo extends BaseClass {
	
	public SignInPojo() {
		PageFactory.initElements(driver, this);
	}
		
		@FindBy(xpath = "//a[text()='Create new account']")
		private WebElement createNewAcc;
		
		@FindBy(name = "firstname")
		private WebElement firstNameTxtBox;
		
		@FindBy(name = "lastname")
		private WebElement secondNameTxtBox;
		
		@FindBy(name = "reg_email__")
		private WebElement mobileorEmailTextBox;
		
		@FindBy(xpath = "//input[@data-type='password']")
		private WebElement newPassword;

		public WebElement getCreateNewAcc() {
			return createNewAcc;
		}

		public WebElement getFirstNameTxtBox() {
			return firstNameTxtBox;
		}

		public WebElement getSecondNameTxtBox() {
			return secondNameTxtBox;
		}

		public WebElement getMobileorEmailTextBox() {
			return mobileorEmailTextBox;
		}

		public WebElement getNewPassword() {
			return newPassword;
		}
		
	

		
		

}
	
	
