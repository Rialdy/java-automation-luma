$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Luma Testing Demo Purchase",
  "description": "",
  "id": "luma-testing-demo-purchase",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12569283625,
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
  "duration": 9967367083,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userVerifTheHomepage()"
});
formatter.result({
  "duration": 3227393041,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.userGoToLoginPage()"
});
formatter.result({
  "duration": 4745193542,
  "status": "passed"
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
  "duration": 3281532875,
  "status": "passed"
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
  "duration": 3084502000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.userClickSignButton()"
});
formatter.result({
  "duration": 5349056084,
  "status": "passed"
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
  "duration": 4064348542,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToJacketsMenu()"
});
formatter.result({
  "duration": 2887206625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickProteusFitnessJackshirt()"
});
formatter.result({
  "duration": 3201574625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseSizeL()"
});
formatter.result({
  "duration": 2252521708,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseColorBlue()"
});
formatter.result({
  "duration": 2182864416,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickAddToCartButton()"
});
formatter.result({
  "duration": 2271637584,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToMenMenu()"
});
formatter.result({
  "duration": 4205002917,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToPantsMenu()"
});
formatter.result({
  "duration": 3393747625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickCronusYogaPant()"
});
formatter.result({
  "duration": 2898739125,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseSize()"
});
formatter.result({
  "duration": 2138817041,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseColorBlue()"
});
formatter.result({
  "duration": 2170205958,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickAddToCartButton()"
});
formatter.result({
  "duration": 2178666500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickCartButton()"
});
formatter.result({
  "duration": 5183469708,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickViewAndEditCart()"
});
formatter.result({
  "duration": 8060373291,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyItem()"
});
formatter.result({
  "duration": 10119653584,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyThePrice()"
});
formatter.result({
  "duration": 10135334709,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickProceedToCheckout()"
});
formatter.result({
  "duration": 6773816042,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.checkTheOrderSummary()"
});
formatter.result({
  "duration": 5117471208,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyTheItem()"
});
formatter.result({
  "duration": 10112220042,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyShippingAddress()"
});
formatter.result({
  "duration": 5059554916,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseShippingMethod()"
});
formatter.result({
  "duration": 5112716875,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickNextButton()"
});
formatter.result({
  "duration": 5205697625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyPaymentPage()"
});
formatter.result({
  "duration": 2475497875,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickPlaceOrder()"
});
formatter.result({
  "duration": 2089733500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifySuccessPage()"
});
formatter.result({
  "duration": 6141312125,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToMyAccount()"
});
formatter.result({
  "duration": 11008391917,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToMyOrderMenu()"
});
formatter.result({
  "duration": 3859807334,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToLatestOrder()"
});
formatter.result({
  "duration": 3782346959,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyTheOrderId()"
});
formatter.result({
  "duration": 2051209792,
  "status": "passed"
});
formatter.after({
  "duration": 230014334,
  "status": "passed"
});
});