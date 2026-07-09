import { calculator } from "./calculator";

test('adding two positive numbers', () => {
    expect(calculator.add(2,2)).toBe(4);
});

test('adding two negative numbers', () => {
    expect(calculator.add(-2,-2)).toBe(-4);
});

test('subtracting two positive numbers', () => {
    expect(calculator.subtract(2,2)).toBe(0);
});

test('subtracting two negative numbers', () => {
    expect(calculator.subtract(-2,-2)).toBe(0);
});

test('multiplying two positive numbers', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});

test('multiplying two negative numbers', () => {
    expect(calculator.multiply(-2,-2)).toBe(4);
});

test('dividing two positive numbers', () => {
    expect(calculator.divide(5,2)).toBeCloseTo(2.5);
});

test('dividing two negative numbers', () => {
    expect(calculator.divide(-5,-2)).toBeCloseTo(2.5);
});

test('dividing with 0', () => {
    expect(calculator.divide(5,0)).toBe('cannot divide with zero');
});

test('dividing 0', () => {
    expect(calculator.divide(0,5)).toBe(0);
});