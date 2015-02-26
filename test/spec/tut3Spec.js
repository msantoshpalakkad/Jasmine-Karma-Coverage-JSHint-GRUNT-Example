describe("Person is able to ", function () {
    it("tell secret to Don", function () {
        var fakePerson = new Person(); 
        expect(fakePerson.tellSecretToDon()).toContain("fake");
    });
});


describe("Person", function () {
    it("tells the fake secret to Don", function () {
        var fakePerson = new Person();
        spyOn(fakePerson, "tellSecretToDon");
        fakePerson.tellASecret("fake");
        expect(fakePerson.tellSecretToDon).toHaveBeenCalled();
    });
});

describe("Person", function () {
    it("does not tell the top secret to Don", function () {
        var fakePerson = new Person();
        spyOn(fakePerson, "tellSecretToDon");
        fakePerson.tellASecret("secret");
        expect(fakePerson.tellSecretToDon).not.toHaveBeenCalled();
    });
});
