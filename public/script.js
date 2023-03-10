const result = document.getElementById('result');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operand = document.getElementById('operand');
const calculate = document.getElementById('calculate')
const Calculator = require('../lib/calc')

num1.addEventListener('input', (e) => {
    e.preventDefault();
    display.textContent = parseInt(num1.value, 10);
});

num2.addEventListener('input', (e) => {
    e.preventDefault();
    display.textContent = parseInt(num2.value, 10);
});

operand.addEventListener('input', (e) => {
    e.preventDefault();
    display.textContent = operand.value;
});

calculate.addEventListener('submit', (e) => {
    e.preventDefault();
    result = `${num1.value} + ${operand.value} + ${num2.value}`;
    display.textContent = calculate.value;
});
