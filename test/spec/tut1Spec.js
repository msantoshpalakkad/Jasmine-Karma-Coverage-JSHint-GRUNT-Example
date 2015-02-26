describe("Our data array", function() {
  it("has two properties", function() {
    expect(Object.keys(ourDataArray).length).toBe(2);
  });
});

describe("Our data array", function() {
  it("has four items", function() {
    expect(ourDataArray.Questions.length).toBe(4);
  });
});
describe("Answers", function() {
  it("has four items", function() {
    expect(ourDataArray.Answers.length).toBe(4);
  });
});