package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.HomePage;

public class HomePageStep {

    HomePage homepage = new HomePage();

    @Given("User go to LUMA page")
    public void userGoToLUMApage() throws Throwable {
        homepage.goToPage();
    }

    @Then("User verify the homepage")
    public void userVerifTheHomepage() throws Throwable {
        homepage.iconStore();
    }
}
