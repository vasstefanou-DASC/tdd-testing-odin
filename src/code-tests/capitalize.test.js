import { capitalize } from "./capitalize";

test('capitalize a lowercase word', () => {
    expect(capitalize("world")).toBe("World");
});

test('capitalize an uppercase word', () => {
    expect(capitalize("WORLD")).toBe("World");
});

test('capitalize empty string', () => {
    expect(capitalize("")).toBe("no string found");
});

test('capitalize single character', () => {
    expect(capitalize("w")).toBe("W");
});

test('capitalize string that starts with number', () => {
    expect(capitalize("123world")).toBe("123world");
});

test('capitalize string that includes number', () => {
    expect(capitalize("worlds12")).toBe("Worlds12");
});

test('capitalize whitespace-only string', () => {
    expect(capitalize("   ")).toBe("no string found");
});