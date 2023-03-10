const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const assert = require('assert');
const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const service = new chrome.ServiceBuilder('./driver/chromedriver');
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

const Calculator = require("../../lib/calc");

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

Given('the user visits the calc web-page on {string}', {timeout: 50 * 1000}, async (url) => {
    await driver.get(url);
});

When('user inputs num1 {int}',{timeout: 50 * 1000}, async (num1) => {
    let textBox = await driver.findElement(By.name('num1'));
    await textBox.sendKeys(num1);
});

When('user inputs operand {string}',{timeout: 70 * 1000}, async (operand) => {
    let textBox = await driver.findElement(By.name('operand'));
    await textBox.sendKeys(operand);
});

When('user inputs num2 {int}',{timeout: 90 * 1000}, async (num2) => {
    let textBox = await driver.findElement(By.name('num2'));
    await textBox.sendKeys(num2);
});

When('user clicks submit button', { timeout: 100 * 1000 }, async () => {
    let submitButton = await driver.findElement(By.name('calculate'));
    await submitButton.sendKeys("webdriver", Key.ENTER);
});

Then('the display answer is {int}', { timeout: 120 * 1000 }, async (answer) => {
    let textBox = await driver.findElement(By.name('result'));
    let value = await textBox.getText();
    console.log("Value is: ", value);
});