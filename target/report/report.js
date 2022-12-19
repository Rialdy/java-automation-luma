$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Luma Testing Demo Purchase",
  "description": "",
  "id": "luma-testing-demo-purchase",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13192454542,
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
  "duration": 10017880375,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userVerifTheHomepage()"
});
formatter.result({
  "duration": 3061430375,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.userGoToLoginPage()"
});
formatter.result({
  "duration": 4503106792,
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
  "duration": 2246306833,
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
  "duration": 2083143500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.userClickSignButton()"
});
formatter.result({
  "duration": 4638835250,
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
  "duration": 3224107750,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToJacketsMenu()"
});
formatter.result({
  "duration": 2970067625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickProteusFitnessJackshirt()"
});
formatter.result({
  "duration": 3229597125,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseSizeL()"
});
formatter.result({
  "duration": 2223580708,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseColorBlue()"
});
formatter.result({
  "duration": 2187044459,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickAddToCartButton()"
});
formatter.result({
  "duration": 2272155083,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToMenMenu()"
});
formatter.result({
  "duration": 3168561875,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToPantsMenu()"
});
formatter.result({
  "duration": 3674030625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickCronusYogaPant()"
});
formatter.result({
  "duration": 2958453958,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseSize()"
});
formatter.result({
  "duration": 2121021750,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseColorBlue()"
});
formatter.result({
  "duration": 2161906083,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickAddToCartButton()"
});
formatter.result({
  "duration": 2185582750,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickCartButton()"
});
formatter.result({
  "duration": 5238799583,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickViewAndEditCart()"
});
formatter.result({
  "duration": 8007256458,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyItem()"
});
formatter.result({
  "duration": 10128501292,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyThePrice()"
});
formatter.result({
  "duration": 10152735209,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickProceedToCheckout()"
});
formatter.result({
  "duration": 6594063208,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.checkTheOrderSummary()"
});
formatter.result({
  "duration": 5115576666,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyTheItem()"
});
formatter.result({
  "duration": 10099987416,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyShippingAddress()"
});
formatter.result({
  "duration": 5071666500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.chooseShippingMethod()"
});
formatter.result({
  "duration": 5147306917,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickNextButton()"
});
formatter.result({
  "duration": 5224136875,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyPaymentPage()"
});
formatter.result({
  "duration": 2049955208,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickPlaceOrder()"
});
formatter.result({
  "duration": 2100528042,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifySuccessPage()"
});
formatter.result({
  "duration": 4089449916,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToMyAccount()"
});
formatter.result({
  "duration": 7912535333,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToMyOrderMenu()"
});
formatter.result({
  "duration": 4171591792,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.goToLatestOrder()"
});
formatter.result({
  "duration": 3294723375,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyTheOrderId()"
});
formatter.result({
  "duration": 2055258250,
  "status": "passed"
});
formatter.after({
  "duration": 219242333,
  "status": "passed"
});
});