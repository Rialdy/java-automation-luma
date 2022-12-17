package pages;

import helper.Common;

public class CheckoutPage {
    private String orderSummary = "//strong[@aria-level='1']";
    private String itemOne = "(//div[@class='product-item-name-block'])[1]";
    private String itemTwo = "(//div[@class='product-item-name-block'])[2]";
    private String shippingAddress = "//div[@class='shipping-address-item selected-item']";
    private String shippingTableRate = "//input[@value='tablerate_bestway']";
    private String shippingFixed = "//input[@value='flatrate_flatrate']";
    private String nextButton = "//button[@class='button action continue primary']";
    private int delay = 5000;

    Common common = new Common();

    public void clickOrderSummary() throws InterruptedException {
        common.clickXpath(orderSummary);
        common.delay(delay);
    }

    public void displayItemOne() throws InterruptedException {
        common.displayXpath(itemOne);
        common.delay(delay);
    }

    public void displayItemTwo() throws InterruptedException {
        common.displayXpath(itemTwo);
        common.delay(delay);
    }

    public void displayShippingAddress() throws InterruptedException {
        common.displayXpath(shippingAddress);
        common.delay(delay);
    }

    public void clickTableRate() throws InterruptedException {
        common.clickXpath(shippingTableRate);
        common.delay(delay);
    }

    public void clickFixed() throws InterruptedException {
        common.clickXpath(shippingFixed);
        common.delay(delay);
    }

    public void clickNext() throws InterruptedException {
        common.clickXpath(nextButton);
        common.delay(delay);
    }
}


