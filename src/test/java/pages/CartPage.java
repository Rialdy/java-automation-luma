package pages;

import helper.Common;

public class CartPage {
    private String cartIcon = "//a[@class='action showcart']";
    private String proceedToCheckout = "top-cart-btn-checkout"; //id
    private String viewAndEditCart = "//a[@class='action viewcart']";
    private String proceedToCheckoutButton = "//button[@data-role='proceed-to-checkout']";
    private String proteusFitnessJackshirt = "(//a[@title='Proteus Fitness Jackshirt'])[2]";
    private String cronusYogaPant = "(//a[@title='Cronus Yoga Pant '])[2]"; 
    private String priceOne = "(//span[@class='cart-price'])[1]";
    private String priceTwo = "(//span[@class='cart-price'])[3]";

    private int delay = 5000;

    Common common = new Common();

    public void clickCartIcon() throws InterruptedException {
        common.clickXpath(cartIcon);
        common.delay(delay);
    }

    public void clickProceedToCheckout() throws InterruptedException {
        common.clickId(proceedToCheckout);
        common.delay(delay);
    }

    public void clickViewEditCart() throws InterruptedException {
        common.clickXpath(viewAndEditCart);
        common.delay(delay);
    }

    public void clickButtonProceedToCheckOut() throws InterruptedException {
        common.clickXpath(proceedToCheckoutButton);
        common.delay(delay);
    }

    public void displayOne() throws InterruptedException {
        common.displayXpath(proteusFitnessJackshirt);
        common.delay(delay);
    }
    
    public void displayTwo() throws InterruptedException {
        common.displayXpath(cronusYogaPant);
        common.delay(delay);
    }

    public void displayPriceOne() throws InterruptedException {
        common.displayXpath(priceOne);
        common.delay(delay);
    }

    public void displayPriceTwo() throws InterruptedException {
        common.displayXpath(priceTwo);
        common.delay(delay);
    }
}
