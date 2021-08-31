let { repeatMessage } = require('../source/index');

let messageToTest = "alex was here again";

test('example test to show things working', () => {

    // repeatMessage("test message", 3);

    expect("data to check is passed here").toBeTruthy();
    expect(null).not.toBeTruthy();

});

describe('repeatMessage golden path functionality', () => {
    test("Repeat message is a function.", () => {
        expect(typeof(repeatMessage)).toBe("function");
    });

    test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'.", () => {
        expect(repeatMessage(messageToTest, 3)).toEqual("hellohellohello");
    });
});

describe('repeatMessage should break..', () => {
    test(' if no string is provided for the message', () => {
        // expect(repeatMessage(1, 1)).toThrow();
        expect(() => {repeatMessage(1, 1)}).toThrow();
    })

    test('should throw an error if no number is provided for 2nd argument', () => {
        expect(() => {repeatMessage("hello", "world")}).toThrow();
        expect(() => {repeatMessage("hello", "2")}).not.toThrow();
    })
    
    test("repeatMessage throws an error if its first argument is falsey.", () => {
        expect(() => {repeatMessage("", 1)}).toThrow();
        expect(() => {repeatMessage(0, 1)}).toThrow();
        expect(() => {repeatMessage(null, 1)}).toThrow();
        expect(() => {repeatMessage(false, 1)}).toThrow();
    });

    test("repeatMessage should still work if its second argument is falsey.", () => {
        expect(repeatMessage("hello", null)).toEqual("hello");
        expect(repeatMessage("hello", false)).toEqual("hello");
        expect(repeatMessage("hello", "")).toEqual("hello");
        expect(repeatMessage("hello", 0)).toEqual("hello");
        expect(repeatMessage("hello")).toEqual("hello");

    })
    
})



