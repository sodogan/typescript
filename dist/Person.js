"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    set FirstName(fName) {
        this._firstName = fName;
    }
    get FirstName() {
        return this._firstName;
    }
    get LastName() {
        return this._lastName;
    }
    describe() {
        const str = "the person is " + this.FirstName + this.LastName;
        console.log(str);
        return this;
    }
    greet() {
        console.log("hello from greet Person Base class");
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map