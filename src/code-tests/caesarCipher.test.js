import { caesar } from "./caesarCipher";

test('easy caesar cipher', () => {
    expect(caesar('abc',1)).toBe('bcd');
});

test('wrapping caesar cipher', () => {
    expect(caesar('xyz',4)).toBe('bcd');
});

test('case preservation', () => {
    expect(caesar('aBCd',2)).toBe('cDEf');
});

test('non alphabetical characters stay unchanged', () => {
    expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});