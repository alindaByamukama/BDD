const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const assert = require('assert');

const Calculator = require("../../lib/calc");

Before(function () {
    console.log('Before Steps')
})

After(function () {
    console.log('After Steps')
})

Given ('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y)
});

When('they are added', function () {
    calculator.add()
});

When('they are subtracted', function () {
    calculator.subtract()
});

When('they are multiplied', function () {
    calculator.multiply()
});

When('they are divided', function () {
    calculator.divide()
    });

Then('result is {int}', function (result) {
    assert.equal(calculator.getResult(), result)
});

Given('I visit the calculator app page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I add num1 and num2', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the result of num1 added to num2 is displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});