"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Student_1 = require("./Student");
const Burger_1 = require("./Burger");
const _ = __importStar(require("lodash"));
const solen = new Person_1.Person("solen", "dogan");
const eren = new Person_1.Person("eren", "dogan");
const didar = new Student_1.Student("didar", "dogan", 12);
const list = [solen, eren, didar];
const _newarray = _.reverse(list);
let myBurger1 = new Burger_1.Burger("large", 12);
let myBurger2 = new Burger_1.Burger(3, 12);
console.log(myBurger2.Size);
//# sourceMappingURL=app.js.map