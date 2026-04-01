const multiply = (multiplier) => (multiplicand) =>
  multiplicand * multiplier;

const subtract = (minuend) => (subtrahend) =>
  subtrahend - minuend;

const result = compose(
  subtract(2),
  multiply(4),
)(3);

console.log(result);
// 10