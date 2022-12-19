package pages;

import helper.Common;

public class LoginPage {
    private String emailField = "//input[@name='login[username]']";
    private String passwordField = "//input[@name='login[password]']";
    private String signInButton = "//button[@class='action login primary']";
    private int delay = 3000;

    Common common = new Common();

    public void inputEmail(String email) throws InterruptedException {
        common.sendKeysXpath(emailField, email);
        common.delay(delay);
    }

    public void inputPassword(String password) throws InterruptedException {
        common.sendKeysXpath(passwordField, password);
        common.delay(delay);
    }

    public void clickLogin() throws InterruptedException    {
        common.clickXpath(signInButton);
        common.delay(delay);
    }
}
