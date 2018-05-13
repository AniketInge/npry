const Loader = require("../../lib/Loader");
const assert = require("assert");
const path = require("path");

describe("Loader.js", () => {
  describe("Loader", () => {
    let loader;

    // Utility Method
    getAbsolutePath = filePath => {
      return path.join(__dirname, filePath);
    };

    beforeEach(() => {
      loader = new Loader();
    });

    it("Should take only one argument", () => {
      assert.ok(
        loader.load(getAbsolutePath("media/file1.txt")),
        "Should accept 1 argument"
      );
    });

    it("Should set the internal filename variable to whatever was passed", () => {
      loader.load(getAbsolutePath("media/file1.txt"));
      assert.equal(loader.getFile(), getAbsolutePath("media/file1.txt"));
    });

    it("Should check if the file exists", () => {
      loader.load(getAbsolutePath("media/file1.txt"));
      assert.equal(loader.hasLoaded(), true);
    });

    it("Should throw an exception if the file doesn't exist", () => {
      assert.throws(() => {
        loader.load(getAbsolutePath("media/doesnot-exist.txt"));
      }, Error);
    });

    it("File path must be absolute", () => {
      assert.throws(() => loader.load("media/file1.txt"), Error);
    });
  });
});
