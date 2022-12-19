
Feature: Luma Testing Demo Purchase

     Background: User Login to the Page
         Given User go to LUMA page
         Then User verify the homepage
         When User go to login page
         And User input email "aldydumi@gmail.com"
         And User input password "qwerty1234!"
         And User click Sign button

    @purchase
     Scenario: User Purchase products
         Given User go to men menu
         And User go to Jackets menu
         And User click Proteus Fitness Jackshirt
         And User choose size L
         And User choose color Blue
         And User click Add to Cart button
         And User go to men menu
         And User go to Pants menu
         And User click Cronus Yoga Pant
         And User choose size 33
         And User choose color Blue
         And User click Add to Cart button
         And User click cart button
         And User click view and edit cart
         And User verify the cart page item
         And User verify the price
         And User click the Proceed to Checkout
         And User check the Order Summary
         Then User verify the item
         And User verify the shipping address
         And User choose the shipping method
         And User click Next button
         And User verify the payment page
         When User click Place Order
         And User verify success page
         And User go to My Account
         And User go to MyOrder menu
         And User go to latest Order
         Then User verify the orderId


         

        #  mvn surefire-report:report
        #  mvn clean test -Dcucumber.options="--tags '@purchase'"