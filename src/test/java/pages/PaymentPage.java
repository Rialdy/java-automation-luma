package pages;

import helper.Common;

public class PaymentPage {
    private String paymentMethod = "//div[@class='payment-group']";
    private String placeHolder = "//button[@class='action primary checkout']";
    private int delay = 2000;

    Common common = new Common();

    public void paymentMethodPage() throws InterruptedException {
        common.displayXpath(paymentMethod);
        common.delay(delay);
    }

    public void clickPlaceHolder() throws InterruptedException {
        common.clickXpath(placeHolder);
        common.delay(delay);
    }
}
