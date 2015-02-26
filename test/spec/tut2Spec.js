describe("helloWorld", function(){
    it("says Hello", function(){
        expect(helloWorld()).toEqual("Hello World");
    });
});

describe("helloWorld", function() {
    it("says world", function() {
        expect(helloWorld()).toContain("World");
    });
});

