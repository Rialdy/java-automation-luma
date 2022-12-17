package pages;

import helper.Common;

public class PurchasePage {
    private String thankYou = "//span[@class='base']";
    private String orderNumber = "//a[@class='order-number']";
    private int delay = 2000;

    Common common = new Common();

    public void thankYoutext() throws InterruptedException {
        common.displayXpath(thankYou);
        common.delay(delay);
    }

    public void displayOrderNumber() throws InterruptedException {
        common.displayXpath(orderNumber);
        common.delay(delay);
    }
}
