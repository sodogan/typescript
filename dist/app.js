"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Student_1 = require("./Student");
const Burger_1 = require("./Burger");
const _ = require("lodash");
const solen = new Person_1.Person("solen", "dogan");
const eren = new Person_1.Person("eren", "dogan");
const didar = new Student_1.Student("didar", "dogan", 12);
const list = [solen, eren, didar];
const _newarray = _.reverse(list);
let myBurger1 = new Burger_1.Burger("large", 12);
let myBurger2 = new Burger_1.Burger(3, 12);
console.log(myBurger2.Size);
//# sourceMappingURL=app.js.map