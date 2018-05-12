const assert = require("assert");
const Index = require("../TestTest");

describe("TestTest.js", () => {
  describe("TestTest Module", () => {
    it("should contain hello() method", () => {
      assert.equal(Index.hello(), "Hello");
    });
    it("should contain hi() method", () => {
      assert.equal(Index.hi(), "hi");
    });
  });
});
