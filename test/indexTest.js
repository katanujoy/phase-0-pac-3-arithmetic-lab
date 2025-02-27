const { expect } = require('chai');

const { add, subtract, multiply, divide, increment, decrement, makeInt, preserveDecimal } = require('../index');

var a, b;

beforeEach(function() {
  a = Math.floor(Math.random() * 1000);
  b = Math.floor(Math.random() * 1000);
});

describe('basic math functions', function () {
  it("'add()' is a valid function", function() {
    expect(add).to.not.be.undefined;
  });

  it("'subtract()' is a valid function", function() {
    expect(subtract).to.not.be.undefined;
  });

  it("'multiply()' is a valid function", function() {
    expect(multiply).to.not.be.undefined;
  });

  it("'divide()' is a valid function", function() {
    expect(divide).to.not.be.undefined;
  });

  it('add(a, b) adds two numbers and returns the result', function() {
    expect(add(a, b)).to.equal(a + b);
  });

  it('subtract(a, b) subtracts b from a and returns the result', function() {
    expect(subtract(a, b)).to.equal(a - b);
  });

  it('multiply(a, b) multiplies two numbers and returns the result', function() {
    expect(multiply(a, b)).to.equal(a * b);
  });

  it('divide(a, b) divides a by b and returns the result', function() {
    expect(divide(a, b)).to.equal(a / b);
  });

  it('increment(n) increments n and returns the result', function() {
    expect(increment(a)).to.equal(a + 1);
  });

  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).to.equal(a - 1);
  });

  // Edge Cases
  it('handles addition with negative numbers', function() {
    expect(add(-5, -3)).to.equal(-8);
  });

  it('handles subtraction with negative numbers', function() {
    expect(subtract(-10, 5)).to.equal(-15);
  });

  it('handles multiplication by zero', function() {
    expect(multiply(10, 0)).to.equal(0);
  });

  it('handles division by zero (should return Infinity)', function() {
    expect(divide(10, 0)).to.equal(Infinity);
  });

  it('handles division of zero', function() {
    expect(divide(0, 10)).to.equal(0);
  });

  it('increments zero correctly', function() {
    expect(increment(0)).to.equal(1);
  });

  it('decrements zero correctly', function() {
    expect(decrement(0)).to.equal(-1);
  });
});

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).to.equal(a);
  });

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).to.equal(0);
  });

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).to.equal(true);
  });

  // Edge Cases
  it('parses a float as an integer', function() {
    expect(makeInt('10.99')).to.equal(10);
  });

  it('parses negative numbers correctly', function() {
    expect(makeInt('-42')).to.equal(-42);
  });

  it('returns NaN when parsing an empty string', function() {
    expect(isNaN(makeInt(''))).to.equal(true);
  });
});

describe('preserveDecimal(n)', function() {
  it("preserves n's decimals (it parses n as a floating point number) and returns the parsed number", function() {
    expect(preserveDecimal('2.222')).to.equal(2.222);
  });

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).to.equal(true);
  });

  // Edge Cases
  it('preserves decimals in negative numbers', function() {
    expect(preserveDecimal('-4.56')).to.equal(-4.56);
  });

  it('preserves decimals when given an integer string', function() {
    expect(preserveDecimal('42')).to.equal(42);
  });

  it('returns NaN when given an empty string', function() {
    expect(isNaN(preserveDecimal(''))).to.equal(true);
  });
});
