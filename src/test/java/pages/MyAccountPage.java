package pages;

import helper.Common;

public class MyAccountPage {
    private String myOrderMenu = "(//a[@href='https://magento.softwaretestingboard.com/sales/order/history/'])[2]";
    private String latestOrder = "(//a[@class='action view'])[1]";
    private String orderId = "(//span[@class='base'])[1]";
    private int delay = 2000;

    Common common = new Common();

    public void clickMyOrderMenu() throws InterruptedException {
        common.clickXpath(myOrderMenu);
        common.delay(delay);
    }

    public void checkLastOrder() throws InterruptedException {
        common.clickXpath(latestOrder);
        common.delay(delay);
    }

    public void checkOrderId() throws InterruptedException {
        common.displayXpath(orderId);
        common.delay(delay);
    }


}
