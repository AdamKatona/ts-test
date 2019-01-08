"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("./hello-world");
const chai_1 = require("chai");
require("mocha");
describe('Hello function', () => {
    it('should return hello world', () => {
        const result = hello_world_1.hello();
        chai_1.expect(result).to.equal('Hello world!');
    });
});
