Feature: GUI

	Basic calculator application tested with BDD - Selenium.

	Example: Add 
        Given the user visits the calc web-page on "http://localhost:8081/"
		When user inputs num1 12
        And user inputs operand "add"
        And user inputs num2 6
        And user clicks submit button
		Then the display answer is 18
