const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const assert = require('assert');
const { By } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
require('chromedriver');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

const Calculator = require("../../lib/calc");

let driver;
Before(function () {
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(/* ... */)
    // .setFirefoxOptions(/* ... */)
    .build();
})

After(function () {
    driver.quit();
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

Given('I visit the calculator app page', async () => {
    await driver.get('http://207.154.255.199:4300/');
});
