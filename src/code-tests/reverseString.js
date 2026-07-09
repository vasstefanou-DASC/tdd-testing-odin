export function reverse(s) {
    if(!s || !s.trim()) {
        return "cannot reverse empty string";
    }
    const sArr = Array.from(s);
    return sArr.reverse().join("");
}