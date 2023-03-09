const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const assert = require('assert');
const { By, Key } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
require('chromedriver');
let driver = driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

const Calculator = require("../../lib/calc");

// Before(function () {
// })

// After(function () {
// })

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

When('I enter a number in num1', async () => {
    let num1 = await driver.findElement(By.id('num1'))
    num1.sendKeys(Key.ENTER, "4", Key.NULL)
});

When('I enter a number in num2', async () => {
    let num2 = await driver.findElement(By.id('num2'))
    num2.sendKeys(Key.ENTER, "4", Key.NULL)
});

When('I click the add button', asyc () => {
    
});

Then('the result of num1 added to num2 is displayed', async () => {
    
});