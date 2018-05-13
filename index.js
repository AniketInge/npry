const Loader = require("./lib/Loader");
const Repl = require("./lib/Repl");
const path = require("path");

const loader = new Loader();
loader.load(path.join(__dirname, "testFiles", "test.js"));

const repl = new Repl(loader);
repl.setupRepl();
