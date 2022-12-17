$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Luma Testing Demo Purchase",
  "description": "",
  "id": "luma-testing-demo-purchase",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13209111167,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User Login to the Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to LUMA page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verify the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User go to login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User input email \"aldydumi@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User input password \"qwerty1234!\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click Sign button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep.userGoToLUMApage()"
});
formatter.result({
  "duration": 1657164167,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom target frame detached\n  (Session info: chrome\u003d108.0.5359.124)\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027rialdyPerdanas-MacBook-Air.local\u0027, ip: \u00272001:448a:4041:122f:6824:4a89:b54a:23c9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f635372fbca0740149092ca4cd7828f2, get {url\u003dhttps://magento.softwaretestingboard.com}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/bq/z5t5wmm5205...}, goog:chromeOptions: {debuggerAddress: localhost:63430}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:63430/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f635372fbca0740149092ca4cd7828f2\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:1031)\n\tat helper.Common.goToUrl(Common.java:15)\n\tat pages.HomePage.goToPage(HomePage.java:18)\n\tat steps.HomePageStep.userGoToLUMApage(HomePageStep.java:13)\n\tat ✽.Given User go to LUMA page(Purchase.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStep.userVerifTheHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStep.userGoToLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "aldydumi@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginPageStep.userInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty1234!",
      "offset": 21
    }
  ],
  "location": "LoginPageStep.userInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStep.userClickSignButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "User Purchase products",
  "description": "",
  "id": "luma-testing-demo-purchase;user-purchase-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@purchase"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User go to men menu",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User go to Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click Proteus Fitness Jackshirt",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User choose size L",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User choose color Blue",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User go to men menu",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User go to Pants menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click Cronus Yoga Pant",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User choose size 33",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User choose color Blue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click view and edit cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User verify the cart page item",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User verify the price",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click the Proceed to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User check the Order Summary",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verify the item",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User verify the shipping address",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User choose the shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click Next button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User verify the payment page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click Place Order",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User verify success page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User go to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User go to MyOrder menu",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User go to latest Order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User verify the orderId",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseStep.goToMenMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.goToJacketsMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickProteusFitnessJackshirt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.chooseSizeL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.chooseColorBlue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.goToMenMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.goToPantsMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickCronusYogaPant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.chooseSize()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.chooseColorBlue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickViewAndEditCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifyItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifyThePrice()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.checkTheOrderSummary()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifyTheItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifyShippingAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.chooseShippingMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifyPaymentPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.clickPlaceOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifySuccessPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.goToMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.goToMyOrderMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.goToLatestOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.verifyTheOrderId()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 693041334,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.124)\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027rialdyPerdanas-MacBook-Air.local\u0027, ip: \u00272001:448a:4041:122f:6824:4a89:b54a:23c9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f635372fbca0740149092ca4cd7828f2, close {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/bq/z5t5wmm5205...}, goog:chromeOptions: {debuggerAddress: localhost:63430}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:63430/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f635372fbca0740149092ca4cd7828f2\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:606)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:432)\n\tat setups.ChromeSetup.chromeStop(ChromeSetup.java:15)\n\tat setups.Hook.after(Hook.java:14)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
});