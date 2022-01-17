function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}


function calc(a, operator, b) {
  const value1 = Number(a);
  const value2 = Number(b);
  if (isNaN(value1) || isNaN(value2)) {
    return 'both values must be numbers'
  }
  if (operator === '+') {
    return sum(value1, value2)
  }
  if (operator === '-') {
    return subtract(value1, value2)
  }
  if (operator === '/') {
    return divide(value1, value2)
  }
  if (operator === 'x') {
    return multiply(value1, value2)
  }
  else {
    return 'operator not defined'
  }
}
module.exports = calc;
