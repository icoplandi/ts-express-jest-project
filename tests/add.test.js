"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("../src/add");
test("1 + 2 = 3", () => {
    expect((0, add_1.add)(1, 2)).toBe(3);
});
