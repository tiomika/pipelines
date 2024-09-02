import assert from "node:assert";
import { it } from "node:test";
import { add, subtract, divide, multiply } from "./index.js";

it("should sum 1 + 1 equals 2", () => {
  assert.equal(add(1, 1), 2);
});

it("should subtract 1 - 1 equals 0", () => {
  assert.equal(subtract(1, 1), 0);
});

it("should divide 2 / 2 equals 1", () => {
  assert.equal(divide(2, 2), 1);
});

it("should multiply 2 * 2 equals 4", () => {
  assert.equal(multiply(2, 2), 4);
});
