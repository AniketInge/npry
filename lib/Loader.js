class Loader {
  /**
   * Load filename into Loader
   * @param {*} filename only 1 filename allowed!
   */
  constructor() {
    this.filename = "";
  }

  load(...filename) {
    if (filename.length > 1) throw "Cannot have more than 1 argument for load";
    this.filename = filename[0];
    return true;
  }

  getFile() {
    return this.filename;
  }
}

module.exports = Loader;
