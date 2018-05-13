const Loader = require("../../lib/Loader");
const assert = require("assert");

describe("Loader.js", () => {
  describe("Loader", () => {
    let loader;
    beforeEach(() => {
      loader = new Loader();
    });

    it("Should take only one argument", () => {
      assert.ok(loader.load("media/file1.txt"), "Should accept 1 argument");
    });

    it("Should set the internal filename variable to whatever was passed", () => {
      loader.load("media/file1.txt");
      assert.equal(loader.getFile(), "media/file1.txt");
    });

    it("Should check if the file exists", () => {
      loader.load("media/file1.txt");
      assert.equal(loader.hasLoaded(), true);
    });

    it("Should throw an exception if the file doesn't exist", () => {
      assert.throws(() => {
        loader.load("media/doesnot-exist.txt");
      }, Error);
    });
  });
});
