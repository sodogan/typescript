"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(firstName, lastName, score) {
        super(firstName, lastName);
        this.score = score;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map