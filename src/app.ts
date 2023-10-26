import { Person } from "./Person";
import { Personable } from "./Personable";
import { Student } from "./Student";
import { Mode } from "./Mode";
import { Burger } from "./Burger";

import * as _ from 'lodash';

const solen= new Person("solen","dogan");
const eren= new Person("eren","dogan");
const didar:Student= new Student("didar","dogan",12);

const list:Person[] = [solen,eren,didar];
const _newarray = _.reverse(list);




//Burger
let myBurger1 = new Burger("large",12);

let myBurger2 = new Burger(3,12);
console.log(myBurger2.Size);
