const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const assert = require('assert');
const { By } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
require('chromedriver');
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(/* ... */)
    // .setFirefoxOptions(/* ... */)
    .build();

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
    // await driver.get(url);
});

When('I add num1 and num2', function () {
    // name is deprecated?
    // await driver.findElement(By.name('q')).sendKeys('search value' + '\n')
});

Then('the result of num1 added to num2 is displayed', function () {
    // let text = await driver.findElement(By.id('search')).getText()
    // console.log(text);
});