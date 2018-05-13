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
    if (filename.length > 1) throw "Cannot have more than 1 argument for load";
    this.filename = filename[0];
    if (!fs.existsSync(path.join(__dirname, this.filename))) {
      throw new Error("file does not exist");
    }
    return true;
  }

  getFile() {
    return this.filename;
  }

  hasLoaded() {
    return true;
  }
}

module.exports = Loader;
