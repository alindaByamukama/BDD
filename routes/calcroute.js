const express = require('express');
const Calculator = require('../lib/calc');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  let num1 = parseInt(req.body.num1, 10);
  let num2 = parseInt(req.body.num2, 10)
  let operand = req.body.operand;
  let calculator = new Calculator(num1, num2);
  let result = 0;
  
  if (operand === 'add' ) calculator.add();
  if (operand === 'subtract' ) calculator.subtract();
  if (operand === 'multiply' ) calculator.multiply();
  if (operand === 'divide' ) calculator.divide();
  result = calculator.getResult();
  res.render('index', { result, num1, num2, operand });
});

module.exports = router;
