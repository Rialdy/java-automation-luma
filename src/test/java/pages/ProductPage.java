package pages;

import helper.Common;

public class ProductPage {
    private String menuJacket = "(//a[@href='https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html'])[2]";
    private String menuPants = "(//a[@href='https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html'])[3]";
    private String proteusFitnessJacket = "//img[@alt='Proteus Fitness Jackshirt']";
    private String cronusYogaPant = "//img[@alt='Cronus Yoga Pant ']";
    private int delay = 2000;

    Common common = new Common();

    public void clickJacketMenu() throws InterruptedException {
        common.clickXpath(menuJacket);
        common.delay(delay);
    }

    public void clickJacketProduct() throws InterruptedException {
        common.clickXpath(proteusFitnessJacket);
        common.delay(delay);
    }

    public void clickPantsMenu() throws InterruptedException {
        common.clickXpath(menuPants);
        common.delay(delay);
    }

    public void clickPantProduct() throws InterruptedException {
        common.clickXpath(cronusYogaPant);
        common.delay(delay);
    }
}
