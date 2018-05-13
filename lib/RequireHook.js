const Module = require("module");

const originalRequire = Module.prototype.require;

class ModuleRequirer {
  requireModule(path) {
    var self = this;
    return {
      name: path
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, ""),
      moduleObject: originalRequire(path)
    };
  }
}

module.exports = new ModuleRequirer();
