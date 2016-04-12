// application code use `assert` module
const assert = require("assert");
export function hello(name) {
    assert(typeof name === "string");
    return "Hello " + name;
}