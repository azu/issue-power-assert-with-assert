const assert = require("power-assert");
import {hello} from "../src/index";
describe("hello", function () {
    it("should accept string", function () {
        hello(42);  // Should throw error via assert and fail tests.
    });
});