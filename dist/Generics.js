"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const didar = new Student_1.Student("didar", "dogan", 12);
function testFunc(item) {
    item.describe().greet();
    return item;
}
let myStudent = testFunc(didar);
function testMe(numbers) {
    numbers.shift();
    return numbers;
}
console.log(testMe([1, 3]));
console.log(testMe(["1", "3"]));
//# sourceMappingURL=Generics.js.map