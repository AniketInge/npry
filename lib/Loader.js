const path = require("path");
const os = require("os");
const fs = require("fs");

class Loader {
  constructor() {
    this.filename = "";
  }

  /**
   * Load file into Loader
   * @param {string} filename only 1 filename allowed!
   */
  load(...filename) {
    if (arguments.length != 1) {
      throw new Error("should have 1 argument for load()");
    }
    if (!path.isAbsolute(filename[0])) {
      throw new Error("absolute path required");
    }
    if (!fs.existsSync(filename[0])) {
      throw new Error("file does not exist");
    }
    this.filename = filename[0];
    return true;
  }

  getFile() {
    return this.filename;
  }

  hasLoaded() {
    return path.isAbsolute(this.filename);
  }
}

module.exports = Loader;
