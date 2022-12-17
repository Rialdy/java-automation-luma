package pages;

import helper.Common;

public class ProductDetailPage {
    private String sizeJacket = "//div[@aria-label='L']";
    private String sizePant = "//div[@aria-label='33']";
    private String colorBlue = "//div[@aria-label='Blue']";
    private String addToCart = "//button[@title='Add to Cart']";
    private int delay = 2000;

    Common common = new Common();

    public void clickSizeJacket() throws InterruptedException {
        common.clickXpath(sizeJacket);
        common.delay(delay);
    }

    public void clickSizePant() throws InterruptedException {
        common.clickXpath(sizePant);
        common.delay(delay);
    }

    public void chooseColor() throws InterruptedException {
        common.clickXpath(colorBlue);
        common.delay(delay);
    }

    public void clickAddToCart() throws InterruptedException {
        common.enterXpath(addToCart);
        common.delay(delay);
    }
}
