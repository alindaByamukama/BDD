Feature: Calc

	Basic calculator application tested with BDD.

	Background: Operands
		Given the numbers 12 and 6	

	Example: Add 
		When they are added
		Then result is 18

	Example: Subtracted
		When they are subtracted
		Then result is 6

	Example: Multiply
		When they are multiplied
		Then result is 72

	Example: Divide
		When they are divided
		Then result is 2
