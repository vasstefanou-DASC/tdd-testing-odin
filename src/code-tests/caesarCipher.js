const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// const alphabet = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
const nonAlphanumericRegExp = /[\W_]/;

export function caesar(s,num) {
    const nArr = [];
    const sArr = Array.from(s);
    sArr.forEach(letter => {
        if (!nonAlphanumericRegExp.test(letter)) {
            const idx = alphabet.indexOf(letter.toLowerCase());
            const nLetter = letter === letter.toUpperCase() ? alphabet.at((idx+num)%26).toUpperCase() : alphabet.at((idx+num)%26);
            nArr.push(nLetter);
        } else {
            nArr.push(letter);
        }
    });
    return nArr.join("");
    
}