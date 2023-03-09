Feature: Calc App

	Basic calculator application tested with BDD - Selenium.

	Background: Frontend
		Given I visit the calculator app page	

	Example: Add 
		When I add num1 and num2
		Then the result of num1 added to num2 is displayed

	Example: Subtracted
		When I subtract num1 and num2
		Then the result of num1 minus num2 is displayed

	Example: Multiply
		When I multiply num1 and num2
		Then the result of num1 multiplied by num2 is displayed

	Example: Divide
		When I multiply num1 and num2
		Then the result of num1 divided by num2 is displayed
