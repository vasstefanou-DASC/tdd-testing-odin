import { analyze } from "./analyzeArray";


test('show correct average', () => {
    expect(analyze([1,2,3,4]).average).toBeCloseTo(2.5);
});
test('show correct minimum', () => {
    expect(analyze([1,2,3,4]).min).toBe(1);
});
test('show correct maximum', () => {
    expect(analyze([1,2,3,4]).max).toBe(4);
});
test('show correct length', () => {
    expect(analyze([1,2,3,4]).length).toBe(4);
});