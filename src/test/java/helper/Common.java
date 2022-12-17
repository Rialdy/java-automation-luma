package helper;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import setups.BrowserPool;

public class Common {

    public void delay(int delay) throws InterruptedException {
        Thread.sleep(delay);
    }
    
    public void goToUrl(String url) { 
        BrowserPool.getChrome().manage().window().maximize();
        BrowserPool.getChrome().navigate().to(url);
        // BrowserPool.getDriver().manage().window().maximize();
        // BrowserPool.getDriver().navigate().to(url);
    }

    public void clickId(String element) {
        BrowserPool.getChrome().findElement(By.id(element)).click();
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.id(element)));
    }

    public void clickXpath(String element) {
        BrowserPool.getChrome().findElement(By.xpath(element)).click();
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element)));
    }

    public void sendKeysId(String element, String text) {
        BrowserPool.getChrome().findElement(By.id(element)).sendKeys(text);
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.id(element))).sendKeys(text);
    }

    public void sendKeysXpath(String element, String text) {
        BrowserPool.getChrome().findElement(By.xpath(element)).sendKeys(text);
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element))).sendKeys(text);
    }

    public void enterId(String element) {
        BrowserPool.getChrome().findElement(By.id(element)).sendKeys(Keys.ENTER);
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.id(element))).sendKeys(Keys.ENTER);
    }

    public void enterXpath(String element) {
        BrowserPool.getChrome().findElement(By.xpath(element)).sendKeys(Keys.ENTER);
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element))).sendKeys(Keys.ENTER);
    }

    public void displayId(String element)   {
        BrowserPool.getChrome().findElement(By.id(element)).isDisplayed();
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.id(element))).isDisplayed();
    }

    public void displayXpath(String element)    {
        BrowserPool.getChrome().findElement(By.xpath(element)).isDisplayed();
        // BrowserPool.getChrome().until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element))).isDisplayed();
    }
}
