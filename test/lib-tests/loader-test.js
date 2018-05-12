const Loader = require("../../lib/Loader");
const assert = require("assert");

describe("Loader.js", () => {
  describe("Loader", () => {
    let loader;
    beforeEach(() => {
      loader = new Loader();
    });

    it("Should take only one argument", () => {
      assert.ok(loader.load("file.js"), "Should accept 1 argument");
    });

    it("Should set the internal filename variable to whatever was passed", () => {
      loader.load("file2.js");
      assert.equal(loader.getFile(), "file2.js");
    });
  });
});
