import {reverse} from './reverseString';

test('reversing a string' , () => {
    expect(reverse("WoRlD")).toBe("DlRoW");
});

test('reversing empty string' , () => {
    expect(reverse("")).toBe("cannot reverse empty string");
});

test('reversing number string' , () => {
    expect(reverse("123abc")).toBe("cba321");
});