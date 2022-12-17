Feature: Luma Testing Demo Login

  Background: User open to LUMA page
    Given User go to LUMA page
    Then User verify the homepage
    
  @login
  Scenario: User login to the page
    Given User go to login page
    And User input email "aldydumi@gmail.com"
    And User input password "qwerty1234!"
    And User click Sign button