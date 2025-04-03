"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return person;
}());
exports.person = person;
