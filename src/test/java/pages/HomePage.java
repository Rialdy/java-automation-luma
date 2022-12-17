package pages;

import helper.Common;

public class HomePage {
    private String lumaIcon = "//a[@aria-label='store logo']";
    private String signIn = "(//a[@href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'])[1]";
    private String menMenu = "(//span[@class='ui-menu-icon ui-icon ui-icon-carat-1-e'])[4]";
    private String welcomeMsg = "(//li[@class='greet welcome'])[1]";
    private String webAddress = "https://magento.softwaretestingboard.com";
    private String userToggle = "(//button[@data-action='customer-menu-toggle'])[1]";
    private String myAccount = "(//a[@href='https://magento.softwaretestingboard.com/customer/account/'])[1]";
    private int delay = 2000;

    Common common = new Common();

    public void goToPage() throws InterruptedException {
        common.goToUrl(webAddress);
        common.delay(delay);
    }

    public void iconStore() throws InterruptedException {
        common.displayXpath(lumaIcon);
        common.delay(delay);
    }

    public void clickSignIn() throws InterruptedException {
        common.clickXpath(signIn);
        common.delay(delay);
    }

    public void clickMenMenu() throws InterruptedException {
        common.clickXpath(menMenu);
        common.delay(delay);
    }

    public void greetingWelcome() throws InterruptedException {
        common.displayXpath(welcomeMsg);
        common.delay(delay);
    }

    public void clickAccountIcon() throws InterruptedException {
        common.clickXpath(userToggle);
        common.delay(delay);
    }

    public void myAccountDisplayed() throws InterruptedException {
        common.displayXpath(myAccount);
        common.delay(delay);
    }

    public void clickMyAccount() throws InterruptedException {
        common.clickXpath(myAccount);
        common.delay(delay);
    }


}
