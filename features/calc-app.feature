Feature: Calc App

	Basic calculator application tested with BDD - Selenium.

	Background: Frontend Calc App
		Given I visit the calculator app page	
        When I enter a number in num1
        When I enter a number in num2

	Example: Add 
		When I click the add button
		Then the result of num1 added to num2 is displayed
