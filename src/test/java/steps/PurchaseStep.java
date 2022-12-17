package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CartPage;
import pages.CheckoutPage;
import pages.HomePage;
import pages.MyAccountPage;
import pages.PaymentPage;
import pages.ProductDetailPage;
import pages.ProductPage;
import pages.PurchasePage;

public class PurchaseStep {

    HomePage homePage = new HomePage();
    ProductPage productPage = new ProductPage();
    ProductDetailPage productDetailPage = new ProductDetailPage();
    CartPage cartPage = new CartPage();
    CheckoutPage checkoutPage = new CheckoutPage();
    PaymentPage paymentPage = new PaymentPage();
    PurchasePage purchasePage = new PurchasePage();
    MyAccountPage myAccountPage = new MyAccountPage();

    @Given("User go to men menu")
    public void goToMenMenu() throws Throwable {
        homePage.clickMenMenu();
    }

    @And("User go to Jackets menu")
    public void goToJacketsMenu() throws Throwable {
        productPage.clickJacketMenu();
    }
    
    @And("User click Proteus Fitness Jackshirt")
    public void clickProteusFitnessJackshirt() throws Throwable {
        productPage.clickJacketProduct();
    }

    @And("User choose size L")
    public void chooseSizeL() throws Throwable {
        productDetailPage.clickSizeJacket();
    }

    @And("User choose color Blue")
    public void chooseColorBlue() throws Throwable {
        productDetailPage.chooseColor();
    }

    @And("User click Add to Cart button")
    public void clickAddToCartButton() throws Throwable {
        productDetailPage.clickAddToCart();
    }

    @And("User go to Pants menu")
    public void goToPantsMenu() throws Throwable {
        productPage.clickPantsMenu();
    }

    @And("User click Cronus Yoga Pant")
    public void clickCronusYogaPant() throws Throwable {
        productPage.clickPantProduct();
    }

    @And("User choose size 33")
    public void chooseSize() throws Throwable {
        productDetailPage.clickSizePant();
    }

    @And("User click cart button")
    public void clickCartButton() throws Throwable {
        cartPage.clickCartIcon();
    }

    @And("User click view and edit cart")
    public void clickViewAndEditCart() throws Throwable {
        cartPage.clickViewEditCart();
    }

    @And("User verify the cart page item")
    public void verifyItem() throws Throwable {
        cartPage.displayOne();
        cartPage.displayTwo();
    }

    @And("User verify the price")
    public void verifyThePrice() throws Throwable {
        cartPage.displayPriceOne();
        cartPage.displayPriceTwo();
    }

    @And("User click the Proceed to Checkout")
    public void clickProceedToCheckout() throws Throwable {
        cartPage.clickButtonProceedToCheckOut();
    }

    @And("User check the Order Summary")
    public void checkTheOrderSummary() throws Throwable {
        checkoutPage.clickOrderSummary();
    }

    @Then("User verify the item")
    public void verifyTheItem() throws Throwable {
        checkoutPage.displayItemOne();
        checkoutPage.displayItemTwo();
    }

    @And("User verify the shipping address")
    public void verifyShippingAddress() throws Throwable {
        checkoutPage.displayShippingAddress();
    }

    @And("User choose the shipping method")
    public void chooseShippingMethod() throws Throwable {
        checkoutPage.clickTableRate();
    }

    @And("User click Next button")
    public void clickNextButton() throws Throwable {
        checkoutPage.clickNext();
    }

    @And("User verify the payment page")
    public void verifyPaymentPage() throws Throwable {
        paymentPage.paymentMethodPage();
    }

    @When("User click Place Order")
    public void clickPlaceOrder() throws Throwable {
        paymentPage.clickPlaceHolder();
    }

    @And("User verify success page")
    public void verifySuccessPage() throws Throwable {
        purchasePage.thankYoutext();
        purchasePage.displayOrderNumber();
    }

    @And("User go to My Account")
    public void goToMyAccount() throws Throwable {
        homePage.clickAccountIcon();
        homePage.myAccountDisplayed();
        homePage.clickMyAccount();
    }

    @And("User go to MyOrder menu")
    public void goToMyOrderMenu() throws Throwable {
        myAccountPage.clickMyOrderMenu();
    }

    @And("User go to latest Order")
    public void goToLatestOrder() throws Throwable {
        myAccountPage.checkLastOrder();
    }

    @Then("User verify the orderId")
    public void verifyTheOrderId() throws Throwable {
        myAccountPage.checkOrderId();
    }
}
