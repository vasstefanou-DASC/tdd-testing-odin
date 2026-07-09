import { capitalize } from "./capitalize";

test('capitalize String', () => {
    expect(capitalize("world")).toBe("World");
});