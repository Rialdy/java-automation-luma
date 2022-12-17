package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import pages.HomePage;
import pages.LoginPage;

public class LoginPageStep {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("User go to login page")
    public void userGoToLoginPage() throws Throwable {
        homePage.clickSignIn();
    }

    @And("User input email \"([^\"]*)\"")
    public void userInputEmail(String email) throws Throwable {
        loginPage.inputEmail(email);
    }

    @And("User input password \"([^\"]*)\"")
    public void userInputPassword(String password) throws Throwable {
        loginPage.inputPassword(password);
    }

    @And("User click Sign button")
    public void userClickSignButton() throws Throwable {
        loginPage.clickLogin();
    }
}
