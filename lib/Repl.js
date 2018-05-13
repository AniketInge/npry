/// <reference path="../types/lib/Repl.d.ts"/>
/*
 * Feature Set #Repl
 * 
 * 1. Must be able to Load a file using Loader.js/Loader
 * 2. Read in a file and inspect classes
 * 3. Should be able to ls to get all the public classes in the file
 * 4. Should be able to ls -al to get all the contents of the file as a browsable model
 * 5. Should be able to cd into a <CodeObject>
 * 6. The code object then looks like a directory-tree while user will be able to evaluate leaf-nodes of the directory 
 * 
 */

const repl = require("repl");
const path = require("path");
const Loader = require("./Loader");
const ModuleRequirer = require("./RequireHook");
class Repl {
  /**
   * Constructor for Repl
   * @param {Loader} $loader
   */
  constructor($loader) {
    this.$loader = $loader || new Loader();
    this.$codeContext = "global";
    this.$prompt = `$npry (${this.$codeContext})> `;
    this.$replServer = null;
  }

  setupRepl() {
    this.$replServer = repl.start({
      useColors: true,
      prompt: this.$prompt
    });
    this.setupLs();
    this.loadModule(this.$loader.getFile());
  }

  setupLs() {
    this.$replServer.context.userData = [];
    this.$replServer.defineCommand("ls", {
      help: "list current CodeObject. Usage ls",
      action: () => {
        console.log(this.$replServer.context.userData);
        this.$replServer.displayPrompt();
      }
    });
  }

  loadModule(moduleName) {
    let c = ModuleRequirer.requireModule(moduleName);
    if (typeof c === Function) {
      let obj = new c.moduleObject();
      this.$replServer.context.userData.push({
        name: obj.constructor.name,
        data: obj
      });
      this.$replServer.context[obj.constructor.name] = obj;
      this.$replServer.setPrompt(`$npry (${new c().constructor.name}) >`);
    } else {
      this.$replServer.context.userData.push({
        name: c.name,
        data: c.moduleObject
      });
      this.$replServer.context[c.name] = c.moduleObject;
      this.$replServer.setPrompt(`$npry (${c.name}) >`);
    }
    this.$replServer.displayPrompt();
  }
}

module.exports = Repl;
