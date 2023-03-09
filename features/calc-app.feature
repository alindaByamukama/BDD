Feature: Calc App

	Basic calculator application tested with BDD - Selenium.

	Background: Frontend
		Given I visit the calculator app page	

	Example: Add 
        When I enter an integer value in num1 
        When I enter an integer value in num2 
		When I click the add button
		Then the result of num1 added to num2 is displayed

	Example: Subtracted
        When I enter an integer value in num1 
        When I enter an integer value in num2 
		When I click subtract button
		Then the result of num1 minus num2 is displayed

	Example: Multiply
        When I enter an integer value in num1 
        When I enter an integer value in num2 
		When I click multiply button
		Then the result of num1 multiplied by num2 is displayed

	Example: Divide
        When I enter an integer value in num1 
        When I enter an integer value in num2 
		When I click divide button
		Then the result of num1 divided by num2 is displayed
